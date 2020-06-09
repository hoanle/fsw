import { combineReducers } from 'redux';
import colorReducer from './ColorReducer';
import counterReducer from './CounterReducer';

const rootReducers = combineReducers({
    colorReducer,
    counterReducer
});

export default rootReducers;