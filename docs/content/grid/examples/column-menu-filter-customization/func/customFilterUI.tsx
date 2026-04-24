import * as React from 'react';

import { GridColumnMenuFilterUIProps } from '@progress/kendo-react-grid';
import { Label } from '@progress/kendo-react-labels';
import { RadioButton } from '@progress/kendo-react-inputs';

export const CustomFilterUI = (props: GridColumnMenuFilterUIProps) => {
    const onChange = (event) => {
        const value = event.value === 'null' ? null : event.value === 'true';
        const { firstFilterProps } = props;

        firstFilterProps.onChange({
            value,
            operator: 'eq',
            syntheticEvent: event.syntheticEvent
        });
    };

    const { firstFilterProps } = props;
    const value = firstFilterProps.value;

    return (
        <div>
            <RadioButton
                id="bool-null"
                name="boolean"
                value="null"
                checked={value === null}
                onChange={onChange}
                label="&nbsp;not set"
            />
            <br />
            <RadioButton
                id="bool-true"
                name="boolean"
                value="true"
                checked={value === true}
                onChange={onChange}
                label="&nbsp;true"
            />
            <br />
            <RadioButton
                id="bool-false"
                name="boolean"
                value="false"
                checked={value === false}
                onChange={onChange}
                label="&nbsp;false"
            />
        </div>
    );
};
