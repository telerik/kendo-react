import * as React from 'react';
import { createRoot } from 'react-dom/client';
import ArcContainer from './app';

const root = createRoot(document.querySelector('my-app')!);
root.render(<ArcContainer />);
