import { BaseAction } from './base'
import { api } from '../services'

export class CustomerAction extends BaseAction {
    constructor() {
        super("customer", api.customer, "customer")
    }
}