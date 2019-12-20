import { CrudApi } from '../crud'

export class CustomerApi extends CrudApi {
    constructor() {
        super("customer")
    }
}