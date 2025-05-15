import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@progress/kendo-theme-default/dist/default-ocean-blue-a11y.css';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
