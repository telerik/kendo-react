import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app';

const root = ReactDOM.createRoot(document.querySelector('my-app') as HTMLElement);
root.render(<App />);
