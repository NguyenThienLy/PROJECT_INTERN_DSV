import { BaseReducer } from './base';

import CategoryType from '../actions/types/category';

export class CategoryReducer {
    constructor() {
        this.initState = {
            items: [],

            fetching: false,
            fetchError: null
        };
    }

    reducer = (state = this.initState, action) => {
        switch (action.type) {
            // Getting data pending
            case CategoryType.FETCH_CATEGORY_PENDING:
                state = {
                    ...state,
                    fetching: true,
                    fetchError: null
                };
                break;

            // Getting data success
            case CategoryType.FETCH_CATEGORY_SUCCESS:
                state = {
                    ...state,
                    fetching: false,
                    fetchError: null,
                    items: action.payload
                };
                break;

            // Getting data error
            case CategoryType.FETCH_CATEGORY_ERROR:
                state = {
                    ...state,
                    fetching: false,
                    fetchError: action.payload
                };
                break;
        }

        return state;
    }
}