import { connect } from 'react-redux';
import ProductAdd from './add.component';
import { action } from '../../../../actions';

const mapStateToProps = (state, ownProps) => ({
    seller: state.seller,
    product: state.product,
    category: state.category,
    brand: state.brand
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createProduct: (body) => dispatch(action.product.createProduct(body)),
    getListBrand: () => dispatch(action.brand.getList()),
    getListCategory: () => dispatch(action.category.getList()),
    logout: () => dispatch(action.seller.logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductAdd);