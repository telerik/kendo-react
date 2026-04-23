import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Label } from '@progress/kendo-react-labels';
import { Switch } from '@progress/kendo-react-inputs';

import products from './gd-products';

const App = () => {
    const [locked, setLocked] = React.useState<boolean>(false);

    const handleClick = () => {
        setLocked(!locked);
    };

    return (
        <div>
            <div className="mb-3">
                <Label>
                    Lock Additional details Column: &nbsp;
                    <Switch onChange={() => setLocked(!locked)} checked={locked} />
                </Label>
            </div>
            <Grid style={{ height: 350 }} data={products} reorderable={true}>
                <Column field="ProductID" title="ID" width="45px" locked={true} />
                <Column field="ProductName" title="Name" width="250px" />
                <Column field="Category.CategoryName" title="CategoryName" width="250px" locked={true} />
                <Column field="UnitPrice" title="Price" width="90px" />
                <Column field="UnitsInStock" title="In stock" width="90px" />
                <Column field="UnitsOnOrder" title="On order" width="90px" />
                <Column field="Discontinued" width="120px" />
                <Column field="QuantityPerUnit" title="Additional details" width="250px" locked={locked} />
            </Grid>
        </div>
    );
};

export default App;
