import * as React from 'react';
import { Grid, GridColumn as Column, GridToolbar, GridCustomCellProps } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import sampleProducts from './gd-sample-products';
import { Product } from './gd-interfaces';
import EditForm from './editForm';

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

const MyEditCommandCell = (props: EditCommandCellProps) => <EditCommandCell {...props} enterEdit={props.enterEdit} />;

const App = () => {
    const [openForm, setOpenForm] = React.useState<boolean>(false);
    const [editItem, setEditItem] = React.useState<Product>({ ProductID: 1 });
    const [data, setData] = React.useState<Array<Product>>(sampleProducts);

    const enterEdit = (item: Product) => {
        setOpenForm(true);
        setEditItem(item);
    };

    const handleSubmit = (event) => {
        let newItem = true;
        let newData = data.map((item) => {
            if (event.ProductID === item.ProductID) {
                newItem = false;
                item = { ...event };
            }
            return item;
        });
        if (newItem) {
            newData.push(event);
        }
        setData(newData);
        setOpenForm(false);
    };

    const addNew = () => {
        setOpenForm(true);
        setEditItem({ ProductID: 99 }); // you need to change the logic for adding unique ID value;
    };

    const handleCancelEdit = () => {
        setOpenForm(false);
    };

    return (
        <>
            <Grid style={{ height: '400px' }} data={data} navigatable={true}>
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
                <Column cells={{ data: (props) => <MyEditCommandCell {...props} enterEdit={enterEdit} /> }} />
            </Grid>
            {openForm && <EditForm cancelEdit={handleCancelEdit} onSubmit={handleSubmit} item={editItem} />}

            <style>
                {`.k-animation-container {
                    z-index: 10003;
                }`}
            </style>
        </>
    );
};

export default App;
