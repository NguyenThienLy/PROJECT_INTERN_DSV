import { connect } from 'react-redux';
import { action } from '../../actions';
import HomePage from './homePage.component';

const mapStateToProps = (state, ownProps) => ({
    category: state.category,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getListCategory: () => dispatch(action.category.getList())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)