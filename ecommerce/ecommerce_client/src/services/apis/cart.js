import { CrudApi } from '../crud'

export class CartApi extends CrudApi {
    constructor() {
        super("cart")
    }
}