import * as React from 'react';

import { Checkbox } from '@progress/kendo-react-inputs';
import './styles.css';

const App = () => {
    return (
        <div className="flex-container">
            <Checkbox id={'chb1'} defaultChecked={true} rounded={'small'} size={'large'} />
            <Checkbox id={'chb2'} defaultChecked={true} rounded={'medium'} size={'large'} />
            <Checkbox id={'chb3'} defaultChecked={true} rounded={'large'} size={'large'} />
            <Checkbox id={'chb4'} defaultChecked={true} rounded={'none'} size={'large'} />
        </div>
    );
};

export default App;
