import { BaseAction } from './base'
import { api } from '../services'

export class ImageAction extends BaseAction {
    constructor() {
        super("image", api.image, "image")
    }
}