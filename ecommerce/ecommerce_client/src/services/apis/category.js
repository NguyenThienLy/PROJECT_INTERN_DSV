import { CrudApi } from '../crud'

export class CategoryApi extends CrudApi {
    constructor() {
        super("category")
    }
}