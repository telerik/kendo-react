import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import DrawerContainer from './DrawerContainer';
import About from './About';
import Home from './Home';
import Products from './Products';
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
        <div>
            {/* BrowserRouterOpen */}
            <DrawerContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </DrawerContainer>
            {/* BrowserRouterClose */}
        </div>
    );
};

export default App;
