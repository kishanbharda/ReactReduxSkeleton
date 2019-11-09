import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import accountReducer from './accountReducer';

const rootReducer = combineReducers({
    loginReducer,
    accountReducer,
});

export default rootReducer
