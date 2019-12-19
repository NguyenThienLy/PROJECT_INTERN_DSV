import { BaseAction } from './base'
import { api } from '../services'

export class CartAction extends BaseAction {
    constructor() {
        super("cart", api.cart, "cart")
    }
}