import * as _ from "lodash";

import { BaseReducer } from './base';
import CustomerType from '../actions/types/customer';
import NameItem from '../config/localStorage';

export class CustomerReducer extends BaseReducer {
    constructor() {
        super("customer");

        this.initState = {
            login: {
                fetching: false,
                fetchError: null,
                data: null
            }
        };
    }

    reducer = (state = this.initState, action) => {
        switch (action.type) {

            // Getting data for login
            case CustomerType.FETCH_LOGIN_PENDING:
                return _.merge(
                    {},
                    {
                        login: {
                            fetching: true,
                            fetchError: null,
                            data: null
                        }
                    }
                );

            // Getting data for login
            case CustomerType.FETCH_LOGIN_SUCCESS:
                console.log("action.payload", action.payload);

                localStorage.setItem(NameItem.TOKEN_JWT, action.payload.accessToken);
                localStorage.setItem(NameItem.USER_INFO, JSON.stringify(action.payload.customer));
                localStorage.setItem(NameItem.EXPIRED_TOKEN, JSON.stringify(action.payload.expired));

                return _.merge(
                    {},
                    {
                        login: {
                            data: action.payload,
                            fetching: false,
                            fetchError: null
                        }
                    }
                );

            // Getting data for login
            case CustomerType.FETCH_LOGIN_ERROR:
                return _.merge(
                    {},
                    {
                        login: {
                            data: null,
                            fetching: false,
                            fetchError: action.payload
                        }
                    }
                );
        }

        return state;
    }
}
