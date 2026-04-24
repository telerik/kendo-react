import * as React from 'react';

import { ColorPicker } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <div>
                <Label editorId="colorpicker-small">Small</Label>
                <br />
                <ColorPicker id="colorpicker-small" views={['gradient', 'palette']} size="small" />
            </div>
            <div>
                <Label editorId="colorpicker-medium">Medium</Label>
                <br />
                <ColorPicker id="colorpicker-medium" views={['gradient', 'palette']} size="medium" />
            </div>
            <div>
                <Label editorId="colorpicker-large">Large</Label>
                <br />
                <ColorPicker id="colorpicker-large" views={['gradient', 'palette']} size="large" />
            </div>
        </div>
    );
};

export default App;
