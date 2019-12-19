import { CrudApi } from '../crud'

export class CommentApi extends CrudApi {
    constructor() {
        super("comment")
    }
}