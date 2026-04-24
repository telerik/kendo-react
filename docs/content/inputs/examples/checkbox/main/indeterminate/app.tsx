import * as React from 'react';

import { Checkbox } from '@progress/kendo-react-inputs';

import './styles.css';

const App = () => {
    return (
        <div>
            <div className="d-flex flex-wrap justify-content-center gap-container">
                <Checkbox defaultChecked={true} value={null} disabled={true} />
                <Checkbox defaultChecked={true} />
            </div>
        </div>
    );
};

export default App;
