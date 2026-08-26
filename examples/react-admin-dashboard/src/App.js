import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn.jsx';
import { SignUp } from './pages/SignUp.jsx';
import { Home } from './pages/Home.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { About } from './pages/About.jsx'
import { PerformanceAndSales } from './pages/PerformanceAndSales.jsx'
import { Products } from './pages/Products.jsx';
import { Settings } from './pages/Settings.jsx';
import { Account } from './components/settings/Account.jsx';
import { Billing } from './components/settings/Billing.jsx';
import { Notifications } from './components/settings/Notifications.jsx';
import { Help } from './pages/Help.jsx';
import { NotFound } from './pages/NotFound.jsx';

const App = () => {
    return ( 
        <div className="App">
            <Routes>
               <Route path="/" element={<SignIn/>}/>
               <Route path="/signup" element={<SignUp/>}/>
               <Route path="/home" element={<Home/>}>
               <Route index element={<Navigate to="dashboard" replace />} />
               <Route path="/home/dashboard" element={<Dashboard/>}/>
               <Route path="/home/about" element={<About/>}/>
               <Route path="/home/performance-and-sales" element={<PerformanceAndSales/>}/>
               <Route path="/home/products" element={<Products/>}/>
               <Route path="/home/settings" element={<Settings/>}/>
               <Route path="/home/account" element={<Account/>}/>
               <Route path="/home/billing" element={<Billing/>}/>
               <Route path="/home/notifications" element={<Notifications/>}/>
               <Route path="/home/help" element={<Help/>}/>
              </Route>
              <Route path="*" element={<NotFound/>} />
            </Routes>

        </div>
    );
}

export default App;
