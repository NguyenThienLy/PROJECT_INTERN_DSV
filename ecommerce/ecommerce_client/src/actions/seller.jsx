import { BaseAction } from './base'
import { api } from '../services'

export class SellerAction extends BaseAction {
    constructor() {
        super("seller", api.seller, "seller")
    }
}