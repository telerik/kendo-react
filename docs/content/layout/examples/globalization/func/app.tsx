import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AvatarComponent from './AvatarComponent';
import BottomNavigationComponent from './BottomNavigationComponent';
import BreadcrumbComponent from './BreadcrumbComponent';
import CardComponent from './CardComponent';
import MenuComponent from './MenuComponent';
import PanelBarComponent from './PanelBarComponent';
import SplitterComponent from './SplitterComponent';
import StepperComponent from './StepperComponent';
import TabStripComponent from './TabStripComponent';
import TileLayoutComponent from './TileLayoutComponent';
import DrawerRouterContainer from './DrawerRouterContainer';
// import './styles.css';

const App = () => {
    const dir = 'rtl';

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
        <DrawerRouterContainer>
            <Routes>
                <Route path="/" element={<AvatarComponent />} />
                <Route path="/bottomnavigation" element={<BottomNavigationComponent />} />
                <Route path="/breadcrumb" element={<BreadcrumbComponent dir={dir} />} />
                <Route path="/card" element={<CardComponent dir={dir} />} />
                <Route path="/menu" element={<MenuComponent dir={dir} />} />
                <Route path="/panelbar" element={<PanelBarComponent dir={dir} />} />
                <Route path="/splitter" element={<SplitterComponent dir={dir} />} />
                <Route path="/stepper" element={<StepperComponent dir={dir} />} />
                <Route path="/tabstrip" element={<TabStripComponent dir={dir} />} />
                <Route path="/tilelayout" element={<TileLayoutComponent dir={dir} />} />
            </Routes>
        </DrawerRouterContainer>
        // BrowserRouterClose
    );
};

export default App;
