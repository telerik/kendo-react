import * as React from 'react';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { DateTimePicker, DateTimePickerChangeEvent } from '@progress/kendo-react-dateinputs';
import { GridColumnMenuFilterUIProps, GridFilterCellProps, GridFilterOperator } from '@progress/kendo-react-grid';

const IsUnaryFilter = (operator: string) => {
    return ['isnull', 'isnotnull', 'isempty', 'isnotempty'].includes(operator);
};

const cellInputChange = (value: Date | null, e: React.SyntheticEvent<any>, props: GridFilterCellProps) => {
    const defaultOperator = getDefaultOperator(props.operators);
    let operator = props.operator as string;

    if (!operator || IsUnaryFilter(operator)) {
        operator = defaultOperator;
    }
    if (value === null && operator === defaultOperator) {
        operator = '';
    }

    props.onChange({ value, operator, syntheticEvent: e });
};

const getDefaultOperator = (filterOperators: GridFilterOperator[]): string => {
    return filterOperators.length > 0 ? filterOperators[0].operator : '';
};

const cellOperatorChange = (event, currentValue, onChange) => {
    let value = currentValue;
    const item = event.target.value;
    if (!event.target.state?.opened) {
        return;
    }
    if (IsUnaryFilter(item.operator)) {
        value = null;
    }
    if (currentValue === null && !IsUnaryFilter(item.operator)) {
        value = undefined;
    }
    onChange({
        value,
        operator: item.operator,
        syntheticEvent: event.syntheticEvent
    });
};

const GridColumnMenuFilterCell = (props: GridFilterCellProps) => {
    const inputChange = (event: DateTimePickerChangeEvent) => {
        cellInputChange(event.value, event.syntheticEvent, props);
    };
    const operatorChange = (event: DropDownListChangeEvent) => {
        cellOperatorChange(event, props.value, props.onChange);
    };
    const renderOperatorEditor = () => {
        const { operators, operator } = props;
        const value = operators.find((item) => item.operator === operator) || null;
        return <DropDownList value={value} onChange={operatorChange} data={operators} textField="text" />;
    };
    return (
        <>
            {renderOperatorEditor()}
            <DateTimePicker value={props.value || null} onChange={inputChange} />
        </>
    );
};

export const CustomFilterUI = (props: GridColumnMenuFilterUIProps) => {
    const { firstFilterProps, hideSecondFilter, secondFilterProps, logicData, logicValue, onLogicChange } = props;
    return (
        <>
            <GridColumnMenuFilterCell {...firstFilterProps} />
            {!hideSecondFilter && (
                <>
                    <DropDownList
                        data={logicData}
                        value={logicValue}
                        onChange={onLogicChange}
                        className="k-filter-and"
                        textField="text"
                    />
                    <GridColumnMenuFilterCell {...secondFilterProps} />
                </>
            )}
        </>
    );
};
