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

  getItem(slug, option) {
    return dispatch => {
      dispatch({
        type: ProductType.GET_PRODUCT_PENDING
      })
      api
        .product
        .getItem(slug, option)
        .then(res => {
          dispatch({
            type: ProductType.GET_PRODUCT_SUCCESS,
            payload: res.result.object
          })
        })
        .catch(error => {
          dispatch({
            type: ProductType.GET_PRODUCT_ERROR,
            payload: error
          })
        })
    }
  }

  getListSimilarProduct = (idCategory, idProduct, option = {}) => {
    return dispatch => {
        dispatch({
            type: ProductType.FETCH_SIMILARPRODUCT_PENDING
        })
        api
            .brand
            .getListFromBrand(idCategory, idProduct, option)
            .then(res => {
                dispatch({
                    type: ProductType.FETCH_SIMILARPRODUCT_SUCCESS,
                    payload: res.result.object
                })
            })
            .catch(error => {
                dispatch({
                    type: ProductType.FETCH_SIMILARPRODUCT_ERROR,
                    payload: error
                })
            })
    }
}
}