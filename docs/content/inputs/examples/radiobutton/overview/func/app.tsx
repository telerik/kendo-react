import * as React from 'react';
import { RadioButton, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [selectedValue, setSelectedValue] = React.useState('credit_card');

    const handleChange = React.useCallback(
        (e: RadioButtonChangeEvent) => {
            setSelectedValue(e.value);
        },
        [setSelectedValue]
    );

    return (
        <div className="k-d-flex k-justify-content-center k-align-items-center">
            <div>
                <Label>Payment Method</Label>
                <br />
                <RadioButton
                    name={'payment'}
                    value={'credit_card'}
                    checked={selectedValue === 'credit_card'}
                    label={'Credit Card'}
                    onChange={handleChange}
                />
                <br />
                <RadioButton
                    name={'payment'}
                    value={'paypal'}
                    checked={selectedValue === 'paypal'}
                    label={'PayPal'}
                    onChange={handleChange}
                />
                <br />
                <RadioButton
                    name={'payment'}
                    value={'bank_transfer'}
                    checked={selectedValue === 'bank_transfer'}
                    label={'Bank Transfer'}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default App;
