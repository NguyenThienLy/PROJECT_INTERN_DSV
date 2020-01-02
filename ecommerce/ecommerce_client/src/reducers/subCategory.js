import * as _ from "lodash";

import SubCategoryType from '../actions/types/subCategory';

export class SubCategoryReducer {
    constructor() {
        this.initState = {
            items: [],

            gettingSimilarProduct: false,
            isGetSimilarProductSuccess: false,
            getSimilarProductError: null,
            dataSimilarProduct: []
        };
    }

    reducer = (state = this.initState, action) => {
        switch (action.type) {
            // getting similar product pending
            case SubCategoryType.FETCH_SIMILARPRODUCT_PENDING:
                state = {
                    ...state,
                    gettingSimilarProduct: true,
                    isGetSimilarProductSuccess: false,
                    getSimilarProductError: null,
                    dataSimilarProduct: []
                };
                break;

            // getting similar product success
            case SubCategoryType.FETCH_SIMILARPRODUCT_SUCCESS:
                state = {
                    ...state,
                    gettingSimilarProduct: false,
                    isGetSimilarProductSuccess: true,
                    getSimilarProductError: null,
                    dataSimilarProduct: action.payload
                };
                break;

            // getting similar product error
            case SubCategoryType.FETCH_SIMILARPRODUCT_ERROR:
                state = {
                    ...state,
                    gettingSimilarProduct: false,
                    isGetSimilarProductSuccess: true,
                    getSimilarProductError: action.payload,
                    dataSimilarProduct: []
                };
                break;
        }

        return state;
    }
}