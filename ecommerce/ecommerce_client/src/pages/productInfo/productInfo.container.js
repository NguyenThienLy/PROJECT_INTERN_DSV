import { connect } from 'react-redux';
import ProductInfo from './productInfo.component';
import { action } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
    product: state.product
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getItem: (slug, option = {}) => dispatch(action.product.getItem(slug)),
    getItemFromBrand: (idBrand, idProduct, option = {}) => dispatch(action.brand.getItemFromBrand(idBrand, idProduct, option)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductInfo);