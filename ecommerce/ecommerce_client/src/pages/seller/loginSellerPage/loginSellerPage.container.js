import { connect } from 'react-redux';
import LoginSellerPage from './loginSellerPage.component';
import { action } from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
    seller: state.seller,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (email, password) => dispatch(action.seller.login(email, password))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginSellerPage);