import * as React from 'react';
import { Signature } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const App = () => {
    return (
        <div className="component-container">
            <div>
                <Label editorId="signature-blue">Blue on Light</Label>
                <br />
                <Signature id="signature-blue" color="#0066cc" backgroundColor="#f0f8ff" maximizable={false} />
            </div>
            <div>
                <Label editorId="signature-dark">Dark on Salmon</Label>
                <br />
                <Signature id="signature-dark" color="rgb(37, 37, 96)" backgroundColor="salmon" maximizable={false} />
            </div>
            <div>
                <Label editorId="signature-green">Green on Mint</Label>
                <br />
                <Signature id="signature-green" color="#006400" backgroundColor="#f0fff0" maximizable={false} />
            </div>
        </div>
    );
};

export default App;
