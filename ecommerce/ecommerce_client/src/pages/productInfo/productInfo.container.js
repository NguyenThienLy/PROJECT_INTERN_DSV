import { connect } from 'react-redux';
import ProductInfo from './productInfo.component';
import { action } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
    product: state.product,
    brand: state.brand,
    subCategory: state.subCategory
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getItem: (slug, option = {}) => dispatch(action.product.getItem(slug)),
    getListFromBrand: (idBrand, idProduct, option = {}) => dispatch(action.brand.getListFromBrand(idBrand, idProduct, option)),
    getListSimilarProduct: (idSubCategory, idProduct, option = {}) => dispatch(action.subCategory.getListSimilarProduct(idSubCategory, idProduct, option)),
    addItemCart: (item) => dispatch(action.cart.addItemCart(item)) 
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductInfo);