import { BaseAction } from './base'
import { api } from '../services'
import ProductType from './types/product'

export class ProductAction {
  constructor() { }

  getProductFilter = (fitler) => {
    return dispatch => {
      dispatch({
        type: ProductType.FETCH_PRODUCTFILTER_PENDING
      });

      api
        .product
        .getProductFilter(fitler)
        .then(res => {
          dispatch({
            type: ProductType.FETCH_PRODUCTFILTER_SUCCESS,
            payload: res.result.object
          });
        })
        .catch(error => {
          dispatch({
            type: ProductType.FETCH_PRODUCTFILTER_ERROR,
            payload: error
          });
        });
    };
  };
}