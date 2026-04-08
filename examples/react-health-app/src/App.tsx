import { Routes, Route } from 'react-router-dom';
import { DoctorProfileProvider } from './context/DoctorProfileContext';
import { IconsProvider } from './context/IconsContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Patients from './pages/Patients';
import PatientProfile from './pages/PatientProfile';
import ClinicalAnalytics from './pages/ClinicalAnalytics';

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
                    </Route>
                </Routes>
            </DoctorProfileProvider>
        </IconsProvider>
    );
}
