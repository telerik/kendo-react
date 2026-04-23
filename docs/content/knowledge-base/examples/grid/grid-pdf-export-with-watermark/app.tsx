import React, { useState } from 'react';
import { saveAs } from '@progress/kendo-file-saver';
import { drawDOM, exportPDF } from '@progress/kendo-drawing';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './products.json';

const App = () => {
    const [gridData] = useState(products as any[]);
    const [creator] = useState('KendoReact');

    const PageTemplate = (_props: any) =>
        `<div style='position: absolute; left: 200px; top: 200px; padding: 10px; opacity: 0.3'><b>Creator: ${creator} Watermark </b></div>`;

    const exportPDFWithMethod = () => {
        const gridElement = document.getElementsByClassName('k-grid')[0] as HTMLElement | undefined;
        if (!gridElement) return;
        drawDOM(gridElement, {
            paperSize: 'A3',
            margin: 100,
            template: PageTemplate
        })
            .then((group) => exportPDF(group))
            .then((dataUri) => {
                saveAs(dataUri, 'scene.pdf');
                console.log((dataUri as string).split(';base64,')[1]);
            });
    };

    return (
        <div>
            <div className="example-config">
                <button className="k-button" onClick={exportPDFWithMethod}>
                    Export with method
                </button>
            </div>
            <Grid style={{ maxHeight: '400px' }} data={gridData}>
                <Column field="ProductID" title="ID" width="40px" />
                <Column field="ProductName" title="Name" width="250px" />
                <Column field="Category.CategoryName" title="CategoryName" />
                <Column field="UnitPrice" title="Price" width="80px" />
                <Column field="UnitsInStock" title="In stock" width="80px" />
            </Grid>
        </div>
    );
};

export default App;
