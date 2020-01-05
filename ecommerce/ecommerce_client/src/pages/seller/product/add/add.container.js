import { connect } from 'react-redux';
import ProductAdd from './add.component';
import { action } from '../../../../actions';

const mapStateToProps = (state, ownProps) => ({
    seller: state.seller,
    product: state.product,
    category: state.category,
    subCategory: state.subCategory
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createProduct: (body) => dispatch(action.product.createProduct(body)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductAdd);