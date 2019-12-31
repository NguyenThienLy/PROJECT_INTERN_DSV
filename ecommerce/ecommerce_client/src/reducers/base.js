import * as _ from "lodash";

export class BaseReducer {
  constructor(name) {
    this.name = name.toUpperCase();
  
    this.customInitState = {};
  
    this.initState = _.merge(
      {
        items: [],
        
        fetching: false,
        fetchError: null,
       
        updating: false,
        isUpdateSuccess: false,
        isUpdateError: false,
        updateError: null,
       
        adding: false,
        isAddSuccess: false,
        isAddError: false,
        addError: null,
       
        deleting: false,
        isDeleteError: false,
        isDeleteSuccess: false,
        deleteError: null
      },
      this.customInitState
    );

    this.customActions = {};
   
    this.actions = _.merge(
      {
        fetchPending: `FETCH_${this.name}_PENDING`,
        fetchSuccess: `FETCH_${this.name}_SUCCESS`,
        fetchError: `FETCH_${this.name}_ERROR`,
        addPending: `ADD_${this.name}_PENDING`,
        addSuccess: `ADD_${this.name}_SUCCESS`,
        addError: `ADD_${this.name}_ERROR`,
        addRefresh: `ADD_${this.name}_REFRESH`,
        deletePending: `DELETE_${this.name}_PENDING`,
        deleteSuccess: `DELETE_${this.name}_SUCCESS`,
        deleteError: `DELETE_${this.name}_ERROR`,
        deleteRefresh: `DELETE_${this.name}_REFRESH`,
        updatePending: `UPDATE_${this.name}_PENDING`,
        updateSuccess: `UPDATE_${this.name}_SUCCESS`,
        updateError: `UPDATE_${this.name}_ERROR`,
        updateRefresh: `UPDATE_${this.name}_REFRESH`,
        concatPending: `CONCAT_${this.name}_PENDING`,
        concatSuccess: `CONCAT_${this.name}_SUCCESS`,
        concatError: `CONCAT_${this.name}_ERROR`
      },
      this.customActions
    );
  }

  reducer = (state = this.initState, action) => {
    let itemIndex = -1;
   
    switch (action.type) {
      case this.actions.fetchPending:
        state = { ...state, fetching: true };
        break;
      case this.actions.fetchSuccess:
        state = { ...state, fetching: false, items: action.payload };
        break;
      case this.actions.fetchError:
        state = { ...state, fetching: false, fetchError: action.payload };
        break;
      case this.actions.addPending:
        state = { ...state, adding: true };
        break;
      case this.actions.addSuccess:
        state = { ...state, adding: false, isAddSuccess: true };
        state.items.unshift(action.payload);
        break;
      case this.actions.addError:
        state = {
          ...state,
          adding: false,
          isAddError: true,
          addError: action.payload
        };
        break;
      case this.actions.addRefresh:
        state = {
          ...state,
          adding: false,
          isAddError: false,
          addError: null,
          isAddSuccess: false
        };
        break;
      case this.actions.deletePending:
        state = { ...state, deleting: true };
        break;
      case this.actions.deleteSuccess:
        state = { ...state, deleting: false, isDeleteSuccess: true };
        itemIndex = state.items.findIndex(item => {
          return item._id === action.payload._id;
        });
        if (itemIndex !== -1) {
          state.items.splice(itemIndex, 1)
        }
        break;
      case this.actions.deleteError:
        state = {
          ...state,
          deleting: false,
          isDeleteError: true,
          deleteError: action.payload
        };
        break;
      case this.actions.deleteRefresh:
        state = {
          ...state,
          deleting: false,
          isDeleteError: false,
          deleteError: null,
          isDeleteSuccess: false
        };
        break;
      case this.actions.updatePending:
        state = { ...state, updating: true };
        break;
      case this.actions.updateSuccess:
        itemIndex = state.items.findIndex(item => {
          return item._id === action.payload._id;
        });
        if (itemIndex !== -1) {
          state.items[itemIndex] = action.payload;
        }
        break;
      case this.actions.updateError:
        state = {
          ...state,
          updating: false,
          isUpdateError: true,
          updateError: action.payload
        };
        break;
      case this.actions.updateRefresh:
        state = {
          ...state,
          updating: false,
          isUpdateError: false,
          updateError: null,
          isUpdateSuccess: false
        };
        break;
      case this.actions.concatPending:
        break;
      case this.actions.concat:
        const actionPayload = Array.isArray(action.payload)
          ? action.payload
          : [action.payload];
        state = _.unionBy(state.concat(action.payload), "_id");
        break;
      case this.actions.concatError:
        break;
      default:
        return this.customReducer(state, action);
    }

    return state;
  };

  customReducer(state, action) {
    return state;
  }
}
