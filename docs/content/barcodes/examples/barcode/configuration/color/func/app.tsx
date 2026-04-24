import * as React from 'react';
import { Barcode } from '@progress/kendo-react-barcodes';

const App = () => <Barcode type="EAN13" value="123456789012" color="#00f" background="#fc0" padding={15} width={200} />;

export default App;
