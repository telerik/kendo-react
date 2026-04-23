import * as React from 'react';
import { RadioButton, RadioButtonChangeEvent, Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [selectedValue, setSelectedValue] = React.useState('doctor');
    const [disabled, setDisabled] = React.useState(false);

    const handleChange = React.useCallback(
        (e: RadioButtonChangeEvent) => {
            setSelectedValue(e.value);
        },
        [setSelectedValue]
    );

    const handleSwitchChange = (event: SwitchChangeEvent) => {
        setDisabled(event.value);
    };

    return (
        <div className={'k-d-flex k-flex-col k-align-items-center k-gap-lg'}>
            <div className={'k-d-flex k-align-items-center k-gap-md k-mt-lg'}>
                <Label>
                    {'Disabled'}&nbsp;&nbsp;
                    <Switch onChange={handleSwitchChange} />
                </Label>
            </div>
            <div>
                <RadioButton
                    name={'profession'}
                    value={'doctor'}
                    checked={selectedValue === 'doctor'}
                    onChange={handleChange}
                    disabled={disabled}
                    label={'Doctor'}
                />
                <br />
                <RadioButton
                    name={'profession'}
                    value={'engineer'}
                    checked={selectedValue === 'engineer'}
                    onChange={handleChange}
                    disabled={disabled}
                    label={'Engineer'}
                />
                <br />
                <RadioButton
                    name={'profession'}
                    value={'teacher'}
                    checked={selectedValue === 'teacher'}
                    onChange={handleChange}
                    disabled={disabled}
                    label={'Teacher'}
                />
            </div>
        </div>
    );
};

export default App;
