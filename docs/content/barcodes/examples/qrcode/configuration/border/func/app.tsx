import * as React from 'react';
import { QRCode, Border } from '@progress/kendo-react-barcodes';

const qrcodeBorder: Border = {
    color: '#fc0',
    width: 2
};

const App = () => <QRCode value="123456789012" border={qrcodeBorder} padding={5} />;

export default App;
