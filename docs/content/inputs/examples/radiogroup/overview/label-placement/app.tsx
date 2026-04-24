import * as React from 'react';
import { RadioGroup, Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const options = [
    { label: 'Car (Drive yourself)', value: 'car' },
    { label: 'Public Transport (Bus, Train, Metro)', value: 'public' },
    { label: 'Cycling (Eco-friendly option)', value: 'cycling' }
];

const App = () => {
    const [selectedValue, setSelectedValue] = React.useState('car');
    const [labelPlacement, setLabelPlacement] = React.useState<'before' | 'after'>('after');

    const handleSwitchChange = (event: SwitchChangeEvent) => {
        setLabelPlacement(labelPlacement === 'after' ? 'before' : 'after');
    };

    return (
        <div className="k-d-flex k-justify-content-center k-align-items-center">
            <div>
                <Label>
                    Toggle Label Position&nbsp;&nbsp;
                    <Switch checked={labelPlacement === 'after'} onChange={handleSwitchChange} />
                </Label>
                <br />
                <br />
                <div className="k-form-field-wrap">
                    <RadioGroup
                        data={options}
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.value)}
                        layout="vertical"
                        labelPlacement={labelPlacement}
                    />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default App;
