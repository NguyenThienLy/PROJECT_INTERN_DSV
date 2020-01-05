import * as _ from "lodash";

import ProductType from '../actions/types/product';

export class ProductReducer {
  constructor() {
    this.initState = {
      items: [],

      fetching: false,
      fetchError: null,

      creating: false,
      isCreateSuccess: false,
      createError: null,

      getting: false,
      isGetSuccess: false,
      getError: null,
    };
  }

  reducer = (state = this.initState, action) => {
    switch (action.type) {
      // Fetching data pending
      case ProductType.FETCH_PRODUCTFILTER_PENDING:
        state = {
          ...state,
          fetching: true,
          fetchError: null
        };
        break;

      // Fetching data success
      case ProductType.FETCH_PRODUCTFILTER_SUCCESS:
        state = {
          ...state,
          fetching: false,
          fetchError: null,
          items: action.payload
        };
        break;

      // Fetching data error
      case ProductType.FETCH_PRODUCTFILTER_ERROR:
        state = {
          ...state,
          fetching: false,
          fetchError: action.payload
        };
        break;

      // Getting data pending
      case ProductType.GET_PRODUCT_PENDING:
        state = {
          ...state,
          getting: true,
          isGetSuccess: false,
          fetchError: null
        };
        break;

      // Getting data success
      case ProductType.GET_PRODUCT_SUCCESS:
        state = {
          ...state,
          getting: false,
          isGetSuccess: true,
          fetchError: null
        };
        // Check exist in state yet
        const index = state.items.findIndex(item => item._id === action.payload._id);

        if (index === -1)
          state.items.unshift(action.payload);
        break;

      // Getting data error
      case ProductType.GET_PRODUCT_ERROR:
        state = {
          ...state,
          getting: false,
          isGetSuccess: false,
          fetchError: action.payload
        };
        break;

      // increase quantity product 
      case ProductType.INCREASE_QUANTITY_PRODUCT:
        const indexIncrease = state.items.findIndex(item => item._id === action.payload.id);

        if (indexIncrease !== -1) {
          const itemsUpdate = state.items;
          itemsUpdate[indexIncrease].quantity += action.payload.quantity;
          state = {
            ...state,
            items: itemsUpdate
          };
        }
        break;

      // decrease quantity product 
      case ProductType.DECREASE_QUANTITY_PRODUCT:
        const indexDecrease = state.items.findIndex(item => item._id === action.payload.id);

        if (indexDecrease !== -1) {
          const itemsUpdate = state.items;
          itemsUpdate[indexDecrease].quantity -= action.payload.quantity;
          state = {
            ...state,
            items: itemsUpdate
          };
        }
        break;


      // creating data pedding
      case ProductType.CREATE_PRODUCT_PENDING:
        state = {
          ...state,
          creating: true,
          isCreateSuccess: false,
          createError: null
        };
        break;


      // creating item success
      case ProductType.CREATE_PRODUCT_SUCCESS:
        state = {
          ...state,
          creating: false,
          isCreateSuccess: true,
          createError: null
        };

        break;

      // creating item error
      case ProductType.CREATE_PRODUCT_PENDING:
        state = {
          ...state,
          creating: false,
          isCreateSuccess: false,
          createError: null
        };
        break;

    }

    return state;
  }
}
