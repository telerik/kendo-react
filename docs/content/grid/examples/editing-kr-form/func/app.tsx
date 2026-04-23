import * as React from 'react';
import { Grid, GridColumn as Column, GridCustomCellProps } from '@progress/kendo-react-grid';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import products from './gd-products';
import { Button } from '@progress/kendo-react-buttons';
import EditForm from './editForm';
import { Product } from './gd-interfaces';

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
    const [data, setData] = React.useState<Product[]>(products);
    const [edit, setEdit] = React.useState<EditDescriptor>({});

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
        setEdit({});
    };

    const handleCancelEdit = () => {
        setEdit({});
    };

    const MyEditCommandCell = (props: GridCustomCellProps) => <EditCommandCell {...props} enterEdit={enterEdit} />;

    const editItem = data.find((item) => edit[item.ProductID]);

    return (
        <React.Fragment>
            <Grid style={{ height: '400px' }} data={data}>
                <Column field="ProductID" title="ID" width="40px" />
                <Column field="ProductName" title="Name" width="250px" />
                <Column field="Category.CategoryName" title="CategoryName" />
                <Column field="UnitPrice" title="Price" />
                <Column field="UnitsInStock" title="In stock" />
                <Column cells={{ data: MyEditCommandCell }} />
            </Grid>
            {editItem ? <EditForm cancelEdit={handleCancelEdit} onSubmit={handleSubmit} item={editItem} /> : null}
        </React.Fragment>
    );
};

export default App;
