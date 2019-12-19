import { BaseAction } from './base'
import { api } from '../services'

export class OrderAction extends BaseAction {
    constructor() {
        super("order", api.order, "order")
    }
}