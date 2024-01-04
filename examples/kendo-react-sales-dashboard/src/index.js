import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('homepage-app-demo');
const root = createRoot(container); 
root.render(<App tab="home" />);