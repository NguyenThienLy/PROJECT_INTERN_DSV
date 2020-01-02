import * as _ from "lodash";

import CartType from '../actions/types/cart';
import NameItem from '../config/localStorage';

export class CartReducer {
    constructor() {

        let itemsCart = localStorage.getItem(NameItem.ITEMS_CART);
        let quantityCart = localStorage.getItem(NameItem.QUANTITY_CART);

        if (itemsCart === null)
            itemsCart = [];

        if (quantityCart === null)
            quantityCart = 0;

        this.initState = {
            items: itemsCart,
            quantity: quantityCart
        };
    }

    reducer = (state = this.initState, action) => {
        switch (action.type) {
            // increase item in cart
            case CartType.INCREASE_ITEM_CART:
                state = {
                    ...state,
                };
                break;

            // decrease item in cart
            case CartType.DECREASE_ITEM_CART:
                state = {
                    ...state,

                };
                break;

            // remove item in cart
            case CartType.REMOVE_ITEM_CART:
                state = {
                    ...state,

                };
                break;

            // add item in cart
            case CartType.ADD_ITEM_CART:
                // update
                const indexUpdate = state.items.findIndex(item => item._id === action.payload._id
                    && item.size === action.payload.size
                    && item.color.code === action.payload.color.code);
                // add new
                const indexNew = state.items.findIndex(item => item._id === action.payload._id);
                const indexNewSize = state.items.findIndex(item => item._id === action.payload._id
                    && item.size === action.payload.size);
                const indexNewColor = state.items.findIndex(item => item._id === action.payload._id
                    && item.color.code === action.payload.color.code);


                // Not equal id, equal id not equal size, equal id not equal color 
                if (indexNew === -1 || indexNewSize === -1 || indexNewColor === -1) {
                    state.items.unshift(action.payload);
                    const quantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
                    state = {
                        ...state,
                        quantity: quantity
                    }
                }
                // Exist just update quantity 
                if (indexUpdate !== -1) {
                    state.items[indexUpdate].quantity += action.payload.quantity;
                    const quantity = state.items.reduce((sum, item) => sum + item.quantity, 0)
                    state = {
                        ...state,
                        quantity: quantity
                    }
                }

                break;

            // add item in cart
            case CartType.CANCEL_CART:
                state = {
                    ...state,
                    items: [],
                    quantity: 0
                };
                break;

        }

        return state;
    }
}