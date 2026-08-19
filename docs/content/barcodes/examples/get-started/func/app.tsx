import * as React from 'react';
import { Barcode } from '@progress/kendo-react-barcodes';

const App = () => (
    <div className="example-wrapper-center">
        <Barcode type="EAN13" value="123456789012" />
    </div>
);

export default App;
