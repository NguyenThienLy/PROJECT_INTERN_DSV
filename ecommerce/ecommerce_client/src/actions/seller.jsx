import { api } from '../services';
import SellerType from './types/seller';

export class SellerAction {
  constructor() {
  }

  login = (email, password) => {
    return dispatch => {
      dispatch({
        type: SellerType.FETCH_LOGIN_PENDING
      });

      api
        .seller
        .login(email, password)
        .then(res => {
          dispatch({
            type: SellerType.FETCH_LOGIN_SUCCESS,
            payload: res.result.object
          });
        })
        .catch(error => {
          dispatch({
            type: SellerType.FETCH_LOGIN_ERROR,
            payload: error
          });
        });
    };
  };

  logout = () => {
    return dispatch => {
      dispatch({
        type: SellerType.FETCH_LOGOUT_PENDING
      })
      api
        .seller
        .logout()
        .then(res => {
          dispatch({
            type: SellerType.FETCH_LOGOUT_SUCCESS,
            payload: res.result.object
          })
        })
        .catch(error => {
          dispatch({
            type: SellerType.FETCH_LOGOUT_ERROR,
            payload: error
          })
        })
    }
  }
}