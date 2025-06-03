import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { undoableProducts, undoableDataState } from './reducers';

const rootReducer = combineReducers({
  products: undoableProducts,
  dataState: undoableDataState,
});

export const store = configureStore({
  reducer: rootReducer
});