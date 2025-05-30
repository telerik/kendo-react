import React from 'react';
import { Field } from 'redux-form';
import { Input, NumericTextBox, Switch } from '@progress/kendo-react-inputs';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';

const kendoHOC = (type, { input: { onChange, onBlur, value, ...restInput }, meta, label, ...rest }) => {
    const Type = type;

    return <span className="k-form-field">
        <span>{label}</span>
        <Type
            {...restInput}
            {...rest}
            checked={value}
            value={value}
            onChange={(event) => {
                onChange(event.value || event.target.value);
            }}
            onBlur={(event) => onBlur(event.value)}
        />
        {meta.error && meta.touched && <span className="k-required">{meta.error}</span>}
    </span>;
};

const KendoInput = (options) => (kendoHOC(Input, options));
const KendoNumericTextBox = (options) => (kendoHOC(NumericTextBox, options));
const KendoDatePicker = (options) => (kendoHOC(DatePicker, options));
const KendoDropDown = (options) => (kendoHOC(DropDownList, options));
const KendoSwitch = (options) => (kendoHOC(Switch, options));

const editorMap = {
    'input': KendoInput,
    'numeric': KendoNumericTextBox,
    'date': KendoDatePicker,
    'dropdownlist': KendoDropDown,
    'boolean': KendoSwitch
};
// Temporary, until the Grid start suppling index
const INDEXFIELD = 'index';

const CellEditor = (cellInfo, parentFieldName, columnOptions = {}) => {
    const value = cellInfo.dataItem[cellInfo.field];
    const { editorType, editorOptions } = columnOptions;

    if (!columnOptions.editable) {
        return (
            <td> {
                !value ? '' : value.toString()}
            </td>
        );
    }

    return <td>
        <Field
            name={`${parentFieldName}[${cellInfo.dataItem[INDEXFIELD]}].${cellInfo.field}`}
            component={editorMap[editorType] || KendoInput}
            {...editorOptions}
        />
    </td>;
};

export {
    KendoInput,
    KendoNumericTextBox,
    KendoDatePicker,
    KendoDropDown,
    KendoSwitch,
    CellEditor,
    INDEXFIELD
};