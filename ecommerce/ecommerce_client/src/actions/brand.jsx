import { api } from '../services';
import BrandType from './types/brand';

export class BrandAction {
    constructor() {
    }

    getItemFromBrand = (idBrand, idProduct, option = {}) => {
        return dispatch => {
            dispatch({
                type: BrandType.GET_FROMBRAND_PENDING
            })
            api
                .brand
                .getListExcept(idBrand, idProduct, option)
                .then(res => {
                    dispatch({
                        type: BrandType.GET_FROMBRAND_SUCCESS,
                        payload: res.result.object
                    })
                })
                .catch(error => {
                    dispatch({
                        type: BrandType.GET_FROMBRAND_ERROR,
                        payload: error
                    })
                })
        }
    }
}