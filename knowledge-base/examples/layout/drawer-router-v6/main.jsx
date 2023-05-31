import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Products from './Products';
import DrawerContainer from './DrawerContainer';
import './styles.css';
ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <DrawerContainer>
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/products" element={<Products />} />
          <Route exact={true} path="/about" element={<About />} />
        </Routes>
      </DrawerContainer>
    </BrowserRouter>
  </React.Fragment>,
  document.querySelector('my-app')
);
