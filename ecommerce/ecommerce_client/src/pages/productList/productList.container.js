import { connect } from 'react-redux'
import { ProductAction } from '../../actions/product'
import ProductList from './productList.component'

const mapStateToProps = (state, ownProps) => ({
    product: state.product
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getProductFilter: (order, color, brand, size, status, subCategory, category) => dispatch(ProductAction.getProductFilter(order, color, brand, size, status, subCategory, category))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)