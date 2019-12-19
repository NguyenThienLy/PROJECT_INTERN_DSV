import { BaseAction } from './base'
import { api } from '../services'

export class SizeAction extends BaseAction {
    constructor() {
        super("size", api.size, "size")
    }
}