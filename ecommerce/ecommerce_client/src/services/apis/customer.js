import { CrudApi } from '../crud'
import * as _ from "lodash";

export class CustomerApi extends CrudApi {
    constructor() {
        super("customer")
    }

    async login(email, password) {
        let url = this.baseUrl("login");
        const query = this._serialize({});
        url += `${query}`;
        const options = {
            method: "POST",
            headers: _.merge(
                {
                    "User-Agent": "Request-Promise",
                    "Content-Type": "Application/json"
                }
            ),
            body: JSON.stringify({
                email, password
            })
        }
        console.log("url", url);
        const res = await this.exec(url, options);

        if (res.code && res.code === 200) {
            return res;
        } else {
            throw res;
        }
    }
}