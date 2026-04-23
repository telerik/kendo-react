import * as React from 'react';
import { Router, BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Products from './Products';
import DrawerContainer from './DrawerContainer';
// import './styles.css';

const App = () => {
    React.useEffect(() => {
        const styleSheet = import('./styles.css');

        return () => {
            styleSheet.then((module) => {
                const linkElement = document.querySelector(`link[href="${module.default}"]`);
                if (linkElement) {
                    linkElement.remove();
                }
            });
        };
    }, []);

    return (
        // BrowserRouterOpen
        <DrawerContainer>
            <Routes>
                <Route exact={true} path="/" element={<Home />} />
                <Route exact={true} path="/products" element={<Products />} />
                <Route exact={true} path="/about" element={<About />} />
            </Routes>
        </DrawerContainer>
        // BrowserRouterClose
    );
};

export default App;
