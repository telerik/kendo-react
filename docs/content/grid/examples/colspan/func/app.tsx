import { GridColSpanProps, Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import sampleProducts from './gd-products';

const colSpanCb = (props: GridColSpanProps) => {
    const { dataItem } = props;

    if (dataItem.UnitPrice > 30) {
        return 2;
    }

    return 1;
};
const style = `
td[colspan="2"] {
    background-color: lavender;
}`;

const App = () => {
    return (
        <>
            <style>{style}</style>
            <Grid style={{ height: '400px' }} data={sampleProducts}>
                <Column field="ProductID" title="ID" />
                <Column field="ProductName" className="red" colSpan={2} title="Product Name" />
                <Column field="Category.CategoryName" title="Category Name" />
                <Column field="UnitPrice" colSpan={colSpanCb} title="Price" />
                <Column field="UnitsInStock" title="In stock" />
            </Grid>
        </>
    );
};

export default App;
