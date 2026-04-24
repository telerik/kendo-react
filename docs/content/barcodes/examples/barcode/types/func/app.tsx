import * as React from 'react';
import { Barcode, BarcodeType } from '@progress/kendo-react-barcodes';

const cardListStyles = {
    display: 'flex',
    'flex-wrap': 'wrap',
    gap: '16px',
    'font-family': 'sans-serif'
};

const cardStyles = {
    flex: '0 0 auto'
};

const barcodeStyles = {
    width: '300px',
    height: '100px'
};

const configurations: {
    type: BarcodeType;
    name: string;
    value: string;
}[] = [
    { type: 'EAN13', name: 'EAN-13', value: '123456789012' },
    { type: 'EAN8', name: 'EAN-8', value: '1234567' },

    { type: 'UPCA', name: 'UPC-A', value: '12345678901' },
    { type: 'UPCE', name: 'UPC-E', value: '123456' },

    { type: 'Code11', name: 'Code 11', value: '555-123' },

    { type: 'Code39', name: 'Code 39', value: 'CODE-39' },
    { type: 'Code39Extended', name: 'Code 39 (Extended)', value: '* Code-39 *' },

    { type: 'Code93', name: 'Code 93', value: 'CODE 93' },
    { type: 'Code93Extended', name: 'Code 93 (Extended)', value: '* Code 93 *' },

    { type: 'Code128', name: 'Code 128', value: '* Code 128 *' },
    { type: 'Code128A', name: 'Code 128A', value: '* CODE 128 *' },
    { type: 'Code128B', name: 'Code 128B', value: '* Code 128 *' },
    { type: 'Code128C', name: ' Code 128C', value: '112233' },

    { type: 'GS1-128', name: 'GS1-128', value: '00123456780000000001' },

    { type: 'MSImod10', name: 'MSI (Mod 10)', value: '1234567' },
    { type: 'MSImod11', name: ' MSI (Mod 11)', value: '1234567' },
    { type: 'MSImod1010', name: 'MSI (Mod 1010)', value: '1234567' },
    { type: 'MSImod1110', name: 'MSI (Mod 1110)', value: '1234567' },

    { type: 'POSTNET', name: 'POSTNET', value: '12345' }
];

const App = () => (
    <div style={cardListStyles}>
        {configurations.map((item, i) => (
            <div key={i} className="k-card k-text-center" style={cardStyles}>
                <div className="k-card-header">
                    <div className="k-card-title">{item.name}</div>
                </div>
                <Barcode style={barcodeStyles} type={item.type} value={item.value} padding={10} />
            </div>
        ))}
    </div>
);

export default App;
