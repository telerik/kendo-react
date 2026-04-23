import * as React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AvatarComponent from './AvatarComponent';
import BottomNavigationComponent from './BottomNavigationComponent';
import BreadcrumbComponent from './BreadcrumbComponent';
import CardComponent from './CardComponent';
import GridLayoutComponent from './GridLayoutComponent';
import MenuComponent from './MenuComponent';
import PanelBarComponent from './PanelBarComponent';
import SplitterComponent from './SplitterComponent';
import StackLayoutComponent from './StackLayoutComponent';
import StepperComponent from './StepperComponent';
import TabStripComponent from './TabStripComponent';
import TileLayoutComponent from './TileLayoutComponent';
import DrawerRouterContainer from './DrawerRouterContainer';
import ExpansionPanelComponent from './ExpansionPanelComponent';
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
        <DrawerRouterContainer>
            <Routes>
                <Route path="/" element={<AvatarComponent />} />
                <Route path="/bottomnavigation" element={<BottomNavigationComponent />} />
                <Route path="/breadcrumb" element={<BreadcrumbComponent />} />
                <Route path="/card" element={<CardComponent />} />
                <Route path="/expansionpanel" element={<ExpansionPanelComponent />} />
                <Route path="/gridlayout" element={<GridLayoutComponent />} />
                <Route path="/menu" element={<MenuComponent />} />
                <Route path="/panelbar" element={<PanelBarComponent />} />
                <Route path="/splitter" element={<SplitterComponent />} />
                <Route path="/stacklayout" element={<StackLayoutComponent />} />
                <Route path="/stepper" element={<StepperComponent />} />
                <Route path="/tabstrip" element={<TabStripComponent />} />
                <Route path="/tilelayout" element={<TileLayoutComponent />} />
            </Routes>
        </DrawerRouterContainer>
        // BrowserRouterClose
    );
};

export default App;
