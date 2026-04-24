import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
const root = createRoot(document.querySelector('my-app')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
