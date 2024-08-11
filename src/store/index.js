
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { chartReducer, coinReducer } from './reducers/coin-reducer';


const appRedcuder = combineReducers({
    coins: coinReducer,
    chart: chartReducer
})

export const store = createStore(appRedcuder, applyMiddleware(thunk));
