import * as React from 'react';
import { Barcode, Border } from '@progress/kendo-react-barcodes';

const barcodeBorder: Border = {
    color: '#fc0',
    width: 2
};

const App = () => <Barcode type="EAN13" value="123456789012" border={barcodeBorder} padding={5} width={200} />;

export default App;
