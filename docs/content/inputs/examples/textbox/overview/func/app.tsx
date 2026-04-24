import * as React from 'react';
import { TextBox, TextBoxChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { Switch } from '@progress/kendo-react-inputs';

const App = () => {
    const [disabled, setDisabled] = React.useState(false);

    const [flatValue, setFlatValue] = React.useState<string>('');
    const [solidValue, setSolidValue] = React.useState<string>('');
    const [outlineValue, setOutlineValue] = React.useState<string>('');

    const handleFlatChange = (event: TextBoxChangeEvent) => {
        setFlatValue(event.target.value as string);
    };

    const handleSolidChange = (event: TextBoxChangeEvent) => {
        setSolidValue(event.target.value as string);
    };

    const handleOutlineChange = (event: TextBoxChangeEvent) => {
        setOutlineValue(event.target.value as string);
    };

    const handleSwitchChange = (event: any) => {
        setDisabled(event.value);
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
                <Label>
                    Disabled&nbsp;&nbsp;
                    <Switch onChange={handleSwitchChange} />
                </Label>
            </div>
            <br />
            <div style={{ display: 'flex', gap: '10px' }}>
                <TextBox
                    fillMode="flat"
                    disabled={disabled}
                    style={{ width: 300 }}
                    placeholder="Flat"
                    value={flatValue}
                    onChange={handleFlatChange}
                />
                <TextBox
                    fillMode="solid"
                    disabled={disabled}
                    style={{ width: 300 }}
                    placeholder="Solid"
                    value={solidValue}
                    onChange={handleSolidChange}
                />
                <TextBox
                    fillMode="outline"
                    disabled={disabled}
                    style={{ width: 300 }}
                    placeholder="Outline"
                    value={outlineValue}
                    onChange={handleOutlineChange}
                />
            </div>
        </div>
    );
};

export default App;
