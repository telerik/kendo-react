import * as React from 'react';
import { Barcode } from '@progress/kendo-react-barcodes';

const cardStyles = {
    width: '50%'
};

const barcodeStyles = {
    width: '100%',
    'min-width': '100px',
    'aspect-ratio': '2/1'
};

const App = () => (
    <div className="k-card-deck">
        <div className="k-card k-text-center" style={cardStyles}>
            <div className="k-card-header">
                <div className="k-card-title">Barcode (100% width)</div>
            </div>
            <div className="k-card-body">
                <Barcode style={barcodeStyles} type="EAN13" value="123456789012" />
            </div>
        </div>

        <div className="k-card k-text-center" style={cardStyles}>
            <div className="k-card-header">
                <div className="k-card-title">Barcode (fixed size)</div>
            </div>
            <div className="k-card-body">
                <Barcode type="EAN8" value="1234567" width={200} height={100} />
            </div>
        </div>
    </div>
);

export default App;
