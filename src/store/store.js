import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { memoriceReducer } from '../reducers/memoriceReducer';
import { rankReducer } from '../reducers/rankReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const reducers = combineReducers({
    memorice: memoriceReducer,
    ui: uiReducer,
    auth: authReducer,
    rank: rankReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

