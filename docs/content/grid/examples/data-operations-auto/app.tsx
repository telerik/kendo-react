import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './gd-products';

export default function App() {
    return (
        <Grid
            style={{
                height: '420px'
            }}
            data={products}
            autoProcessData={true}
            dataItemKey="ProductID"
            pageable={true}
            defaultTake={5}
            groupable={true}
            defaultGroup={[{ field: 'Discontinued', dir: 'desc' }]}
            filterable={true}
            defaultFilter={{
                logic: 'and',
                filters: [{ field: 'ProductName', operator: 'contains', value: 'C' }]
            }}
            sortable={true}
            defaultSort={[{ field: 'FirstOrderedOn', dir: 'asc' }]}
        >
            <Column field="ProductID" title="ID" filterable={false} width="60px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitsInStock" filter="numeric" width="240px" />
            <Column field="UnitPrice" width="180px" filter="numeric" format="{0:c}" />
            <Column field="Discontinued" width="190px" filter="boolean" />
        </Grid>
    );
}
