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

  getItem(slug, option = {}) {
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

  decreaseQuantityProduct = (id, quantity) => {
    return dispatch => {
      dispatch({
        type: ProductType.DECREASE_QUANTITY_PRODUCT,
        payload: { id, quantity }
      });
    }
  }

  increaseQuantityProduct = (id, quantity) => {
    return dispatch => {
      dispatch({
        type: ProductType.INCREASE_QUANTITY_PRODUCT,
        payload: { id, quantity }
      });
    }
  }

  createProduct = (body, option = {}) => {
    return dispatch => {
      dispatch({
        type: ProductType.CREATE_PRODUCT_PENDING
      })
      api
        .product
        .createProduct(body, option)
        .then(res => {
          dispatch({
            type: ProductType.CREATE_PRODUCT_SUCCESS,
            payload: res.result.object
          })
        })
        .catch(error => {
          dispatch({
            type: ProductType.CREATE_PRODUCT_ERROR,
            payload: error
          })
        })
    }
  }

  updateProduct = (id, body, option = {}) => {
    return dispatch => {
      dispatch({
        type: ProductType.UPDATE_PRODUCT_PENDING
      })
      api
        .product
        .updateProduct(id, body, option)
        .then(res => {
          dispatch({
            type: ProductType.UPDATE_PRODUCT_SUCCESS,
            payload: res.result.object
          })
        })
        .catch(error => {
          dispatch({
            type: ProductType.UPDATE_PRODUCT_ERROR,
            payload: error
          })
        })
    }
  }
}