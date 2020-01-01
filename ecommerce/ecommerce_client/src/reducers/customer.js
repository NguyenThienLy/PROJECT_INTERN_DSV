import * as _ from "lodash";

import { BaseReducer } from './base';
import CustomerType from '../actions/types/customer';
import NameItem from '../config/localStorage';

export class CustomerReducer {
    constructor() {
        this.initState = {
            items: [],

            fetchingLogin: true,
            isFetchLoginSuccess: false,
            fetchLoginError: null,
            dataLogin: null,

            creating: true,
            isCreateSuccess: false,
            createError: null
        };
    }

    reducer = (state = this.initState, action) => {
        switch (action.type) {
            // Getting data for login
            case CustomerType.FETCH_LOGIN_PENDING:
                state = {
                    ...state,
                    fetchingLogin: true,
                    isFetchLoginSuccess: false,
                    fetchLoginError: null,
                    dataLogin: null
                };
                break;

            // Getting data for login
            case CustomerType.FETCH_LOGIN_SUCCESS:
                if (action.payload.isLogin) {
                    localStorage.setItem(NameItem.TOKEN_JWT, action.payload.accessToken);
                    localStorage.setItem(NameItem.USER_INFO, JSON.stringify(action.payload.customer));
                    localStorage.setItem(NameItem.EXPIRED_TOKEN, JSON.stringify(action.payload.expired));
                }

                state = {
                    ...state,
                    fetchingLogin: false,
                    isFetchLoginSuccess: true,
                    fetchLoginError: null,
                    dataLogin: action.payload
                };
                break;

            // Getting data for login
            case CustomerType.FETCH_LOGIN_ERROR:
                state = {
                    ...state,
                    fetchingLogin: false,
                    isFetchLoginSuccess: false,
                    dataLogin: null,
                    fetchError: action.payload
                };
                break;

            // creating data pedding
            case CustomerType.CREATE_REGISTER_PENDING:
                state = {
                    ...state,
                    creating: true,
                    isCreateSuccess: false,
                    createError: null
                };
                break;


            // creating item success
            case CustomerType.CREATE_REGISTER_SUCCESS:
                state = {
                    ...state,
                    creating: false,
                    isCreateSuccess: true,
                    createError: null
                };
                state.items.unshift(action.payload);

                break;

            // creating item error
            case CustomerType.CREATE_REGISTER_ERROR:
                state = {
                    ...state,
                    creating: false,
                    isCreateSuccess: false,
                    createError: null
                };
                break;
        }

        return state;
    }
}
