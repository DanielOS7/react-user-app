import counterReducer from './counter.reducer';
import loggedReducer from './islogged.reducer';
import { combineReducers } from 'redux';

const rootReducer  = combineReducers({
    counter: counterReducer,
    loggedIn: loggedReducer
})

export default rootReducer;