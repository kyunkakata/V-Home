import { combineReducers } from 'redux';

// reducers
import accountReducer from './account-reducer';
import languageReducer from './language-reducer';
import counterReducer from './counter-Reducer';

// combine
const reducers = combineReducers({
    accountReducer,
    languageReducer,
    counterReducer,
});

export default reducers;
