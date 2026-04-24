import * as React from 'react';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';

import DialogContainer from './DialogContainer';
import { Button } from '@progress/kendo-react-buttons';
import { pencilIcon, xIcon } from '@progress/kendo-svg-icons';
import { Product } from './gd-interfaces';
import sampleProducts from './gd-sample-products';

const CustomCell = (props) => {
    return (
        <td {...props.tdProps}>
            <Button
                themeColor={'primary'}
                type="button"
                id={`edit-command-${props.dataItem.ProductID}`}
                svgIcon={pencilIcon}
                className={'k-grid-edit-command'}
                onClick={() => {
                    props.edit(props.dataItem);
                }}
            >
                Edit
            </Button>
            &nbsp;
            <Button
                svgIcon={xIcon}
                type="button"
                className={'k-grid-remove-command'}
                onClick={() => {
                    window.confirm('Confirm deleting: ' + props.dataItem.ProductName) && props.remove(props.dataItem);
                }}
            >
                Remove
            </Button>
        </td>
    );
};

const App = () => {
    const [products, setProducts] = React.useState<Product[]>(sampleProducts.slice(0, 7));
    const [productInEdit, setProductInEdit] = React.useState<Product>();
    const edit = React.useCallback((dataItem) => {
        setProductInEdit(dataItem);
    }, []);

    const remove = (dataItem) => {
        setProducts(products.filter((p) => p.ProductID !== dataItem.ProductID));
    };

    const save = (editedDataItem) => {
        const dataItem = editedDataItem;
        const currentProducts = products.slice() as Product[];

        if (dataItem) {
            const isNewProduct = dataItem.ProductID === undefined;

            if (isNewProduct) {
                currentProducts.unshift(newProduct(dataItem));
            } else {
                const index = currentProducts.findIndex((p) => p.ProductID === dataItem.ProductID);
                currentProducts.splice(index, 1, dataItem);
            }

            setProducts(currentProducts);
            setProductInEdit(undefined);
        }
    };

    const cancel = () => {
        setProductInEdit(undefined);
    };

    const insert = () => {
        setProductInEdit({} as Product);
    };

    const newProduct = (source) => {
        const id = products.reduce((acc, current) => Math.max(acc, current.ProductID || 0), 0) + 1;
        const newProduct = {
            ProductID: id,
            ProductName: '',
            UnitsInStock: 0,
            Discontinued: false
        };

        return Object.assign(newProduct, source);
    };

    return (
        <div>
            <Grid data={products} navigatable={true} style={{ height: '420px' }}>
                <GridToolbar>
                    <Button onClick={insert} type="button">
                        Add New
                    </Button>
                </GridToolbar>
                <Column field="ProductID" title="Id" width="50px" />
                <Column field="ProductName" title="Product Name" />
                <Column field="UnitsInStock" title="Units In Stock" />
                <Column field="Discontinued" />
                <Column
                    title="Edit"
                    cells={{ data: (props) => <CustomCell {...props} edit={edit} remove={remove} /> }}
                />
            </Grid>
            {productInEdit && <DialogContainer dataItem={productInEdit} save={save} cancel={cancel} />}
        </div>
    );
};

export default App;
