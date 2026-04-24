import * as React from 'react';
import { Input, NumericTextBox } from '@progress/kendo-react-inputs';
import { Field, FieldRenderProps } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { GridCustomCellProps } from '@progress/kendo-react-grid';

import { FormGridEditContext } from './app';

const FORM_DATA_INDEX = 'formDataIndex';

const requiredValidator = (value) => (value ? '' : 'The field is required');

const DisplayValue = (fieldRenderProps: FieldRenderProps) => {
    return <>{fieldRenderProps.value}</>;
};

const TextInputWithValidation = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const minValidator = (value) => (value >= 0 ? '' : 'Minimum units 0');

const NumericTextBoxWithValidation = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    const anchor: any = React.useRef(null);
    return (
        <div>
            <NumericTextBox {...others} ref={anchor} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

export const NumberCell = (props: GridCustomCellProps) => {
    const { parentField, editIndex } = React.useContext(FormGridEditContext);
    const isInEdit = props.dataItem[FORM_DATA_INDEX] === editIndex;

    return (
        <td {...props.tdProps}>
            <Field
                component={isInEdit ? NumericTextBoxWithValidation : DisplayValue}
                name={`${parentField}[${props.dataItem[FORM_DATA_INDEX]}].${props.field}`}
                validator={minValidator}
            />
        </td>
    );
};

export const NameCell = (props: GridCustomCellProps) => {
    const { parentField, editIndex } = React.useContext(FormGridEditContext);
    const isInEdit = props.dataItem[FORM_DATA_INDEX] === editIndex;

    return (
        <td {...props.tdProps}>
            <Field
                component={isInEdit ? TextInputWithValidation : DisplayValue}
                name={`${parentField}[${props.dataItem[FORM_DATA_INDEX]}].${props.field}`}
                validator={requiredValidator}
            />
        </td>
    );
};
