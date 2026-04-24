import React from 'react';
import { AutoComplete, DropDownList } from '@progress/kendo-react-dropdowns';
import products from './shared-kb-products';

interface Operator {
    text: string;
    operator: string;
}

interface FilterProps {
    operators: Operator[];
    onChange: (event: { value: string; operator: string; syntheticEvent: React.SyntheticEvent<any> }) => void;
}

interface CustomFilterUIProps {
    firstFilterProps: FilterProps;
    secondFilterProps: FilterProps;
    logicData: Operator[];
    onLogicChange: (event: React.SyntheticEvent<any>) => void;
}

interface CustomFilterUIState {
    first: Operator;
    second: Operator;
}

export const CustomFilterUI = (props: CustomFilterUIProps) => {
    const operators = props.firstFilterProps.operators;
    const logic = props.logicData;

    const productNames = products.map((item: { ProductName: string }) => item.ProductName);

    const [state, setState] = React.useState<CustomFilterUIState>({
        first: operators[0],
        second: operators[1]
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const value = event.target.value;
        const name = event.target.name;
        const { firstFilterProps, secondFilterProps } = props;

        if (name === 'firstFilter') {
            firstFilterProps.onChange({
                value,
                operator: state.first.operator,
                syntheticEvent: event
            });
        }
        if (name === 'secondFilter') {
            secondFilterProps.onChange({
                value,
                operator: state.second.operator,
                syntheticEvent: event
            });
        }
        if (name === 'logic') {
            props.onLogicChange(event);
        }
    };

    return (
        <div>
            <DropDownList
                data={operators}
                textField="text"
                value={state.first}
                onChange={(event) => setState({ ...state, first: event.target.value })}
            />
            <AutoComplete name="firstFilter" data={[...productNames]} onChange={handleChange} />
            <DropDownList name="logic" data={logic} textField="text" defaultValue={logic[0]} onChange={handleChange} />
            <DropDownList
                data={operators}
                textField="text"
                value={state.second}
                onChange={(event) => setState({ ...state, second: event.target.value })}
            />
            <AutoComplete name="secondFilter" data={[...productNames]} onChange={handleChange} />
        </div>
    );
};
