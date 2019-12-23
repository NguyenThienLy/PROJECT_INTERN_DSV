import { environment } from "../environments";
import * as _ from "lodash";

export class CrudApi {
  constructor(path) {
    this.path = path;
  }
  
  _paserQuery(query = {}) {
    let parsedQuery = _.merge({}, query);
    
    if (query.filter) {
      parsedQuery.filter = JSON.stringify(query.filter);
    }
   
    if (query.order) {
      parsedQuery.order = JSON.stringify(query.order);
    }
    
    if (query.scopes) {
      parsedQuery.scopes = JSON.stringify(query.scopes);
    }
    
    if (query.fields) {
      parsedQuery.fields = JSON.stringify(query.fields);
    }
  
    if (query.items) {
      parsedQuery.items = JSON.stringify(query.items);
    }
    
    if (query.populates) {
      parsedQuery.populates = JSON.stringify(query.populates);
    }
 
    if (query.limit) {
      parsedQuery.limit = JSON.stringify(query.limit);
    }
    
    if (query.offset) {
      parsedQuery.offset = JSON.stringify(query.offset);
    }
  
    return parsedQuery;
  }
  
  baseUrl(subpath = "") {
    return `${environment.host}/api/${environment.version}/${this.path}/${subpath}`;
  }
 
  _serialize(obj) {
    const keys = Object.keys(obj);
    let query = "?";
    for (const key of keys) {
      query += typeof (obj[key]) === "string" ? `${key}=${obj[key]}&` : `${key}=${JSON.stringify(obj[key])}&`;
    }
    return query;
  }
 
  async exec(url, options) {
    try {
      return await fetch(url, options).then(result => {
        return result.json();
      });
    } catch (err) {
      console.log("Request err: ", err);
    }
  }
  
  async getList(option = {}) {
    let url = this.baseUrl();
    const query = this._serialize(option.query || {});
    url += `${query}`;
    const options = {
      method: "GET",
      headers: _.merge(
        {
          "User-Agent": "Request-Promise",
          "Content-Type": "Application/json",
          "x-token": process.browser ? localStorage.getItem("token") : ""
        },
        option.headers || {}
      )
    };
    const res = await this.exec(url, options);
    if (res.code && res.code === 200) {
      return res;
    } else {
      throw res
    }
  }
 
  async getItem(id, option = {}) {
    let url = this.baseUrl(id);
    const query = this._serialize(option.query || {});
    url += `${query}`;
    const options = {
      method: "GET",
      headers: _.merge(
        {
          "User-Agent": "Request-Promise",
          "Content-Type": "Application/json"
        },
        option.headers || {}
      )
    }
    const res = await this.exec(url, options);
    if (res.code && res.code === 200) {
      return res;
    } else {
      throw res
    }
  }
  
  async findOne(option = {}) {
    let url = this.baseUrl("find");
    const query = this._serialize(option.query || {});
    url += `${query}`;
    const options = {
      method: "GET",
      headers: _.merge(
        {
          "User-Agent": "Request-Promise",
          "Content-Type": "Application/json"
        },
        option.headers || {}
      )
    };

    const res = await this.exec(url, options);
    if (res.code && res.code === 200) {
      return res;
    } else {
      throw res
    }
  }
 
  async delete(id, option = {}) {
    let url = this.baseUrl(id);
    const query = this._serialize(option.query || {});
    url += `${query}`;
    const options = {
      method: "DELETE",
      headers: _.merge(
        {
          "User-Agent": "Request-Promise",
          "Content-Type": "Application/json"
        },
        option.headers || {}
      )
    };
    const res = await this.exec(url, options);
    if (res.code && res.code === 200) {
      return res;
    } else {
      throw res
    }
  }

  async update(id, body, option = {}) {
    let url = this.baseUrl(id);
    const query = this._serialize(option.query || {});
    url += `${query}`;
    const options = {
      method: "PUT",
      headers: _.merge(
        {
          "User-Agent": "Request-Promise",
          "Content-Type": "Application/json",
          "x-token": process.browser ? localStorage.getItem("token") : ""
        },
        option.headers || {}
      ),
      body: JSON.stringify(body)
    };
    const res = await this.exec(url, options);
    if (res.code && res.code === 200) {
      return res;
    } else {
      throw res
    }
  }

  async create(body, option = {}) {
    let url = this.baseUrl();
    const query = this._serialize(option.query || {});
    url += `${query}`;
    const options = {
      method: "POST",
      headers: _.merge(
        {
          "User-Agent": "Request-Promise",
          "Content-Type": "Application/json",
          "x-token": process.browser ? localStorage.getItem("token") : ""
        },
        option.headers || {}
      ),
      body: JSON.stringify(body)
    };
    const res = await this.exec(url, options);
    if (res.code && res.code === 200) {
      return res;
    } else {
      throw res
    }
  }
  
  async deleteAll() { }
}
