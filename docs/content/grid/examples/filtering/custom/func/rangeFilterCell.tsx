import * as React from 'react';
import { NumericTextBox, NumericTextBoxChangeEvent } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { filterClearIcon } from '@progress/kendo-svg-icons';

export const RangeFilterCell = (props) => {
    let minTextBox;
    let maxTextBox;

    const inRange = (current, { min, max }) => (min === null || current >= min) && (max === null || current <= max);

    const onChange = (event: NumericTextBoxChangeEvent) => {
        props.onChange({
            value: { min: minTextBox.value, max: maxTextBox.value },
            operator: inRange,
            syntheticEvent: event.syntheticEvent
        });
    };

    const onClearButtonClick = (event) => {
        event.preventDefault();
        props.onChange({
            value: null,
            operator: '',
            syntheticEvent: event
        });
    };

    const value = props.value || null;

    return (
        <div>
            Min:
            <span style={{ margin: '0 16px 0 2px' }}>
                <NumericTextBox
                    width="70px"
                    value={value && value.min}
                    ref={(numeric) => {
                        minTextBox = numeric;
                    }}
                    onChange={onChange}
                />
            </span>
            Max:
            <span style={{ margin: '0 2px 0 4px' }}>
                <NumericTextBox
                    width="70px"
                    value={value && value.max}
                    ref={(numeric) => {
                        maxTextBox = numeric;
                    }}
                    onChange={onChange}
                />
            </span>
            <Button
                svgIcon={filterClearIcon}
                title="Clear"
                disabled={!value}
                onClick={onClearButtonClick}
                type="button"
            ></Button>
        </div>
    );
};
