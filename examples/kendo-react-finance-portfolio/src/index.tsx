import { createRoot } from 'react-dom/client';
import App from './App';

import './styles/main.scss';

const root = document.getElementById('root')!;
createRoot(root).render(<App />);
