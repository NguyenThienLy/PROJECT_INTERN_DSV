import { CrudApi } from '../crud';
import * as _ from 'lodash';

export class BrandApi extends CrudApi {
    constructor() {
        super("brand")
    }

    async getListFromBrand(idBrand, idProduct, option) {
        let url = this.baseUrl(`${idBrand}/${idProduct}`);

        const query = this._serialize(option);

        url += `${query}`;

        const options = {
            method: "GET",
            headers: _.merge(
                {
                    "User-Agent": "Request-Promise",
                    "Content-Type": "Application/json"
                }
            )
        };

        const res = await this.exec(url, options);

        if (res.code && res.code === 200) {
            return res;
        } else {
            throw res;
        }
    }
}