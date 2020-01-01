import { BaseAction } from './base';
import { api } from '../services';
import CategoryType from './types/category';

export class CategoryAction {
    constructor() {
    }

    getList = (option = {}) => {
        return dispatch => {
            dispatch({
                type: CategoryType.FETCH_CATEGORY_PENDING
            })
            api
                .category
                .getList(option)
                .then(res => {
                    dispatch({
                        type: CategoryType.FETCH_CATEGORY_SUCCESS,
                        payload: res.result.object
                    })
                })
                .catch(error => {
                    dispatch({
                        type: CategoryType.FETCH_CATEGORY_ERROR,
                        payload: error
                    })
                })
        }
    }
}