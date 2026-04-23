import * as React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationContainer from './NavigationContainer';

import { Avatar } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { dollarIcon, fileTxtIcon, gearIcon, homeIcon, moreHorizontalIcon } from '@progress/kendo-svg-icons';

const App = () => {
    const Content = ({ text, svgIcon }) => {
        return (
            <div>
                <h3 className="title k-color-primary">{text}</h3>
                <Avatar type="icon" size="large">
                    <SvgIcon icon={svgIcon} size="large" />
                </Avatar>
            </div>
        );
    };

    return (
        // BrowserRouterOpen
        <NavigationContainer>
            <Routes>
                <Route path="/" element={<Content text="Home" svgIcon={homeIcon} />} />
                <Route path="/bills" element={<Content text="Bills" svgIcon={fileTxtIcon} />} />
                <Route path="/payments" element={<Content text="Payments" svgIcon={dollarIcon} />} />
                <Route path="/services" element={<Content text="Services" svgIcon={gearIcon} />} />
                <Route path="/more" element={<Content text="More" svgIcon={moreHorizontalIcon} />} />
            </Routes>
        </NavigationContainer>
        // BrowserRouterClose
    );
};

export default App;
