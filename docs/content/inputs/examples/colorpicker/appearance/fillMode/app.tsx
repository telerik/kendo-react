import * as React from 'react';

import { ColorPicker } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <div>
                <Label editorId="colorpicker-solid">Solid</Label>
                <br />
                <ColorPicker id="colorpicker-solid" views={['gradient', 'palette']} fillMode="solid" />
            </div>
            <div>
                <Label editorId="colorpicker-outline">Outline</Label>
                <br />
                <ColorPicker id="colorpicker-outline" views={['gradient', 'palette']} fillMode="outline" />
            </div>
            <div>
                <Label editorId="colorpicker-flat">Flat</Label>
                <br />
                <ColorPicker id="colorpicker-flat" views={['gradient', 'palette']} fillMode="flat" />
            </div>
        </div>
    );
};

export default App;
