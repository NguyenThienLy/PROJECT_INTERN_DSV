import { connect } from 'react-redux';
import ProductMain from './main.component';
import { action } from '../../../../actions';

const mapStateToProps = (state, ownProps) => ({
    seller: state.seller,
    product: state.product
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getProductFilter: (filter = {}) => dispatch(action.product.getProductFilter(filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductMain);