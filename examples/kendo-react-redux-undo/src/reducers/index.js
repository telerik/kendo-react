import { createStore, applyMiddleware, combineReducers } from 'redux';
import { undoableProducts, undoableDataState } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({products: undoableProducts, dataState: undoableDataState})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))