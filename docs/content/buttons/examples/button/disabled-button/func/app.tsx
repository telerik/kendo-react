import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { checkIcon, xIcon } from '@progress/kendo-svg-icons';

import './styles.css';

const App = () => {
    return (
        <div>
            <Button svgIcon={checkIcon} themeColor={'primary'}>
                Enabled Button
            </Button>
            <Button svgIcon={xIcon} disabled={true} themeColor={'primary'}>
                Disabled Button
            </Button>
        </div>
    );
};

export default App;
