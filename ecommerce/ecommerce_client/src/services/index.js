import { CrudApi } from "./crud.js";
import { ImgurApi } from "./imgur";
import { BrandApi } from "./apis/brand";
import { CartApi } from "./apis/cart";
import { CategoryApi } from "./apis/category";
import { CommentApi } from "./apis/comment";
import { CustomerApi } from "./apis/customer";
import { OrderApi } from "./apis/order";
import { OrderItemApi } from "./apis/orderItem";
import { ProductApi } from "./apis/product";
import { SellerApi } from "./apis/seller";
import { SubCategoryApi } from "./apis/subCategory";

const crudApi = new CrudApi();

class api {
  constructor() { }
  
  static imgur = new ImgurApi()
  static brand = new BrandApi()
  static cart = new CartApi()
  static category = new CategoryApi()
  static comment = new CommentApi()
  static customer = new CustomerApi()
  static order = new OrderApi()
  static orderItem = new OrderItemApi()
  static product = new ProductApi()
  static seller = new SellerApi()
  static subCategory = new SubCategoryApi()
}

export { crudApi, api };
