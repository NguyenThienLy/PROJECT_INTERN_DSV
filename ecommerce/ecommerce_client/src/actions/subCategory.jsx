import { BaseAction } from './base'
import { api } from '../services'

export class SubCategoryAction extends BaseAction {
    constructor() {
        super("subCategory", api.subCategory, "subCategory")
    }
}