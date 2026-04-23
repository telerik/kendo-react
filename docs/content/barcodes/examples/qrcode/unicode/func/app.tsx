import * as React from 'react';
import { QRCode } from '@progress/kendo-react-barcodes';

const App = () => (
    <div className="k-card-deck">
        <div className="k-card k-text-center">
            <div className="k-card-header">
                <div className="k-card-title">QR Code with Unicode characters</div>
            </div>
            <div className="k-card-body">
                <QRCode value="Unicode for everyone 🐶" encoding="UTF_8" size="150px" />
            </div>
        </div>
    </div>
);

export default App;
