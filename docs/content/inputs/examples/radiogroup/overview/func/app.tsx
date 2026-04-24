import * as React from 'react';
import { RadioGroup } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const data = [
    { label: 'Credit Card', value: 'credit_card' },
    { label: 'PayPal', value: 'paypal' },
    { label: 'Bank Transfer', value: 'bank_transfer' }
];

const App = () => {
    const [selectedValue, setSelectedValue] = React.useState('credit_card');

    const handleChange = React.useCallback(
        (e: { value: string }) => {
            setSelectedValue(e.value);
        },
        [setSelectedValue]
    );

    return (
        <div className="k-d-flex k-justify-content-center k-align-items-center">
            <div>
                <Label className="k-label">Payment Method</Label>
                <div className="k-form-field-wrap">
                    <RadioGroup
                        name="payment"
                        data={data}
                        value={selectedValue}
                        onChange={handleChange}
                        layout="vertical"
                    />
                    <br />
                    <div className="k-form-hint">Secure and fast payment options.</div>
                </div>
            </div>
        </div>
    );
};

export default App;
