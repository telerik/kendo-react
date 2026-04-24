import * as React from 'react';
import { createRoot } from 'react-dom/client';
import DefaultValueExample from './app';

const root = createRoot(document.querySelector('my-app')!);
root.render(<DefaultValueExample />);
