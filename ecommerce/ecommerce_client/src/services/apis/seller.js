import * as _ from "lodash";

import NameLocal from '../../config/localStorage'
import { CrudApi } from '../crud';

export class SellerApi extends CrudApi {
    constructor() {
        super("seller")
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

    async logout() {
        const tokenJWT = localStorage.getItem(NameLocal.TOKEN_JWT_ADMIN);

        let url = this.baseUrl("logout");
        const query = this._serialize({});
        url += `${query}`;
        const options = {
            method: "GET",
            headers: _.merge(
                {
                    "User-Agent": "Request-Promise",
                    "Content-Type": "Application/json",
                    "authorization": `Bearer ${tokenJWT}`
                }
            )
        }

        const res = await this.exec(url, options);

        if (res.code && res.code === 200) {
            return res;
        } else {
            throw res;
        }
    }
}