import * as React from 'react';
import { QRCode } from '@progress/kendo-react-barcodes';

const cardStyles = {
    width: '50%'
};

const qrcodeStyles = {
    width: '50%',
    'min-width': '100px',
    'aspect-ratio': '1/1'
};

const App = () => (
    <div className="k-card-deck">
        <div className="k-card k-text-center" style={cardStyles}>
            <div className="k-card-header">
                <div className="k-card-title">QR Code (50% width)</div>
            </div>
            <div className="k-card-body">
                <QRCode style={qrcodeStyles} value="123456789012" />
            </div>
        </div>

        <div className="k-card k-text-center" style={cardStyles}>
            <div className="k-card-header">
                <div className="k-card-title">QR Code (fixed size)</div>
            </div>
            <div className="k-card-body">
                <QRCode value="1234567" size={200} />
            </div>
        </div>
    </div>
);

export default App;
