import * as React from 'react';
import { RadioGroup, Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const options = [
    { label: 'Remote', value: 'Remote' },
    { label: 'Hybrid', value: 'Hybrid' },
    { label: 'Office', value: 'Office' }
];

const App = () => {
    const [selectedValue, setSelectedValue] = React.useState('Remote');
    const [layout, setLayout] = React.useState<'horizontal' | 'vertical'>('horizontal');

    const handleSwitchChange = (event: SwitchChangeEvent) => {
        setLayout(layout === 'horizontal' ? 'vertical' : 'horizontal');
    };

    return (
        <div className="k-d-flex k-justify-content-center k-align-items-center">
            <div>
                <Label>
                    Change Layout&nbsp;&nbsp;
                    <Switch checked={layout === 'horizontal'} onChange={handleSwitchChange} />
                </Label>
                <br />
                <br />
                <div className="k-form-field-wrap">
                    <RadioGroup
                        data={options}
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.value)}
                        layout={layout}
                    />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default App;
