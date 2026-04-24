import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuNavContainer from './MenuNavContainer';
import About from './About';
import Team from './Team';
import Home from './Home';
import Products from './Products';

const App = () => {
    return (
        // BrowserRouterOpen
        <MenuNavContainer>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/products'} element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/team" element={<Team />} />
            </Routes>
        </MenuNavContainer>
        // BrowserRouterClose
    );
};

export default App;
