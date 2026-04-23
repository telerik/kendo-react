import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inbox from './Inbox';
import Notifications from './Notifications';
import Calendar from './Calendar';
import Attachments from './Attachments';
import Favorites from './Favorites';
import DrawerRouterContainer from './DrawerRouterContainer';
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
                <Route path="/" element={<Inbox />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/attachments" element={<Attachments />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </DrawerRouterContainer>
        // BrowserRouterClose
    );
};
export default App;
