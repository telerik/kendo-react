import * as React from 'react';
import { Grid, GridColumn as Column, GridToolbar, GridCustomCellProps } from '@progress/kendo-react-grid';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import { Button } from '@progress/kendo-react-buttons';
import { Product } from './gd-interfaces';
import EditForm from './editForm';
import sampleProducts from './gd-sample-products';

interface EditCommandCellProps extends GridCustomCellProps {
    enterEdit: (item: Product) => void;
}

const EditCommandCell = (props: EditCommandCellProps) => {
    return (
        <td {...props.tdProps}>
            <Button themeColor={'primary'} type="button" onClick={() => props.enterEdit(props.dataItem)}>
                Edit
            </Button>
        </td>
    );
};

const App = () => {
    const [data, setData] = React.useState<Product[]>(sampleProducts);
    const [edit, setEdit] = React.useState<EditDescriptor>({});
    const [newItem, setNewItem] = React.useState<Partial<Product> | null>(null);

    const enterEdit = (item: Product) => {
        setEdit({ [item.ProductID]: true });
    };

    const handleSubmit = (newDataItem) => {
        let newItem = true;
        let newData = data.map((item) => {
            if (newDataItem.ProductID === item.ProductID) {
                newItem = false;
                item = { ...newDataItem };
            }
            return item;
        });
        if (newItem) {
            newData.push(newDataItem);
        }
        setData(newData);
        setNewItem(null);
        setEdit({});
    };

    const addNew = () => {
        setNewItem({ ProductID: data.length + 1 });
    };

    const handleCancelEdit = () => {
        setNewItem(null);
        setEdit({});
    };

    const editItem = data.find((item) => edit[item.ProductID]) ?? newItem;

    return (
        <React.Fragment>
            <Grid style={{ height: '400px' }} data={data}>
                <GridToolbar>
                    <Button title="Add new" type="button" themeColor={'primary'} onClick={addNew}>
                        Add new
                    </Button>
                </GridToolbar>
                <Column field="ProductID" title="ID" width="40px" />
                <Column field="ProductName" title="Name" width="250px" />
                <Column field="Category.CategoryName" title="CategoryName" />
                <Column field="UnitPrice" title="Price" />
                <Column field="UnitsInStock" title="In stock" />
                <Column cells={{ data: (props) => <EditCommandCell {...props} enterEdit={enterEdit} /> }} />
            </Grid>
            {editItem ? <EditForm cancelEdit={handleCancelEdit} onSubmit={handleSubmit} item={editItem} /> : null}
        </React.Fragment>
    );
};

export default App;
