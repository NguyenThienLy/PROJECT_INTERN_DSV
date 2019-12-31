import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thux from 'redux-thunk';

import rootReducer from '../reducers';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thux, logger)
)

export default store;