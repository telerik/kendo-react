import * as React from 'react';

import { DropDownButton, DropDownButtonItem } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';

import './styles.css';

const App = () => {
    const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
    const handleSwitchChange = (event: SwitchChangeEvent) => {
        setIsDisabled(event.value);
    };

    return (
        <div>
            <Label>
                Disabled&nbsp;&nbsp;
                <Switch checked={isDisabled} onChange={handleSwitchChange} />
            </Label>
            <div className="button-container">
                <DropDownButton themeColor="base" disabled={isDisabled} text="Base">
                    <DropDownButtonItem text="Item 1" />
                    <DropDownButtonItem text="Item 2" />
                </DropDownButton>
                <DropDownButton themeColor="primary" disabled={isDisabled} text="Primary">
                    <DropDownButtonItem text="Item 1" />
                    <DropDownButtonItem text="Item 2" />
                </DropDownButton>
                <DropDownButton themeColor="secondary" disabled={isDisabled} text="Secondary">
                    <DropDownButtonItem text="Item 1" />
                    <DropDownButtonItem text="Item 2" />
                </DropDownButton>
                <DropDownButton themeColor="tertiary" disabled={isDisabled} text="Tertiary">
                    <DropDownButtonItem text="Item 1" />
                    <DropDownButtonItem text="Item 2" />
                </DropDownButton>
                <DropDownButton themeColor="info" disabled={isDisabled} text="Info">
                    <DropDownButtonItem text="Item 1" />
                    <DropDownButtonItem text="Item 2" />
                </DropDownButton>
                <DropDownButton themeColor="success" disabled={isDisabled} text="Success">
                    <DropDownButtonItem text="Item 1" />
                    <DropDownButtonItem text="Item 2" />
                </DropDownButton>
                <DropDownButton themeColor="warning" disabled={isDisabled} text="Warning">
                    <DropDownButtonItem text="Item 1" />
                    <DropDownButtonItem text="Item 2" />
                </DropDownButton>
                <DropDownButton themeColor="error" disabled={isDisabled} text="Error">
                    <DropDownButtonItem text="Item 1" />
                    <DropDownButtonItem text="Item 2" />
                </DropDownButton>
                <DropDownButton themeColor="dark" disabled={isDisabled} text="Dark">
                    <DropDownButtonItem text="Item 1" />
                    <DropDownButtonItem text="Item 2" />
                </DropDownButton>
                <DropDownButton themeColor="light" disabled={isDisabled} text="Light">
                    <DropDownButtonItem text="Item 1" />
                    <DropDownButtonItem text="Item 2" />
                </DropDownButton>
                <DropDownButton themeColor="inverse" disabled={isDisabled} text="Inverse">
                    <DropDownButtonItem text="Item 1" />
                    <DropDownButtonItem text="Item 2" />
                </DropDownButton>
            </div>
            <br />
        </div>
    );
};

export default App;
