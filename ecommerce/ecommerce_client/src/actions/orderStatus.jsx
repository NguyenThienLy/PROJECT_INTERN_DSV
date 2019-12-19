import { BaseAction } from './base'
import { api } from '../services'

export class OrderStatusAction extends BaseAction {
    constructor() {
        super("orderStatus", api.orderStatus, "orderStatus")
    }
}