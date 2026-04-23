import * as React from 'react';

import { SplitButton, SplitButtonItem } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { clipboardHtmlIcon, clipboardMarkdownIcon, clipboardTextIcon } from '@progress/kendo-svg-icons';

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
                <SplitButton themeColor="base" disabled={isDisabled} text="Base">
                    <SplitButtonItem text="Item 1" svgIcon={clipboardTextIcon} />
                    <SplitButtonItem text="Item 2" svgIcon={clipboardHtmlIcon} />
                </SplitButton>
                <SplitButton themeColor="primary" disabled={isDisabled} text="Primary">
                    <SplitButtonItem text="Item 1" svgIcon={clipboardTextIcon} />
                    <SplitButtonItem text="Item 2" svgIcon={clipboardHtmlIcon} />
                </SplitButton>
                <SplitButton themeColor="secondary" disabled={isDisabled} text="Secondary">
                    <SplitButtonItem text="Item 1" svgIcon={clipboardTextIcon} />
                    <SplitButtonItem text="Item 2" svgIcon={clipboardHtmlIcon} />
                </SplitButton>
                <SplitButton themeColor="tertiary" disabled={isDisabled} text="Tertiary">
                    <SplitButtonItem text="Item 1" svgIcon={clipboardTextIcon} />
                    <SplitButtonItem text="Item 2" svgIcon={clipboardHtmlIcon} />
                </SplitButton>
                <SplitButton themeColor="info" disabled={isDisabled} text="Info">
                    <SplitButtonItem text="Item 1" svgIcon={clipboardTextIcon} />
                    <SplitButtonItem text="Item 2" svgIcon={clipboardHtmlIcon} />
                </SplitButton>
                <SplitButton themeColor="success" disabled={isDisabled} text="Success">
                    <SplitButtonItem text="Item 1" svgIcon={clipboardTextIcon} />
                    <SplitButtonItem text="Item 2" svgIcon={clipboardHtmlIcon} />
                </SplitButton>
                <SplitButton themeColor="warning" disabled={isDisabled} text="Warning">
                    <SplitButtonItem text="Item 1" svgIcon={clipboardTextIcon} />
                    <SplitButtonItem text="Item 2" svgIcon={clipboardHtmlIcon} />
                </SplitButton>
                <SplitButton themeColor="error" disabled={isDisabled} text="Error">
                    <SplitButtonItem text="Item 1" svgIcon={clipboardTextIcon} />
                    <SplitButtonItem text="Item 2" svgIcon={clipboardHtmlIcon} />
                </SplitButton>
                <SplitButton themeColor="dark" disabled={isDisabled} text="Dark">
                    <SplitButtonItem text="Item 1" svgIcon={clipboardTextIcon} />
                    <SplitButtonItem text="Item 2" svgIcon={clipboardHtmlIcon} />
                </SplitButton>
                <SplitButton themeColor="light" disabled={isDisabled} text="Light">
                    <SplitButtonItem text="Item 1" svgIcon={clipboardTextIcon} />
                    <SplitButtonItem text="Item 2" svgIcon={clipboardHtmlIcon} />
                </SplitButton>
                <SplitButton themeColor="inverse" disabled={isDisabled} text="Inverse">
                    <SplitButtonItem text="Item 1" svgIcon={clipboardTextIcon} />
                    <SplitButtonItem text="Item 2" svgIcon={clipboardHtmlIcon} />
                </SplitButton>
            </div>
            <br />
        </div>
    );
};

export default App;
