import { Routes, Route } from 'react-router-dom';
import { DoctorProfileProvider } from './context/DoctorProfileContext';
import { IconsProvider } from './context/IconsContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Patients from './pages/Patients';
import PatientProfile from './pages/PatientProfile';
import ClinicalAnalytics from './pages/ClinicalAnalytics';
import {
    Auth,
    HelpSupport,
    Intake,
    Labs,
    Messages,
    NotFound,
    Notifications,
    Providers,
    Settings,
} from './pages/HealthcarePages';

export default function App() {
    return (
        <IconsProvider>
            <DoctorProfileProvider>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="schedule" element={<Schedule />} />
                        <Route path="patients" element={<Patients />} />
                        <Route path="patients/:id" element={<PatientProfile />} />
                        <Route path="analytics" element={<ClinicalAnalytics />} />
                        <Route path="labs" element={<Labs />} />
                        <Route path="messages" element={<Messages />} />
                        <Route path="providers" element={<Providers />} />
                        <Route path="intake" element={<Intake />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="profile" element={<Settings />} />
                        <Route path="notifications" element={<Notifications />} />
                        <Route path="help" element={<HelpSupport />} />
                        <Route path="login" element={<Auth mode="login" />} />
                        <Route path="register" element={<Auth mode="register" />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </DoctorProfileProvider>
        </IconsProvider>
    );
}
