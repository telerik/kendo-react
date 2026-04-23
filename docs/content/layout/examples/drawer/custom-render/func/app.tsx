import * as React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Paris, Rome, Berlin, Madrid } from './Content';
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
                <Route path="/" element={<Paris />} />
                <Route path="/rome" element={<Rome />} />
                <Route path="/berlin" element={<Berlin />} />
                <Route path="/madrid" element={<Madrid />} />
            </Routes>
        </DrawerContainer>
        // BrowserRouterClose
    );
};

export default App;
