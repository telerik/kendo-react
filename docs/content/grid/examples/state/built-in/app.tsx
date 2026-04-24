import React from 'react';

import { Grid, GridColumn as Column, GridItemChangeEvent } from '@progress/kendo-react-grid';
import { sampleProducts } from './gd-sample-products';
import { DetailComponent } from './detail';

export default function App() {
    const [data, setData] = React.useState(sampleProducts);

    const handleItemChange = (event: GridItemChangeEvent) => {
        const newData = data.map((item) =>
            item.ProductID === event.dataItem.ProductID ? { ...item, [event.field!]: event.value } : item
        );
        setData(newData);
    };

    return (
        <Grid
            style={{
                height: '420px'
            }}
            dataItemKey="ProductID"
            data={data}
            autoProcessData={true}
            onItemChange={handleItemChange}
            sortable={true}
            navigatable={true}
            filterable={true}
            pageable={true}
            selectable={true}
            groupable={true}
            editable={true}
            defaultSort={[{ field: 'ProductName', dir: 'asc' }]}
            defaultFilter={{
                logic: 'and',
                filters: [
                    {
                        field: 'ProductName',
                        operator: 'contains',
                        value: 'C'
                    }
                ]
            }}
            defaultSkip={0}
            defaultTake={5}
            defaultGroup={[{ field: 'Discontinued' }]}
            defaultGroupExpand={[]}
            defaultDetailExpand={{}}
            defaultSelect={{}}
            defaultEdit={{}}
            detail={DetailComponent}
        >
            <Column columnType="checkbox" filterable={false} editable={false} sortable={false} groupable={false} />
            <Column field="ProductID" title="ID" filterable={false} editable={false} width="60px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="FirstOrderedOn" width="240px" filter="date" format="{0:d}" />
            <Column field="UnitPrice" editable={true} width="180px" filter="numeric" format="{0:c}" />
            <Column field="Discontinued" width="190px" filter="boolean" editor="boolean" />
        </Grid>
    );
}
