import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridItemChangeEvent,
    GridCustomCellProps
} from '@progress/kendo-react-grid';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import { Product } from './gd-product';
import { nameValidator, unitsValidator, orderDateValidator } from './validators';
import sampleProducts from './gd-sample-products';
import { Popup } from '@progress/kendo-react-popup';
import { Button } from '@progress/kendo-react-buttons';
import { Error } from '@progress/kendo-react-labels';

interface CustomCommandCellProps extends GridCustomCellProps {
    save: (dataItem: Product) => void;
    cancel: (dataItem: Product) => void;
    remove: (dataItem: Product) => void;
    enterEdit: (dataItem: Product) => void;
}

const CustomCell = (props: GridCustomCellProps) => {
    const [focused, setFocused] = React.useState(false);
    const anchor = React.useRef<HTMLTableCellElement | null>(null);
    const isValid = props.dataItem[props.field + 'Valid'];
    return props.tdProps ? (
        <>
            <td
                ref={anchor}
                {...props.tdProps}
                style={{
                    ...props.tdProps.style
                }}
                onFocus={() => {
                    setFocused(true);
                }}
                onBlur={() => {
                    setFocused(false);
                }}
            >
                {React.Children.toArray(props.children).map((child: any) => {
                    return React.cloneElement(child, {
                        className: child.props.className + (isValid ? ' k-input-solid k-invalid' : '')
                    });
                })}
            </td>
            {props.dataItem.inEdit && focused && (
                <Popup anchor={anchor.current} show={!!isValid} popupClass={'popup-content'}>
                    <Error>{isValid}</Error>
                </Popup>
            )}
        </>
    ) : null;
};

const MyNumericCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} />;

const MyBooleanCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} />;

const MyDateCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} />;

const CommandCell = (props: CustomCommandCellProps) => {
    const dataItem = props.dataItem;
    const inEdit = props.isInEdit;
    const productID = dataItem.ProductID;
    return (
        <td>
            <Button
                className={inEdit ? 'k-grid-save-command' : 'k-grid-edit-command'}
                themeColor="primary"
                disabled={!!dataItem.ProductNameValid || !!dataItem.UnitsInStockValid || !!dataItem.FirstOrderedOnValid}
                onClick={(_) => {
                    const action = inEdit ? props.save : props.enterEdit;
                    action(dataItem as Product);
                }}
            >
                {inEdit ? (productID ? 'Update' : 'Add') : 'Edit'}
            </Button>
            &nbsp;
            <Button
                className={inEdit ? 'k-grid-cancel-command' : 'k-grid-remove-command'}
                onClick={(_) => {
                    if (inEdit) {
                        props.cancel(dataItem as Product);
                    } else {
                        confirm('Confirm deleting ' + dataItem.ProductName) && props.remove(dataItem as Product);
                    }
                }}
            >
                {inEdit ? (productID ? 'Cancel' : 'Discard changes') : 'Remove'}
            </Button>
        </td>
    );
};

const App = () => {
    const [data, setData] = React.useState<Product[]>(sampleProducts.slice(0));
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    const enterInsert = () => {
        const dataItem: Product = {
            ProductID: data.length + 1,
            ProductNameValid: nameValidator(''),
            UnitsInStockValid: unitsValidator(null),
            FirstOrderedOnValid: orderDateValidator('')
        };
        const newproducts: Product[] = data.slice();
        newproducts.unshift(dataItem);
        update(newproducts, dataItem);
        setData(newproducts);
        setEdit((edit) => ({ ...edit, [dataItem.ProductID!]: true }));
    };

    const enterEdit = (dataItem: Product): void => {
        setEdit((edit) => ({ ...edit, [dataItem.ProductID!]: true }));
    };

    const save = (dataItem: Product): void => {
        dataItem.ProductID = update(sampleProducts, dataItem).ProductID;
        setData(data.slice());
        setEdit((edit) => ({ ...edit, [dataItem.ProductID!]: false }));
    };

    const cancel = (dataItem: Product): void => {
        if (dataItem.ProductID) {
            let originalItem = sampleProducts.find((p) => p.ProductID === dataItem.ProductID);
            update(data, originalItem);
        } else {
            update(data, dataItem, !dataItem.ProductID);
        }
        setData(data.slice());
        setEdit((edit) => ({ ...edit, [dataItem.ProductID!]: false }));
    };

    const remove = (dataItem: Product): void => {
        (dataItem as any).inEdit = undefined;
        update(data, dataItem, true);
        update(sampleProducts, dataItem, true);
        setData(data.slice());
        setEdit((edit) => {
            delete edit[dataItem.ProductID!];
            return { ...edit };
        });
    };

    const itemChange = (event: GridItemChangeEvent): void => {
        const value = event.value;
        const name = event.field;
        if (!name) {
            return;
        }
        const updatedData = data.slice();
        const item = update(updatedData, event.dataItem);
        item[name] = value;
        if (name === 'ProductName') {
            item[name + 'Valid'] = nameValidator(value);
        }
        if (name === 'UnitsInStock') {
            item[name + 'Valid'] = unitsValidator(value);
        }
        if (name === 'FirstOrderedOn') {
            item[name + 'Valid'] = orderDateValidator(value);
        }
        setData(updatedData);
    };

    const update = (data: any[], item: any, remove?: boolean): any => {
        let updated;
        let index = data.findIndex((p) => p === item || (item.ProductID && p.ProductID === item.ProductID));
        if (index >= 0) {
            updated = Object.assign({}, item);
            data[index] = updated;
        } else {
            let id = 1;
            data.forEach((p) => {
                id = Math.max(p.ProductID + 1, id);
            });
            updated = Object.assign({}, item, { ProductID: id });
            data.unshift(updated);
            index = 0;
        }

        if (remove) {
            data = data.splice(index, 1);
        }
        return data[index];
    };

    console.log(edit);

    return (
        <div>
            <Grid
                style={{ height: '500px' }}
                data={data}
                onItemChange={itemChange}
                dataItemKey="ProductID"
                edit={edit}
                editable={{ mode: 'inline' }}
                cells={{
                    edit: {
                        text: CustomCell,
                        numeric: MyNumericCustomCell,
                        boolean: MyBooleanCustomCell,
                        date: MyDateCustomCell
                    }
                }}
            >
                <GridToolbar>
                    <Button title="Add new" onClick={enterInsert}>
                        Add new
                    </Button>

                    {data.filter((p) => p.inEdit).length > 0 && (
                        <Button title="Cancel current changes" onClick={(_) => setData(sampleProducts.slice())}>
                            Cancel current changes
                        </Button>
                    )}
                </GridToolbar>
                <Column field="ProductID" title="ID" editable={false} width={80} />
                <Column field="ProductName" title="Product Name" editor="text" />
                <Column field="UnitsInStock" title="Units In Stock" editor="numeric" width={150} />
                <Column field="FirstOrderedOn" title="Order Date" editor="date" format="{0:d}" width={200} />
                <Column
                    cells={{
                        data: (props) => (
                            <CommandCell {...props} enterEdit={enterEdit} save={save} cancel={cancel} remove={remove} />
                        ),
                        edit: {
                            text: (props) => (
                                <CommandCell
                                    {...props}
                                    enterEdit={enterEdit}
                                    save={save}
                                    cancel={cancel}
                                    remove={remove}
                                />
                            )
                        }
                    }}
                    width="200px"
                />
            </Grid>
        </div>
    );
};

export default App;
