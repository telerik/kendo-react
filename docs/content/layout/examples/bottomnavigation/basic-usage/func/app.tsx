import * as React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavigationContainer from './NavigationContainer';
import Inbox from './Inbox';
import Calendar from './Calendar';
import Profile from './Profile';

const App = () => {
    return (
        // BrowserRouterClose
        <NavigationContainer>
            <Routes>
                <Route path="/" element={<Inbox />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </NavigationContainer>
        // BrowserRouterClose
    );
};

export default App;
