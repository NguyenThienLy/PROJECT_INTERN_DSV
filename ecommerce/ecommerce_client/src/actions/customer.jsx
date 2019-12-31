import { BaseAction } from './base'
import { api } from '../services'
import CustomerType from './types/customer'

export class CustomerAction extends BaseAction {
  constructor() {
    super("customer", api.customer, "customer")
  }

  login = (email, password) => {
    return dispatch => {
      dispatch({
        type: CustomerType.FETCH_LOGIN_PENDING
      });

      this.api
        .login(email, password)
        .then(res => {
          dispatch({
            type: CustomerType.FETCH_LOGIN_SUCCESS,
            payload: res.result.object
          });
        })
        .catch(error => {
          dispatch({
            type: CustomerType.FETCH_LOGIN_ERROR,
            payload: error
          });
        });
    };
  };
}