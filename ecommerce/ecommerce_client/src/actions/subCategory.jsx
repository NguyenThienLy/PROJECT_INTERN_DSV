import { BaseAction } from './base'
import { api } from '../services'
import SubCategoryType from './types/subCategory'

export class SubCategoryAction {
  constructor() { }

  getListSimilarProduct = (idSubCategory, idProduct, option = {}) => {
    return dispatch => {
      dispatch({
        type: SubCategoryType.FETCH_SIMILARPRODUCT_PENDING
      })
      api
        .subCategory
        .getListSimilarProduct(idSubCategory, idProduct, option)
        .then(res => {
          dispatch({
            type: SubCategoryType.FETCH_SIMILARPRODUCT_SUCCESS,
            payload: res.result.object
          })
        })
        .catch(error => {
          dispatch({
            type: SubCategoryType.FETCH_SIMILARPRODUCT_ERROR,
            payload: error
          })
        })
    }
  }
}