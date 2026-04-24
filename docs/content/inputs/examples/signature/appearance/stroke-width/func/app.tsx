import * as React from 'react';
import { Signature } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const App = () => {
    return (
        <>
            <div
                style={{
                    marginBottom: '20px',
                    padding: '15px',
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    borderRadius: '4px'
                }}
            >
                Draw on the signature pads below to compare stroke widths
            </div>
            <div className="component-container">
                <div>
                    <Label editorId="signature-thin">Thin (1px)</Label>
                    <br />
                    <Signature id="signature-thin" strokeWidth={1} maximizable={false} />
                </div>
                <div>
                    <Label editorId="signature-medium">Medium (2px)</Label>
                    <br />
                    <Signature id="signature-medium" strokeWidth={2} maximizable={false} />
                </div>
                <div>
                    <Label editorId="signature-thick">Thick (3px)</Label>
                    <br />
                    <Signature id="signature-thick" strokeWidth={3} maximizable={false} />
                </div>
            </div>
        </>
    );
};

export default App;
