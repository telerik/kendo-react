import * as React from 'react';
import { Barcode, QRCode } from '@progress/kendo-react-barcodes';

const cardStyles = {
    width: '50%'
};

const App = () => (
    <div className="k-card-deck">
        <div className="k-card k-text-center" style={cardStyles}>
            <div className="k-card-header">
                <div className="k-card-title">Barcode</div>
            </div>
            <div className="k-card-body">
                <Barcode type="EAN13" value="123456789012" />
            </div>
        </div>

        <div className="k-card k-text-center" style={cardStyles}>
            <div className="k-card-header">
                <div className="k-card-title">QR Code</div>
            </div>
            <div className="k-card-body">
                <QRCode value="https://www.telerik.com/kendo-react-ui/components/barcodes/" />
            </div>
        </div>
    </div>
);

export default App;
