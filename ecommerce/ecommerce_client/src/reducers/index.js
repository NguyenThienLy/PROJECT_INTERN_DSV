import { combineReducers } from "redux";

import { BrandReducer } from './brand'
import { CartReducer } from './cart'
import { CategoryReducer } from './category'
import { CommentReducer } from './comment'
import { CustomerReducer } from './customer'
import { OrderReducer } from './order'
import { OrderItemReducer } from './orderItem'
import { ProductReducer } from './product'
import { SellerReducer } from './seller'
import { SubCategoryReducer } from './subCategory'


const brandReducer = new BrandReducer()
const cartReducer = new CartReducer()
const categoryReducer = new CategoryReducer()
const commentReducer = new CommentReducer()
const customerReducer = new CustomerReducer()
const orderReducer = new OrderReducer()
const orderItemReducer = new OrderItemReducer()
const productReducer = new ProductReducer()
const sellerReducer = new SellerReducer()
const subCategoryReducer = new SubCategoryReducer()

const store = combineReducers({
  brand: brandReducer.reducer,
  cart: cartReducer.reducer,
  category: categoryReducer.reducer,
  comment: commentReducer.reducer,
  customer: customerReducer.reducer,
  order: orderReducer.reducer,
  orderItem: orderItemReducer.reducer,
  product: productReducer.reducer,
  seller: sellerReducer.reducer,
  subCategory: subCategoryReducer.reducer,
})

export default store;