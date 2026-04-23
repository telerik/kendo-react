import * as React from 'react';

import { ColorPicker } from '@progress/kendo-react-inputs';

const App = () => {
    const defaultValue: string = 'rgba(237, 126, 50, 1)';

    return (
        <div className="row">
            <div className="col-xs-12 col-md-12 example-col">
                <p>ColorPicker with default value</p>
                <ColorPicker views={['gradient', 'palette']} defaultValue={defaultValue} />
            </div>
        </div>
    );
};

export default App;
