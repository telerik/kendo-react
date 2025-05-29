import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as form } from 'redux-form'
import thunk from 'redux-thunk'

const orderForm = combineReducers({ form });
export const store = createStore(orderForm, composeWithDevTools(applyMiddleware(thunk)))
