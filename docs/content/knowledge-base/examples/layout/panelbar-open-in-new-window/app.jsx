import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Team from './Team';
import Home from './Home';
import Products from './Products';
import PanelBarNavContainer from './PanelBarNavContainer';

const App = () => {
    return (
        // BrowserRouterOpen
        <PanelBarNavContainer>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/team" element={<Team />} />
            </Routes>
        </PanelBarNavContainer>
        // BrowserRouterClose
    );
};

export default App;
