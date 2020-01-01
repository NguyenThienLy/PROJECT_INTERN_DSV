import * as _ from "lodash";

import { BaseReducer } from "./base";
import ProductType from '../actions/types/product';

export class ProductReducer {
  constructor() {
    this.initState = {
      items: [],

      fetching: false,
      fetchError: null
    };
  }

  reducer = (state = this.initState, action) => {
    switch (action.type) {
      // Getting data pending
      case ProductType.FETCH_PRODUCTFILTER_PENDING:
        state = {
          ...state,
          fetching: true,
          fetchError: null
        };
        break;

      // Getting data success
      case ProductType.FETCH_PRODUCTFILTER_SUCCESS:
        state = {
          ...state,
          fetching: false,
          fetchError: null,
          items: action.payload
        };
        break;

      // Getting data error
      case ProductType.FETCH_PRODUCTFILTER_ERROR:
        state = {
          ...state,
          fetching: false,
          fetchError: action.payload
        };
        break;
    }

    return state;
  }
}
