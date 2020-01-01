import { BaseAction } from './base'
import { api } from '../services'
import CustomerType from './types/customer'

export class CustomerAction {
  constructor() {
  }

  login = (email, password) => {
    return dispatch => {
      dispatch({
        type: CustomerType.FETCH_LOGIN_PENDING
      });

      api
        .customer
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

  register = (body, option = {}) => {
    return dispatch => {
      dispatch({
        type: CustomerType.CREATE_REGISTER_PENDING
      })
      api
        .customer
        .create(body, option)
        .then(res => {
          dispatch({
            type: CustomerType.CREATE_REGISTER_SUCCESS,
            payload: res.result.object
          })
        })
        .catch(error => {
          dispatch({
            type: CustomerType.CREATE_REGISTER_ERROR,
            payload: error
          })
        })
    }
  }
}