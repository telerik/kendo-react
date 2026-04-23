import * as React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Education, Food, JapaneseFood, ItalianFood, Travel, Europe, NorthAmerica } from './Content';
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
                <Route path="/" element={<Education />} />
                <Route path="/food" element={<Food />} />
                <Route path="/food/japanese" element={<JapaneseFood />} />
                <Route path="/food/italian" element={<ItalianFood />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/travel/europe" element={<Europe />} />
                <Route path="/travel/america" element={<NorthAmerica />} />
            </Routes>
        </DrawerContainer>
        // BrowserRouterClose
    );
};

export default App;
