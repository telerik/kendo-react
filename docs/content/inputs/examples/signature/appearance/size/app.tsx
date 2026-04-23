import * as React from 'react';

import { Signature } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const App = () => {
    return (
        <div className="component-container">
            <div>
                <Label editorId="signature-small">Small</Label>
                <br />
                <Signature id="signature-small" size="small" />
            </div>
            <div>
                <Label editorId="signature-medium">Medium</Label>
                <br />
                <Signature id="signature-medium" size="medium" />
            </div>
            <div>
                <Label editorId="signature-large">Large</Label>
                <br />
                <Signature id="signature-large" size="large" />
            </div>
        </div>
    );
};

export default App;
