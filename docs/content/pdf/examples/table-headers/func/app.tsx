import * as React from 'react';
import { savePDF } from '@progress/kendo-react-pdf';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';

import products from './products.json';
import { Checkbox } from '@progress/kendo-react-inputs';

const App = () => {
    const table = React.useRef(null);

    const [repeatHeaders, setRepeatHeaders] = React.useState(true);

    const generateRows = () => {
        return products.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.ProductName}</td>
                    <td>{product.UnitPrice}</td>
                    <td>{product.QuantityPerUnit}</td>
                </tr>
            );
        });
    };

    const exportPDF = () => {
        let element = table.current;
        if (element !== null) {
            savePDF(element, {
                repeatHeaders: repeatHeaders,
                paperSize: 'A4',
                margin: '2cm'
            });
        }
    };

    return (
        <div>
            <div className="example-config">
                <div>
                    <Checkbox
                        id="repeatHeaders"
                        checked={repeatHeaders}
                        onChange={() => setRepeatHeaders(!repeatHeaders)}
                        label="Repeat headers"
                    />
                </div>
                <Button type="button" onClick={exportPDF}>
                    Export PDF
                </Button>
            </div>

            <table className="table" ref={table}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Unit Price</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>{generateRows()}</tbody>
            </table>
        </div>
    );
};

export default App;
