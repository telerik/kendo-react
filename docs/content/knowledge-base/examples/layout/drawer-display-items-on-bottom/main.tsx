import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const root = createRoot(document.querySelector('my-app')!);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
