import { api } from '../services';
import BrandType from './types/brand';

export class BrandAction {
    constructor() {
    }

    getListFromBrand = (idBrand, idProduct, option = {}) => {
        return dispatch => {
            dispatch({
                type: BrandType.FETCH_FROMBRAND_PENDING
            })
            api
                .brand
                .getListFromBrand(idBrand, idProduct, option)
                .then(res => {
                    dispatch({
                        type: BrandType.FETCH_FROMBRAND_SUCCESS,
                        payload: res.result.object
                    })
                })
                .catch(error => {
                    dispatch({
                        type: BrandType.FETCH_FROMBRAND_ERROR,
                        payload: error
                    })
                })
        }
    }

    getList = (option = {}) => {
        return dispatch => {
            dispatch({
                type: BrandType.FETCH_BRAND_PENDING
            })
            api
                .brand
                .getList(option)
                .then(res => {
                    dispatch({
                        type: BrandType.FETCH_BRAND_SUCCESS,
                        payload: res.result.object
                    })
                })
                .catch(error => {
                    dispatch({
                        type: BrandType.FETCH_BRAND_ERROR,
                        payload: error
                    })
                })
        }
    }
}