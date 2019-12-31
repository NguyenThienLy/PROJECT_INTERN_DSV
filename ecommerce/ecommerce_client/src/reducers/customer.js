import * as _ from "lodash";

import { BaseReducer } from './base';
import CustomerType from '../actions/types/customer';

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
