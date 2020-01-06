import * as _ from "lodash";

import SellerType from '../actions/types/seller';
import NameItem from '../config/localStorage';

export class SellerReducer {
    constructor() {
        this.initState = {
            items: [],

            fetchingLogin: false,
            isFetchLoginSuccess: false,
            fetchLoginError: null,
            dataLogin: null,

            fetchingLogout: false,
            isFetchLogoutSuccess: false,
            fetchLogoutError: null,
            dataLogout: null,
        };
    }

    reducer = (state = this.initState, action) => {
        switch (action.type) {
            // Getting data for login pending
            case SellerType.FETCH_LOGIN_PENDING:
                state = {
                    ...state,
                    fetchingLogin: true,
                    isFetchLoginSuccess: false,
                    fetchLoginError: null,
                    dataLogin: null
                };
                break;

            // Getting data for login success
            case SellerType.FETCH_LOGIN_SUCCESS:
                if (action.payload.isLogin) {
                    localStorage.setItem(NameItem.TOKEN_JWT_ADMIN, action.payload.accessToken);
                    localStorage.setItem(NameItem.USER_INFO_ADMIN, JSON.stringify(action.payload.user));
                    localStorage.setItem(NameItem.EXPIRED_TOKEN_ADMIN, JSON.stringify(action.payload.expired));
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
            case SellerType.FETCH_LOGIN_ERROR:
                state = {
                    ...state,
                    fetchingLogin: false,
                    isFetchLoginSuccess: false,
                    dataLogin: null,
                    fetchError: action.payload
                };
                break;

            // Getting data for logout pending
            case SellerType.FETCH_LOGOUT_PENDING:
                state = {
                    ...state,
                    fetchingLogout: true,
                    isFetchLogoutSuccess: false,
                    fetchLogoutError: null,
                    dataLogout: null
                };
                break;

            // Getting data for logout success
            case SellerType.FETCH_LOGOUT_SUCCESS:
                localStorage.removeItem(NameItem.TOKEN_JWT_ADMIN);
                localStorage.removeItem(NameItem.USER_INFO_ADMIN);
                localStorage.removeItem(NameItem.EXPIRED_TOKEN_ADMIN);

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
            case SellerType.FETCH_LOGOUT_ERROR:
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
