import * as React from 'react';
import { createRoot } from 'react-dom/client';
import MapContainer from './app';

const root = createRoot(document.querySelector('my-app')!);
root.render(<MapContainer />);
