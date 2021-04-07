import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import common from './common/reducer';

const reducers = combineReducers({
    common
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;