import { connect } from 'react-redux'
import ProductList from './productList.component'
import { action } from '../../actions'

const mapStateToProps = (state, ownProps) => ({
    product: state.product
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getProductFilter: (filter = {}) => dispatch(action.product.getProductFilter(filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)