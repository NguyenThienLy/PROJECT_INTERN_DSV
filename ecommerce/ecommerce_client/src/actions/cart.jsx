import CartType from './types/cart';

export class CartAction {
    constructor() {
    }

    increaseItemCart = (id) => {
        return dispatch => {
            dispatch({
                type: CartType.INCREASE_ITEM_CART,
                payload: id
            });
        }
    }

    decreaseItemCart = (id) => {
        return dispatch => {
            dispatch({
                type: CartType.DECREASE_ITEM_CART,
                payload: id
            });
        }
    }

    removeItemCart = (id, size, color) => {
        return dispatch => {
            dispatch({
                type: CartType.REMOVE_ITEM_CART,
                payload: { id, size, color }
            });
        }
    }

    addItemCart = (item) => {
        return dispatch => {
            dispatch({
                type: CartType.ADD_ITEM_CART,
                payload: item
            });
        }
    }

    cancelCart = (item) => {
        return dispatch => {
            dispatch({
                type: CartType.CANCEL_CART
            });
        }
    }
}