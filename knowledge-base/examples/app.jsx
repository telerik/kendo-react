import { createRoot } from 'react-dom/client';
import App from './editor/attach-events/main.jsx'

const root = createRoot(document.querySelector('my-app'));
root.render(<App />);