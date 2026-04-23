import * as React from 'react';
import { RadioButton, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';
import { Switch } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [labelPlacement, setLabelPlacement] = React.useState<'before' | 'after'>('before');
    const [selectedValue, setSelectedValue] = React.useState<string>('standard');

    const handleSwitchChange = () => {
        setLabelPlacement((prev) => (prev === 'before' ? 'after' : 'before'));
    };

    const handleChange = (e: RadioButtonChangeEvent) => {
        setSelectedValue(e.value);
    };

    return (
        <div className="k-d-flex k-justify-content-center k-align-items-center">
            <div>
                <Label>
                    Toggle Label Placement&nbsp;&nbsp;
                    <Switch checked={labelPlacement === 'after'} onChange={handleSwitchChange} />
                </Label>

                <div style={{ marginTop: '10px' }}>
                    <br />
                    <RadioButton
                        name="delivery"
                        value="standard"
                        checked={selectedValue === 'standard'}
                        label={<span style={{ marginRight: '8px' }}>Standard Shipping (3-5 Days)</span>}
                        onChange={handleChange}
                        labelPlacement={labelPlacement}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
