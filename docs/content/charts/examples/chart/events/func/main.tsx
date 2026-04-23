import * as React from 'react';
import { createRoot } from 'react-dom/client';
import DemoContainer from './app';

const root = createRoot(document.querySelector('my-app')!);
root.render(<DemoContainer />);
