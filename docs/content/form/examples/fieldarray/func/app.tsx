import * as React from 'react';

import { Form, FieldArray, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';

import { Error } from '@progress/kendo-react-labels';

import { clone } from '@progress/kendo-react-common';
import { Grid, GridCustomCellProps, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { sampleProducts } from './shared-fm-sample-products';

import { NumberCell, NameCell } from './editors';

// Validate the entire Form
const arrayLengthValidator = (value) => (value && value.length ? '' : 'Please add at least one record.');

// Create React.Context to pass props to the Form Field components from the main component
export const FormGridEditContext = React.createContext<{
    onRemove: (dataItem: any) => void;
    onEdit: (dataItem: any, isNew: boolean) => void;
    onSave: () => void;
    onCancel: () => void;
    editIndex: number | undefined;
    parentField: string;
}>({} as any);

const FORM_DATA_INDEX = 'formDataIndex';
const DATA_ITEM_KEY = 'ProductID';

// Add a command cell to Edit, Update, Cancel and Delete an item
const CommandCell = (props: GridCustomCellProps) => {
    const { onRemove, onEdit, onSave, onCancel, editIndex } = React.useContext(FormGridEditContext);
    const isInEdit = props.dataItem[FORM_DATA_INDEX] === editIndex;
    const isNewItem = !props.dataItem[DATA_ITEM_KEY];

    const onRemoveClick = React.useCallback(
        (e) => {
            e.preventDefault();
            onRemove(props.dataItem);
        },
        [props.dataItem, onRemove]
    );

    const onEditClick = React.useCallback(
        (e) => {
            e.preventDefault();
            onEdit(props.dataItem, isNewItem);
        },
        [props.dataItem, onEdit, isNewItem]
    );

    const onSaveClick = React.useCallback(
        (e) => {
            e.preventDefault();
            onSave();
        },
        [onSave]
    );

    const onCancelClick = React.useCallback(
        (e) => {
            e.preventDefault();
            onCancel();
        },
        [onCancel]
    );

    return isInEdit ? (
        <td {...props.tdProps} className="k-command-cell">
            <Button type="button" onClick={onSaveClick} className="k-grid-save-command">
                {isNewItem ? 'Add' : 'Update'}
            </Button>
            <Button type="button" onClick={isNewItem ? onRemoveClick : onCancelClick} className="grid-cancel-command">
                {isNewItem ? 'Discard' : 'Cancel'}
            </Button>
        </td>
    ) : (
        <td {...props.tdProps} className="k-command-cell">
            <Button type="button" themeColor={'primary'} onClick={onEditClick} className="k-grid-edit-command">
                Edit
            </Button>
            <Button type="button" onClick={onRemoveClick} className="k-grid-remove-command">
                Remove
            </Button>
        </td>
    );
};

// Create the Grid that will be used inside the Form
const FormGrid = (fieldArrayRenderProps) => {
    const { validationMessage, visited, name, dataItemKey } = fieldArrayRenderProps;
    const [editIndex, setEditIndex] = React.useState<number | undefined>();
    const editItemCloneRef = React.useRef(undefined);

    // Add a new item to the Form FieldArray that will be shown in the Grid
    const onAdd = React.useCallback(
        (e) => {
            e.preventDefault();
            fieldArrayRenderProps.onUnshift({
                value: {
                    id: '',
                    name: ''
                }
            });

            setEditIndex(0);
        },
        [fieldArrayRenderProps]
    );
    // Remove a new item to the Form FieldArray that will be removed from the Grid
    const onRemove = React.useCallback(
        (dataItem) => {
            fieldArrayRenderProps.onRemove({
                index: dataItem[FORM_DATA_INDEX]
            });

            setEditIndex(undefined);
        },
        [fieldArrayRenderProps]
    );

    // Update an item from the Grid and update the index of the edited item
    const onEdit = React.useCallback((dataItem, isNewItem) => {
        if (!isNewItem) {
            editItemCloneRef.current = clone(dataItem);
        }

        setEditIndex(dataItem[FORM_DATA_INDEX]);
    }, []);

    // Cancel the editing of an item and return its initial value
    const onCancel = React.useCallback(() => {
        if (editItemCloneRef.current) {
            fieldArrayRenderProps.onReplace({
                index: editItemCloneRef.current[FORM_DATA_INDEX],
                value: editItemCloneRef.current
            });
        }

        editItemCloneRef.current = undefined;
        setEditIndex(undefined);
    }, [fieldArrayRenderProps]);

    // Save the changes
    const onSave = React.useCallback(() => {
        console.log(fieldArrayRenderProps);
        setEditIndex(undefined);
    }, [fieldArrayRenderProps]);

    const dataWithIndexes = fieldArrayRenderProps.value.map((item, index) => {
        return { ...item, [FORM_DATA_INDEX]: index };
    });

    return (
        <FormGridEditContext.Provider
            value={{
                onCancel,
                onEdit,
                onRemove,
                onSave,
                editIndex,
                parentField: name
            }}
        >
            {visited && validationMessage && <Error>{validationMessage}</Error>}
            <Grid data={dataWithIndexes} dataItemKey={dataItemKey}>
                <GridToolbar>
                    <Button type="button" title="Add new" themeColor={'primary'} onClick={onAdd}>
                        Add new
                    </Button>
                </GridToolbar>
                <GridColumn field="ProductName" title="Name" cells={{ data: NameCell }} />
                <GridColumn field="UnitsOnOrder" title="Units" cells={{ data: NumberCell }} />
                <GridColumn cells={{ data: CommandCell }} width="240px" />
            </Grid>
        </FormGridEditContext.Provider>
    );
};

export const App = () => {
    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem));

    return (
        <Form
            initialValues={{
                products: sampleProducts.splice(0, 5)
            }}
            onSubmit={handleSubmit}
            render={(formRenderProps) => (
                <FormElement>
                    <FieldArray
                        name="products"
                        dataItemKey={DATA_ITEM_KEY}
                        component={FormGrid}
                        validator={arrayLengthValidator}
                    />
                    <div className="k-form-buttons">
                        <Button type={'submit'} disabled={!formRenderProps.allowSubmit}>
                            Submit
                        </Button>
                    </div>
                </FormElement>
            )}
        />
    );
};

export default App;
