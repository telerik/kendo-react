import React, { useMemo, useState } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import calculateSize from 'calculate-size';
import products from './shared-kb-products';
import { Checkbox } from '@progress/kendo-react-inputs';

const App = () => {
    const [gridData] = useState(products);

    const nameColWidth = useMemo(() => {
        let max = 0;
        gridData.forEach((item: any) => {
            const size = calculateSize(String(item['ProductName'] ?? ''), { font: 'Arial', fontSize: '16px' });
            if (size.width > max) max = size.width;
        });
        return max;
    }, [gridData]);

    return (
        <div>
            <Grid style={{ height: '400px' }} data={gridData}>
                <Column field="ProductID" title="ID" width="40px" />
                <Column field="ProductName" title="Name" width={nameColWidth} />
                <Column field="Category.CategoryName" title="CategoryName" />
                <Column field="UnitPrice" title="Price" width="80px" />
                <Column field="UnitsInStock" title="In stock" width="80px" />
                <Column
                    field="Discontinued"
                    width="120px"
                    cells={{
                        data: (props: any) => (
                            <td {...props.tdProps}>
                                <Checkbox disabled checked={props.dataItem[props.field]} />
                            </td>
                        )
                    }}
                />
            </Grid>
        </div>
    );
};

export default App;
