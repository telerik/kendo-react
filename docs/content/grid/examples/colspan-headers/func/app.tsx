import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import sampleProducts from './gd-products';

const style = `
td[colspan="2"] {
    background-color: lavender;
}`;

const App = () => {
    return (
        <>
            <style>{style}</style>
            <Grid style={{ height: '420px' }} data={sampleProducts.slice(0, 10)}>
                <Column field="ProductID" title="ID" width={40} resizable={false} />
                <Column title="Product Information">
                    <Column field="ProductName" title="Product Name" />
                    <Column title="Unit">
                        <Column colSpan={2} field="UnitPrice" title="Unit Price" />
                        <Column field="UnitsInStock" title="Units In Stock" />
                    </Column>
                </Column>
                <Column
                    title="Category"
                    children={[
                        { field: 'Category.CategoryName', title: 'Category Name', colSpan: 2 } as any,
                        <Column key={2} field="Category.Description" title="Description" />
                    ]}
                />
            </Grid>
        </>
    );
};

export default App;
