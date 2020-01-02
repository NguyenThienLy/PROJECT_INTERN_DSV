import { connect } from 'react-redux';
import ProductInfo from './productInfo.component';
import { action } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
    product: state.product
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getItem: (slug, option = {}) => dispatch(action.product.getItem(slug))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductInfo);