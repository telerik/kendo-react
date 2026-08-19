import * as React from 'react';
import {
    ProgressBar
} from '@progress/kendo-react-progressbars';

const App = () => {
    return (
        <div className="example-wrapper-center">
            <ProgressBar value={50} />
        </div>
    );
};

export default App;
