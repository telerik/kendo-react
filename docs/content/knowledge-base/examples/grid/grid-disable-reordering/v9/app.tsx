import * as React from 'react';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import products from './shared-kb-products';

const App: React.FC = () => {
    const [locked, setLocked] = React.useState<boolean>(false);

    const handleClick = (): void => {
        setLocked(!locked);
    };

    return (
        <div>
            <Grid
                style={{
                    height: 350
                }}
                data={products}
                reorderable={true}
            >
                <Column field="ProductID" title="Id" width="45px" locked={true} orderIndex={0} />
                <Column field="UnitsInStock" title="Units" width="90px" locked={true} orderIndex={0} />
                <Column field="Category.CategoryName" title="CategoryName" width="250px" />
                <Column field="UnitPrice" title="Price" width="90px" />

                <Column field="UnitsOnOrder" title="On order" width="90px" />
                <Column field="Discontinued" width="120px" />
            </Grid>
        </div>
    );
};

export default App;
