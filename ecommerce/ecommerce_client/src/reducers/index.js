import { combineReducers } from "redux";

import { BrandReducer } from './brand'
import { CartReducer } from './cart'
import { CategoryReducer } from './category'
import { ColorReducer } from './color'
import { CommentReducer } from './comment'
import { CustomerReducer } from './customer'
import { ImageReducer } from './image'
import { OrderReducer } from './order'
import { OrderItemReducer } from './orderItem'
import { OrderStatusReducer } from './orderStatus'
import { ProductReducer } from './product'
import { SellerReducer } from './seller'
import { SizeReducer } from './size'
import { SubCategoryReducer } from './subCategory'


const brandReducer = new BrandReducer()
const cartReducer = new CartReducer()
const categoryReducer = new CategoryReducer()
const colorReducer = new ColorReducer()
const commentReducer = new CommentReducer()
const customerReducer = new CustomerReducer()
const imageReducer = new ImageReducer()
const orderReducer = new OrderReducer()
const orderItemReducer = new OrderItemReducer()
const orderStatusReducer = new OrderStatusReducer()
const productReducer = new ProductReducer()
const sellerReducer = new SellerReducer()
const sizeReducer = new SizeReducer()
const subCategoryReducer = new SubCategoryReducer()

const store = combineReducers({
  brand: brandReducer.reducer,
  cart: cartReducer.reducer,
  category: categoryReducer.reducer,
  color: colorReducer.reducer,
  comment: commentReducer.reducer,
  customer: customerReducer.reducer,
  image: imageReducer.reducer,
  order: orderReducer.reducer,
  orderItem: orderItemReducer.reducer,
  orderStatus: orderStatusReducer.reducer,
  product: productReducer.reducer,
  seller: sellerReducer.reducer,
  size: sizeReducer.reducer,
  subCategory: subCategoryReducer.reducer,
})

export default store;