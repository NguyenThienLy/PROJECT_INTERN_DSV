import { BaseAction } from './base'
import { api } from '../services'

export class CategoryAction extends BaseAction {
    constructor() {
        super("category", api.category, "category")
    }
}