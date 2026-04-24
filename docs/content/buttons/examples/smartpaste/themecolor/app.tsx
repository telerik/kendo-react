import * as React from 'react';
import { SmartPasteButton } from '@progress/kendo-react-buttons';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import './styles.css';

const App = () => {
    const [isDisabled, setIsDisabled] = React.useState(false);

    const handleSwitchChange = (event: SwitchChangeEvent) => {
        setIsDisabled(event.value);
    };

    return (
        <div className="demo-container">
            <div className="toggle-container">
                <Label>
                    Disabled&nbsp;&nbsp;
                    <Switch checked={isDisabled} onChange={handleSwitchChange} />
                </Label>
            </div>
            <div className="button-container">
                <SmartPasteButton themeColor="base" disabled={isDisabled}>
                    Base
                </SmartPasteButton>
                <SmartPasteButton themeColor="primary" disabled={isDisabled}>
                    Primary
                </SmartPasteButton>
                <SmartPasteButton themeColor="secondary" disabled={isDisabled}>
                    Secondary
                </SmartPasteButton>
                <SmartPasteButton themeColor="tertiary" disabled={isDisabled}>
                    Tertiary
                </SmartPasteButton>
                <SmartPasteButton themeColor="info" disabled={isDisabled}>
                    Info
                </SmartPasteButton>
                <SmartPasteButton themeColor="success" disabled={isDisabled}>
                    Success
                </SmartPasteButton>
                <SmartPasteButton themeColor="warning" disabled={isDisabled}>
                    Warning
                </SmartPasteButton>
                <SmartPasteButton themeColor="error" disabled={isDisabled}>
                    Error
                </SmartPasteButton>
                <SmartPasteButton themeColor="dark" disabled={isDisabled}>
                    Dark
                </SmartPasteButton>
                <SmartPasteButton themeColor="light" disabled={isDisabled}>
                    Light
                </SmartPasteButton>
                <SmartPasteButton themeColor="inverse" disabled={isDisabled}>
                    Inverse
                </SmartPasteButton>
            </div>
        </div>
    );
};

export default App;
