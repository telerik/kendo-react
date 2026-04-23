import * as React from 'react';
import { Form, Field, FieldRenderProps } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import {
    Grid,
    GridColumn,
    GridToolbar,
    GridCustomCellProps,
    GridCustomRowProps
} from '@progress/kendo-react-grid';
import sampleProducts from './gd-sample-products';
import { Button } from '@progress/kendo-react-buttons';

const DATA_ITEM_KEY = 'ProductID';

const requiredValidator = (value: string) => (value ? '' : 'The name is required');

const TextInputWithValidation = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Input {...others} />
            {visited && validationMessage && (
                <div role="alert" className="k-form-error k-text-start">
                    {validationMessage}
                </div>
            )}
        </div>
    );
};

const FormSubmitContext = React.createContext<(event: React.SyntheticEvent<any, Event>) => void>(() => undefined);
const GridEditContext = React.createContext<{
    onDataAction: (options: { operation: 'save' | 'remove' | 'add'; dataItem?: any }) => void;
    setEdit: (edit: EditDescriptor) => void;
    edit: EditDescriptor;
}>({} as any);

const GridInlineFormRow = (props: { children: any; dataItem: any; isInEdit: boolean }) => {
    const { onDataAction } = React.useContext(GridEditContext);

    const onSubmit = React.useCallback(
        (dataItem) => {
            onDataAction({ operation: 'save', dataItem });
        },
        [onDataAction]
    );

    if (props.isInEdit) {
        return (
            <Form
                key={JSON.stringify(props.dataItem)}
                initialValues={props.dataItem}
                onSubmit={onSubmit}
                render={(formRenderProps) => {
                    return (
                        <FormSubmitContext.Provider value={formRenderProps.onSubmit}>
                            {props.children}
                        </FormSubmitContext.Provider>
                    );
                }}
            />
        );
    }
    return props.children;
};
const NameCell = (props: GridCustomCellProps) => {
    return <td {...props.tdProps}>{props.dataItem[props.field || '']}</td>;
};
const NameEditCell = (props: GridCustomCellProps) => {
    return (
        <td {...props.tdProps}>
            <Field component={TextInputWithValidation} name={`${props.field}`} validator={requiredValidator} />
        </td>
    );
};
const CommandCell = (props: GridCustomCellProps) => {
    const onSubmit = React.useContext(FormSubmitContext);
    const { onDataAction, setEdit } = React.useContext(GridEditContext);
    const isInEdit = props.isInEdit;
    const isNewItem = props.dataItem[DATA_ITEM_KEY] === null;
    const onSaveClick = React.useCallback(
        (e) => {
            e.preventDefault();
            onSubmit(e);
        },
        [onSubmit]
    );

    const onRemoveClick = React.useCallback(
        (e) => {
            e.preventDefault();
            onDataAction({
                operation: 'remove',
                dataItem: props.dataItem
            });
        },
        [onDataAction, props.dataItem]
    );
    const onEditClick = React.useCallback((e) => {
        e.preventDefault();
        setEdit({ [props.dataItem[DATA_ITEM_KEY]]: true });
    }, []);

    const buttonText = isInEdit ? (isNewItem ? 'Discard' : 'Save') : 'Edit';

    const buttonClassName = isInEdit
        ? isNewItem
            ? 'k-grid-save-command'
            : 'k-grid-cancel-command'
        : 'k-grid-edit-command';

    const buttonThemeColor = buttonText === 'Edit' ? 'primary' : 'base';

    return (
        <td {...props.tdProps} className="k-command-cell">
            <Button
                onClick={isInEdit ? onSaveClick : onEditClick}
                className={buttonClassName}
                themeColor={buttonThemeColor}
            >
                {buttonText}
            </Button>
            {!isInEdit && (
                <Button onClick={onRemoveClick} className="k-grid-remove-command" themeColor="base">
                    Remove
                </Button>
            )}
        </td>
    );
};

const CustomRow = (props: GridCustomRowProps) => {
    return (
        <GridInlineFormRow dataItem={props.dataItem} isInEdit={props.isInEdit}>
            <tr {...props.trProps}>{props.children}</tr>
        </GridInlineFormRow>
    );
};

export const App = () => {
    const [data, setData] = React.useState(sampleProducts);
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    const onDataAction = React.useCallback((event: { operation: 'save' | 'remove' | 'add'; dataItem?: any }) => {
        switch (event.operation) {
            case 'remove':
                setData((data) => data.filter((item) => item[DATA_ITEM_KEY] !== event.dataItem[DATA_ITEM_KEY]));
                break;
            case 'save':
                setData((data) =>
                    data.map((item) => (item[DATA_ITEM_KEY] === event.dataItem[DATA_ITEM_KEY] ? event.dataItem : item))
                );
                setEdit({});
                break;
            case 'add': {
                setData((data) => [event.dataItem, ...data]);
                setEdit({ [event.dataItem[DATA_ITEM_KEY]]: true });
                break;
            }
            default:
        }
    }, []);

    const onAddClick = React.useCallback(() => {
        onDataAction({
            operation: 'add',
            dataItem: {
                ProductID: data.length + 1,
                ProductName: '',
                UnitPrice: 0,
                Discontinued: false
            }
        });
    }, []);

    return (
        <GridEditContext.Provider value={{ onDataAction, edit, setEdit }}>
            <Grid
                data={data}
                dataItemKey={DATA_ITEM_KEY}
                edit={edit}
                editable={{ mode: 'inline' }}
                rows={{ data: CustomRow }}
            >
                <GridToolbar>
                    <Button title="Add new" themeColor={'primary'} onClick={onAddClick} type="button">
                        Add new
                    </Button>
                </GridToolbar>
                <GridColumn
                    title="Name"
                    field="ProductName"
                    cells={{
                        data: NameCell,
                        edit: { text: NameEditCell }
                    }}
                />
                <GridColumn title="Command" cells={{ data: CommandCell }} />
            </Grid>
        </GridEditContext.Provider>
    );
};

export default App;
