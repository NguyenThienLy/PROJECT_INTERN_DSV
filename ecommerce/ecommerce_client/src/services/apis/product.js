import { CrudApi } from "../crud";
import * as _ from "lodash";

export class ProductApi extends CrudApi {
  constructor() {
    super("statisticCourse");
  }

  async fetchProductFilter(order, color, brand, size, status, subCategory, category, token) {
    let url = this.baseUrl("filter");
    
    const query = this._serialize({
      order,
      color,
      brand,
      size, 
      status, 
      subCategory, 
      category
    });

    url += `${query}`;

    const options = {
      method: "GET",
      headers: _.merge({
        "User-Agent": "Request-Promise",
        "Content-Type": "Application/json",
        "x-token": token
      })
    };
    const res = await this.exec(url, options);

    if (res.code && res.code === 200) {
      return res;
    } else {
      throw res;
    }
  }
}