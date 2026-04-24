import * as React from 'react';

import { Routes, Route } from 'react-router-dom';
import Inbox from './Inbox';
import Notifications from './Notifications';
import Calendar from './Calendar';
import Attachments from './Attachments';
import Favourites from './Favourites';
import DrawerRouterContainer from './DrawerRouterContainer';
import './styles.css';

const App = () => {
    return (
        <DrawerRouterContainer>
            <Routes>
                <Route path="/" element={<Inbox />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/attachments" element={<Attachments />} />
                <Route path="/favourites" element={<Favourites />} />
            </Routes>
        </DrawerRouterContainer>
    );
};

export default App;
