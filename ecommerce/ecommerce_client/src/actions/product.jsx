import { BaseAction } from './base'
import { api } from '../services'
import ProductType from './types/product'

export class ProductAction extends BaseAction {
    constructor() {
        super("product", api.product)
    }

    fetchProductFilter = (order, color, brand, size, status, subCategory, category, token) => {
        return dispatch => {
          dispatch({
            type: ProductType.FETCH_PRODUCTFILTER_PENDING
          });

          this.api
            .fetchProductFilter(order, color, brand, size, status, subCategory, category, token)
            .then(res => {
              dispatch({
                type:  ProductType.FETCH_PRODUCTFILTER_SUCCESS,
                payload: res.result.object
              });
              return res;
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