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
            dataFromBrand: []
        };
    }

    reducer = (state = this.initState, action) => {
        switch (action.type) {
            // getting from brand pending
            case BrandType.FETCH_FROMBRAND_PENDING:
                state = {
                    ...state,
                    gettingfromBrand: true,
                    isGetFromBrandSuccess: false,
                    getFromBrandError: null,
                    dataFromBrand: []
                };
                break;

            // getting from brand success
            case BrandType.FETCH_FROMBRAND_SUCCESS:
                state = {
                    ...state,
                    gettingfromBrand: false,
                    isGetFromBrandSuccess: true,
                    getFromBrandError: null,
                    dataFromBrand: action.payload
                };
                break;

            // getting from brand error
            case BrandType.FETCH_FROMBRAND_ERROR:
                state = {
                    ...state,
                    gettingfromBrand: false,
                    isGetFromBrandSuccess: false,
                    getFromBrandError: action.payload,
                    dataFromBrand: []
                };
                break;
        }

        return state;
    }
}