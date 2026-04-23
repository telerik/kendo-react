import * as React from 'react';
import {
    Form,
    Field,
    FieldArray,
    FormElement,
    FieldArrayRenderProps,
    FormRenderProps
} from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { Grid, GridColumn, GridToolbar, GridCustomCellProps } from '@progress/kendo-react-grid';

const arrayLengthValidator = (value: any) => (value && value.length ? '' : 'Please add at least one record.');

const ParentFieldContext = React.createContext('');

const FORM_DATA_INDEX = 'formDataIndex';

const nameCell = (props: GridCustomCellProps) => {
    const parentField = React.useContext(ParentFieldContext);

    return (
        <td {...props.tdProps}>
            <Field component={Input} name={`${parentField}[${props.dataItem[FORM_DATA_INDEX]}].${props.field}`} />
        </td>
    );
};

const commandCell = (onRemove) => (props) => {
    const onClick = React.useCallback(
        (e) => {
            e.preventDefault();
            onRemove(props);
        },
        [props]
    );
    return (
        <td {...props.tdProps}>
            <Button type="button" onClick={onClick} className="k-grid-remove-command">
                Remove
            </Button>
        </td>
    );
};

const FormGrid = (fieldArrayRenderProps: FieldArrayRenderProps) => {
    const { validationMessage, visited, name } = fieldArrayRenderProps;
    const onAdd = React.useCallback(
        (e) => {
            e.preventDefault();
            fieldArrayRenderProps.onUnshift({ value: { name: '' } });
        },
        [fieldArrayRenderProps]
    );
    const onRemove = React.useCallback(
        (cellProps) => fieldArrayRenderProps.onRemove({ index: cellProps.dataItem[FORM_DATA_INDEX] }),
        [fieldArrayRenderProps]
    );

    // In case the data is processed before passing it to the Grid (e.g.: paging, filtering, sorting)
    // we need to add custom index prop to make sure the Field component is always bind to the correct dataitem
    const dataWithIndexes = fieldArrayRenderProps.value.map((item, index) => {
        return {
            ...item,
            [FORM_DATA_INDEX]: index
        };
    });

    return (
        <ParentFieldContext.Provider value={name}>
            {visited && validationMessage && <Error>{validationMessage}</Error>}
            <Grid data={dataWithIndexes}>
                <GridToolbar>
                    <Button type="button" title="Add new" themeColor={'primary'} onClick={onAdd}>
                        Add new
                    </Button>
                </GridToolbar>
                <GridColumn field="name" title="Name" cells={{ data: nameCell }} />
                <GridColumn cells={{ data: commandCell(onRemove) }} width="240px" />
            </Grid>
        </ParentFieldContext.Provider>
    );
};

export const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem));
    return (
        <Form
            initialValues={{
                users: []
            }}
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement>
                    <FieldArray name="users" component={FormGrid} validator={arrayLengthValidator} />
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
