import { CrudApi } from "../crud";
import * as _ from "lodash";

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
}