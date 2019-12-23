import { CrudApi } from '../crud'

export class OrderItemApi extends CrudApi {
    constructor() {
        super("orderItem")
    }
}