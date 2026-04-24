import * as React from 'react';
import { QRCode } from '@progress/kendo-react-barcodes';

const App = () => <QRCode value="123456789012" color="#00f" background="#fc0" padding={15} />;

export default App;
