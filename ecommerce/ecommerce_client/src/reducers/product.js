import * as _ from "lodash";

import { BaseReducer } from "./base";
import ProductType from '../actions/types/product'

export class ProductReducer extends BaseReducer {
  constructor() {
    super("product");

    const products = [
      {
        id: "1",
        name: "Collete Stretch Linen Minidress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
      },
      {
        id: "2",
        name: "Button-Down Denim Mini Dress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
      },
      {
        id: "3",
        name: "Plunge V-neck Denim Mini Dress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
      },
      {
        id: "4",
        name: "long dress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
      },
      {
        id: "5",
        name: "long dress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
      },
      {
        id: "6",
        name: "long dress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
      },
      {
        id: "7",
        name: "long dress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
      },
      {
        id: "8",
        name: "long dress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
      },
      {
        id: "9",
        name: "long dress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
      },
      {
        id: "10",
        name: "long dress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
      },
      {
        id: "11",
        name: "long dress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
      },
      {
        id: "12",
        name: "long dress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
      }, {
        id: "13",
        name: "long dress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
      },
      {
        id: "14",
        name: "long dress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
      },
      {
        id: "15",
        name: "long dress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
      },
      {
        id: "16",
        name: "long dress",
        link: "https://i.imgur.com/JizfqjJ.jpg",
        price: "$69.00"
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
