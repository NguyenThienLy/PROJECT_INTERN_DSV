import { CrudApi } from "../crud";
import * as _ from "lodash";

import NameLocal from '../../config/localStorage';

export class ProductApi extends CrudApi {
  constructor() {
    super("product");
  }

  async getProductFilter(fitler) {
    let url = this.baseUrl("fitler");

    const query = this._serialize(fitler);

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

  async createProduct(body, option = {}) {
    const tokenJWT = localStorage.getItem(NameLocal.TOKEN_JWT);

    let url = this.baseUrl();
    const query = this._serialize(option.query || {});
    url += `${query}`;

    const options = {
      method: "POST",
      headers: _.merge(
        {
          "User-Agent": "Request-Promise",
          "authorization": `Bearer ${tokenJWT}`
        }
      ),
      body: body
    };
    const res = await this.exec(url, options);
    if (res.code && res.code === 200) {
      return res;
    } else {
      throw res
    }
  }
}