import { BaseAction } from "./base"

import { BrandAction } from "./brand"
import { CartAction } from "./cart"
import { CategoryAction } from "./category"
import { ColorAction } from "./color"
import { CommentAction } from "./comment"
import { CustomerAction } from "./customer"
import { ImageAction } from "./image"
import { OrderAction } from "./order"
import { OrderItemAction } from "./orderItem"
import { OrderStatusAction } from "./orderStatus"
import { ProductAction } from "./product"
import { SellerAction } from "./seller"
import { SizeAction } from "./size"
import { SubCategoryAction } from "./subCategory"

class action {
    constructor() {
    }

    static brand = new BrandAction()
    static cart = new CartAction()
    static category = new CategoryAction()
    static color = new ColorAction()
    static comment = new CommentAction()
    static customer = new CustomerAction()
    static image = new ImageAction()
    static order = new OrderAction()
    static orderItem = new OrderItemAction()
    static orderStatus = new OrderStatusAction()
    static product = new ProductAction()
    static seller = new SellerAction()
    static size = new SizeAction()
    static subCategory = new SubCategoryAction()
  }

  export { action };