import * as React from 'react';
import { Grid, GridColumn, GridHandle } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import products from './gd-products';

const App = () => {
    const gridRef = React.useRef<GridHandle>(null);

    const scrollTo = (e: React.MouseEvent<HTMLButtonElement>) => {
        const targetRowIndex = parseInt((e.target as HTMLElement).textContent || '0', 10);
        if (gridRef.current) {
            gridRef.current.scrollIntoView({ rowIndex: targetRowIndex });
        }
    };

    return (
        <div>
            <div>
                <span style={{ marginRight: 10 }}>Scroll to row with index (it is zero based):</span>
                <Button style={{ marginRight: 5 }} onClick={scrollTo}>
                    0
                </Button>
                <Button style={{ marginRight: 5 }} onClick={scrollTo}>
                    5
                </Button>
                <Button style={{ marginRight: 5 }} onClick={scrollTo}>
                    10
                </Button>
                <Button style={{ marginRight: 5 }} onClick={scrollTo}>
                    11
                </Button>
                <Button style={{ marginRight: 5 }} onClick={scrollTo}>
                    20
                </Button>
                <Button style={{ marginRight: 5 }} onClick={scrollTo}>
                    70
                </Button>
            </div>
            <br />
            <Grid ref={gridRef} style={{ height: '400px' }} rowHeight={30} data={products}>
                <GridColumn field="ProductID" title="ID" width="40px" />
                <GridColumn field="ProductName" title="Name" />
                <GridColumn field="Category.CategoryName" title="CategoryName" width="150px" />
                <GridColumn field="UnitPrice" title="Price" width="150px" />
                <GridColumn field="UnitsInStock" title="In stock" width="150px" />
            </Grid>
        </div>
    );
};

export default App;
