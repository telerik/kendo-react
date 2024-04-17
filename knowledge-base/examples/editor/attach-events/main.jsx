import { createRoot } from 'react-dom/client';
import App from './app.jsx'

const root = createRoot(document.querySelector('my-app'));
root.render(<App />);