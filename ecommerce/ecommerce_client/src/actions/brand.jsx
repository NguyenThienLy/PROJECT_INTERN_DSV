import { BaseAction } from './base'
import { api } from '../services'

export class BrandAction extends BaseAction {
    constructor() {
        super("brand", api.brand, "brand")
    }
}