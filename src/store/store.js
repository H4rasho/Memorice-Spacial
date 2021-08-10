import {createStore, combineReducers} from 'redux'
import { authReducer } from '../reducers/authReducer';
import { memoriceReducer } from '../reducers/memoriceReducer';
import { rankReducer } from '../reducers/rankReducer';
import { uiReducer } from '../reducers/uiReducer';

const reducers = combineReducers({
    memorice: memoriceReducer,
    ui: uiReducer,
    auth: authReducer,
    rank: rankReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);