import { CrudApi } from '../crud'

export class OrderApi extends CrudApi {
    constructor() {
        super("order")
    }
}