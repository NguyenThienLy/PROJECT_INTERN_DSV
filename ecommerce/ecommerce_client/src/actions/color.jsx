import { BaseAction } from './base'
import { api } from '../services'

export class ColorAction extends BaseAction {
    constructor() {
        super("color", api.admin, "color")
    }
}