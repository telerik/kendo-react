import * as React from 'react';
import { Barcode, BarcodeText } from '@progress/kendo-react-barcodes';

const barcodeText: BarcodeText = {
    color: '#fc0',
    font: '20px monospace'
};

const App = () => (
    <Barcode type="EAN13" value="123456789012" text={barcodeText} checksum={true} padding={5} width={200} />
);

export default App;
