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
            createError: null,

            fetchingLogout: true,
            isFetchLogoutSuccess: false,
            fetchLogoutError: null,
            dataLogout: null,
        };
    }

    reducer = (state = this.initState, action) => {
        switch (action.type) {
            // Getting data for login pending
            case CustomerType.FETCH_LOGIN_PENDING:
                state = {
                    ...state,
                    fetchingLogin: true,
                    isFetchLoginSuccess: false,
                    fetchLoginError: null,
                    dataLogin: null
                };
                break;

            // Getting data for login success
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
                    dataLogin: action.payload,
                    fetchingLogout: true,
                    isFetchLogoutSuccess: false,
                    fetchLogoutError: null,
                    dataLogout: null,
                };
                break;

            // Getting data for login error
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

            // Getting data for logout pending
            case CustomerType.FETCH_LOGOUT_PENDING:
                state = {
                    ...state,
                    fetchingLogout: true,
                    isFetchLogoutSuccess: false,
                    fetchLogoutError: null,
                    dataLogout: null
                };
                break;

            // Getting data for logout success
            case CustomerType.FETCH_LOGOUT_SUCCESS:
                localStorage.removeItem(NameItem.TOKEN_JWT);
                localStorage.removeItem(NameItem.USER_INFO);
                localStorage.removeItem(NameItem.EXPIRED_TOKEN);

                state = {
                    ...state,
                    fetchingLogout: false,
                    isFetchLogoutSuccess: true,
                    fetchLogoutError: null,
                    dataLogout: action.payload,
                    fetchingLogin: true,
                    isFetchLoginSuccess: false,
                    fetchLoginError: null,
                    dataLogin: null,
                };
                break;

            // Getting data for logout error
            case CustomerType.FETCH_LOGOUT_ERROR:
                state = {
                    ...state,
                    fetchingLogout: false,
                    isFetchLogoutSuccess: false,
                    dataLogout: null,
                    fetchError: action.payload
                };
                break;
        }

        return state;
    }
}
