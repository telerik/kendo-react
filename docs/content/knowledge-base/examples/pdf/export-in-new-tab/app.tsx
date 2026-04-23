import * as React from 'react';
import { drawDOM, exportPDF } from '@progress/kendo-drawing';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';

const gridData = [
    {
        ProductID: 1,
        ProductName: 'Chai',
        SupplierID: 1,
        CategoryID: 1,
        QuantityPerUnit: '10 boxes x 20 bags',
        UnitPrice: 18.0,
        UnitsInStock: 39,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales'
        }
    }
];

const App = () => {
    const exportPDFWithMethod = () => {
        let gridElement = document.querySelector('.k-grid') as any;
        drawDOM(gridElement, { paperSize: 'A4' })
            .then((group) => {
                return exportPDF(group);
            })
            .then((dataUri) => {
                console.log(dataUri.split(';base64,')[1]);

                var w = window.open('about:blank');

                setTimeout(function () {
                    let iframe = w?.document.body.appendChild(w?.document.createElement('iframe'));
                    if (iframe) {
                        iframe.src = dataUri;
                        iframe.width = '100%';
                        iframe.height = '100%';
                    }
                }, 0);
            });
    };

    return (
        <div>
            <div className="example-config">
                <Button type="button" onClick={exportPDFWithMethod}>
                    Create Base64 string
                </Button>
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
