import { BaseAction } from './base'
import { api } from '../services'

export class OrderItemAction extends BaseAction {
    constructor() {
        super("orderItem", api.orderItem, "orderItem")
    }
}