import * as _ from "lodash";

import { BaseReducer } from "./base";
import BrandType from '../actions/types/brand';

export class BrandReducer {
    constructor() {
        this.initState = {
            items: [],

            fetching: false,
            fetchError: null,

            gettingfromBrand: false,
            isGetFromBrandSuccess: false,
            getFromBrandError: null,
            dataFromBrand: null
        };
    }

    reducer = (state = this.initState, action) => {
        switch (action.type) {
            // getting from brand pending
            case BrandType.GET_FROMBRAND_PENDING:
                state = {
                    ...state,
                    gettingfromBrand: true,
                    isGetFromBrandSuccess: false,
                    getFromBrandError: null,
                    dataFromBrand: null
                };
                break;

            // getting from brand success
            case BrandType.GET_FROMBRAND_SUCCESS:
                state = {
                    ...state,
                    gettingfromBrand: false,
                    isGetFromBrandSuccess: true,
                    getFromBrandError: null,
                    dataFromBrand: action.payload
                };
                break;

            // getting from brand error
            case BrandType.GET_FROMBRAND_ERROR:
                state = {
                    ...state,
                    gettingfromBrand: false,
                    isGetFromBrandSuccess: false,
                    getFromBrandError: action.payload,
                    dataFromBrand: null
                };
                break;
        }

        return state;
    }
}