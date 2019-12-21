import * as _ from "lodash";

import { BaseReducer } from "./base";
import ProductType from '../actions/types/product'

export class ProductReducer extends BaseReducer {
  constructor() {
    super("product");

    const products = [
      {
        id: "1",
        name: "sort dress",
        link: "https://i.imgur.com/6RI3BOq.jpg"
      },
      {
        id: "2",
        name: "medium dress",
        link: "https://i.imgur.com/t5DiPw1.jpg"
      },
      {
        id: "3",
        name: "long dress",
        link: "https://i.imgur.com/JizfqjJ.jpg"
      }
    ]

    this.initState = {
      productFilter: {
        fetching: false,
        fetchError: null,
        data: products
      }
    };
  }

  reducer = (state = this.initState, action) => {
    switch (action.type) {

      // Getting data for product filter
      case ProductType.FETCH_PRODUCTFILTER_PENDING:
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
      case ProductType.FETCH_PRODUCTFILTER_SUCCESS:
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
      case ProductType.FETCH_PRODUCTFILTER_ERROR:
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
