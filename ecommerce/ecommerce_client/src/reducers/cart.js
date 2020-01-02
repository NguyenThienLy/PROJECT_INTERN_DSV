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
                state = {
                    ...state,

                };
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