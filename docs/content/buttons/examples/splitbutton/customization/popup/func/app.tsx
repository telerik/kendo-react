import * as React from 'react';

import { SplitButton } from '@progress/kendo-react-buttons';

import './styles.css';

const items = ['Reply All', 'Forward', 'Reply & Delete'];

const App = () => {
    return (
        <div>
            <SplitButton popupSettings={{ animate: false, popupClass: 'my-popup' }} items={items} text="Reply" />
        </div>
    );
};

export default App;
