import { BaseAction } from "./base"

import { BrandAction } from "./brand"
import { CartAction } from "./cart"
import { CategoryAction } from "./category"
import { CommentAction } from "./comment"
import { CustomerAction } from "./customer"
import { OrderAction } from "./order"
import { OrderItemAction } from "./orderItem"
import { ProductAction } from "./product"
import { SellerAction } from "./seller"
import { SubCategoryAction } from "./subCategory"

class action {
    constructor() {
    }

    static brand = new BrandAction()
    static cart = new CartAction()
    static category = new CategoryAction()
    static comment = new CommentAction()
    static customer = new CustomerAction()
    static order = new OrderAction()
    static orderItem = new OrderItemAction()
    static product = new ProductAction()
    static seller = new SellerAction()
    static subCategory = new SubCategoryAction()
  }

  export { action };