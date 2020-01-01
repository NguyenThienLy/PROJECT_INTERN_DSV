import { connect } from 'react-redux'
import { action } from '../../actions'
import HeaderCustomer from './headerCustomer.component'

const mapStateToProps = (state, ownProps) => ({
    category: state.category.items,
    subCategory: state.subCategory.items,
    customer: state.customer,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (email, password) => dispatch( action.customer.login(email, password)),
    register: (body) => dispatch(action.customer.register(body)),
    logout: () => dispatch(action.customer.logout())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderCustomer)