import * as React from 'react';

import { Checkbox } from '@progress/kendo-react-inputs';
import './styles.css';

const App = () => {
    return (
        <div className="flex-container">
            <Checkbox id={'chb1'} defaultChecked={true} size={'small'} />
            <Checkbox id={'chb2'} defaultChecked={true} size={'medium'} />
            <Checkbox id={'chb3'} defaultChecked={true} size={'large'} />
        </div>
    );
};

export default App;
