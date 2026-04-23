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
                <ColorPicker id="colorpicker-small" views={['gradient', 'palette']} rounded="small" />
            </div>
            <div>
                <Label editorId="colorpicker-medium">Medium</Label>
                <br />
                <ColorPicker id="colorpicker-medium" views={['gradient', 'palette']} rounded="medium" />
            </div>
            <div>
                <Label editorId="colorpicker-large">Large</Label>
                <br />
                <ColorPicker id="colorpicker-large" views={['gradient', 'palette']} rounded="large" />
            </div>
            <div>
                <Label editorId="colorpicker-full">Full</Label>
                <br />
                <ColorPicker id="colorpicker-full" views={['gradient', 'palette']} rounded="full" />
            </div>
            <div>
                <Label editorId="colorpicker-none">None</Label>
                <br />
                <ColorPicker id="colorpicker-none" views={['gradient', 'palette']} rounded="none" />
            </div>
        </div>
    );
};

export default App;
