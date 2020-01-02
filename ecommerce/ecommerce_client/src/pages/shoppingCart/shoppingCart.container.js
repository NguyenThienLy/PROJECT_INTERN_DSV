import { connect } from 'react-redux';
import ShoppingCart from './shoppingCart.component';
import { action } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
    cart: state.cart
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCart);