import { combineReducers } from 'redux';
import authenticationReducer from './AuthenticationReducer';
import jobReducer from './JobReducer';

const rootReducers = combineReducers({
    authenticationReducer,
    jobReducer
});

export default rootReducers;