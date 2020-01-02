import * as _ from "lodash";

import { BaseReducer } from "./base";
import ProductType from '../actions/types/product';

export class ProductReducer {
  constructor() {
    this.initState = {
      items: [],

      fetching: false,
      fetchError: null,

      getting: false,
      isGetSuccess: false,
      getError: null,

      gettingSimilarProduct: false,
      isGetSimilarProductSuccess: false,
      getSimilarProductError: null,
      dataSimilarProduct: []
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
        const item = state.items.find(item => item._id === action.payload._id);

        if (item === undefined)
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

      // getting similar product pending
      case ProductType.FETCH_SIMILARPRODUCT_PENDING:
        state = {
          ...state,
          gettingSimilarProduct: true,
          isGetSimilarProductSuccess: false,
          getSimilarProductError: null,
          dataSimilarProduct: []
        };
        break;

      // getting similar product success
      case ProductType.FETCH_SIMILARPRODUCT_SUCCESS:
        state = {
          ...state,
          gettingSimilarProduct: false,
          isGetSimilarProductSuccess: true,
          getSimilarProductError: null,
          dataSimilarProduct: action.payload
        };
        break;

      // getting similar product error
      case ProductType.FETCH_SIMILARPRODUCT_ERROR:
        state = {
          ...state,
          gettingSimilarProduct: false,
          isGetSimilarProductSuccess: true,
          getSimilarProductError: action.payload,
          dataSimilarProduct: []
        };
        break;
    }

    return state;
  }
}
