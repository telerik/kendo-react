import * as React from 'react';

import { Signature } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const App = () => {
    return (
        <div className="component-container">
            <div>
                <Label editorId="signature-solid">Solid</Label>
                <br />
                <Signature id="signature-solid" fillMode="solid" />
            </div>
            <div>
                <Label editorId="signature-outline">Outline</Label>
                <br />
                <Signature id="signature-outline" fillMode="outline" />
            </div>
            <div>
                <Label editorId="signature-flat">Flat</Label>
                <br />
                <Signature id="signature-flat" fillMode="flat" />
            </div>
        </div>
    );
};

export default App;
