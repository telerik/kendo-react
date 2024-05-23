import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app'

const root = createRoot(document.querySelector('my-app'));
root.render(
  <React.Fragment>
    <App />
    <style>
      {`.arrow {
                padding: 8px 0 5px 238px;
            }
            .example .demo-section {
                max-width: none;
                width: 640px;
            }

            .example .k-listbox {
                width: 275px;
                height: 310px;
            }`}
    </style>
  </React.Fragment>);