import { BaseAction } from './base'
import { api } from '../services'

export class ProductAction extends BaseAction {
    constructor() {
        super("product", api.product, "product")
    }
}