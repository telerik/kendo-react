import React from 'react';
import './index.css';
import App from './App';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './reducers/index'
 

 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)