import { BaseAction } from './base'
import { api } from '../services'

export class ProductAction extends BaseAction {
    constructor() {
        super("product", api.product)
    }

    fetchProductFilter = (order, color, brand, size, status, subCategory, category, token) => {
        return dispatch => {
          dispatch({
            type: `FETCHPRODUCTFILTER_${this.name}_PENDING`
          });

          this.api
            .fetchProductFilter(order, color, brand, size, status, subCategory, category, token)
            .then(res => {
              dispatch({
                type: `FETCHPRODUCTFILTER_${this.name}_SUCCESS`,
                payload: res.result.object
              });
              return res;
            })
            .catch(error => {
              dispatch({
                type: `FETCHPRODUCTFILTER_${this.name}_ERROR`,
                payload: error
              });
            });
        };
      };
}