import { BaseAction } from './base'
import { api } from '../services'

export class CommentAction extends BaseAction {
    constructor() {
        super("comment", api.comment, "comment")
    }
}