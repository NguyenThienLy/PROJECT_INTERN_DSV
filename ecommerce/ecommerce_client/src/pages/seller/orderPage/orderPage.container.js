import { connect } from 'react-redux';
import OrderPage from './orderPage.component';
import { action } from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
    seller: state.seller
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    logout: () => dispatch(action.seller.logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderPage);