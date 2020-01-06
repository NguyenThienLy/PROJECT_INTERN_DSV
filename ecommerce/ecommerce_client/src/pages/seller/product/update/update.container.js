import { connect } from 'react-redux';
import ProductUpdate from './update.component';
import { action } from '../../../../actions';

const mapStateToProps = (state, ownProps) => ({
    seller: state.seller,
    product: state.product,
    category: state.category,
    brand: state.brand
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateProduct: (id, body) => dispatch(action.product.updateProduct(id, body)),
    getListBrand: () => dispatch(action.brand.getList()),
    getListCategory: () => dispatch(action.category.getList()),
    getItem: (slug) => dispatch(action.product.getItem(slug)),
    logout: () => dispatch(action.seller.logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductUpdate);