import { connect } from 'react-redux';
import ShoppingCart from './shoppingCart.component';
import { action } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
    cart: state.cart
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    increaseItemCart: (id) => dispatch(action.cart.increaseItemCart(id)),
    decreaseItemCart: (id) => dispatch(action.cart.decreaseItemCart(id)),
    removeItemCart: (id, size, color) => dispatch(action.cart.removeItemCart(id, size, color)),
    cancelCart: () => dispatch(action.cart.cancelCart()),
    increaseQuantityProduct: (id, quantity) => dispatch(action.product.increaseQuantityProduct(id, quantity)),
    decreaseQuantityProduct: (id, quantity) => dispatch(action.product.decreaseQuantityProduct(id, quantity))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCart);