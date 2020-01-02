import { CrudApi } from '../crud';
import * as _ from 'lodash';

export class SubCategoryApi extends CrudApi {
    constructor() {
        super("subCategory")
    }

    async getListSimilarProduct(idSubCategory, idProduct, option) {
        let url = this.baseUrl(`${idSubCategory}/${idProduct}`);

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

        console.log("urlllll", url);
        const res = await this.exec(url, options);

        if (res.code && res.code === 200) {
            return res;
        } else {
            throw res;
        }
    }
}