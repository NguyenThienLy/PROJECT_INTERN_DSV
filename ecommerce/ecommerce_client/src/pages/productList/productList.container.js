import { connect } from 'react-redux'
import { ProductAction } from '../../actions/product'
import ProductList from './productList.component'

const mapStateToProps = (state, ownProps) => ({
    productFilter: state.product.productFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getProductFilter: (order, color, brand, size, status, subCategory, category, token) => dispatch(ProductAction.fetchProductFilter(order, color, brand, size, status, subCategory, category, token))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)