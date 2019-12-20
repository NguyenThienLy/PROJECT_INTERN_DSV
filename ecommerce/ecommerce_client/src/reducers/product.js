import { BaseReducer } from "./base";
import * as _ from "lodash";

export class ProductReducer extends BaseReducer {
  constructor() {
    super("product");
   
    this.initState = {
      productFilter: {
        fetching: false,
        fetchError: null,
        data: []
      }
    };
 
    this.actions = {
      fetchProductFilterPending: `FETCHPRODUCTFILTER_${this.name}_PENDING`,
      fetchProductFilterSuccess: `FETCHPRODUCTFILTER_${this.name}_SUCCESS`,
      fetchProductFilterError: `FETCHPRODUCTFILTER_${this.name}_ERROR`,
    };
  }

  reducer = (state = this.initState, action) => {
    switch (action.type) {
        
      // Getting data for product filter
      case this.actions.fetchProductFilterPending:
        return _.merge(
          {},
          {
            productFilter: {
              fetching: true,
              fetchError: null,
              data: []
            }
          }
        );

      // Getting data for product filter
      case this.actions.fetchProductFilterSuccess:
        return _.merge(
          {},
          {
            productFilter: {
              data: action.payload,
              fetching: false,
              fetchError: null
            }
          }
        );

      // Getting data for product filter
      case this.actions.fetchProductFilterError:
        return _.merge(
          {},
          {
            productFilter: {
              data: [],
              fetching: false,
              fetchError: action.payload
            }
          }
        );
    }

    return state;
  };
}
