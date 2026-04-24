import * as React from 'react';
import { PromptBox, PromptBoxActionButtonProps, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import { Checkbox } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { arrowRightIcon, paperPlaneIcon, checkIcon, arrowUpOutlineIcon, stopSmIcon } from '@progress/kendo-svg-icons';
import './styles.css';
import { SVGIcon } from '@progress/kendo-react-common';

interface IconOption {
    text: string;
    icon: SVGIcon;
    value: number;
}

const iconOptions: IconOption[] = [
    { text: 'Default', icon: arrowUpOutlineIcon, value: 1 },
    { text: 'Paper Plane (send)', icon: paperPlaneIcon, value: 2 },
    { text: 'Arrow Right', icon: arrowRightIcon, value: 3 },
    { text: 'Check', icon: checkIcon, value: 4 }
];

const App = () => {
    const [promptValue, setPromptValue] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);
    const [actionButtonDisabled, setActionButtonDisabled] = React.useState<boolean>(false);
    const [sendIcon, setSendIcon] = React.useState<SVGIcon>(paperPlaneIcon);

    const actionButtonSettings: PromptBoxActionButtonProps = {
        disabled: actionButtonDisabled,
        svgIcon: loading ? stopSmIcon : sendIcon,
        themeColor: 'primary'
    };

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const handleIconChange = (event: DropDownListChangeEvent) => {
        setSendIcon(event.value.icon);
    };

    const handleAction = () => {
        setPromptValue('');
    };

    // Find selected option for display
    const selectedIcon = iconOptions.find((opt) => opt.icon === sendIcon) || iconOptions[1];

    return (
        <div className="demo-container">
            <div className="configuration-panel">
                <div className="config-row">
                    <Label className="label-inline">
                        Loading State
                        <Checkbox value={loading} onChange={(e) => setLoading(e.value ?? false)} />
                    </Label>
                </div>

                <div className="config-row">
                    <Label className="label-inline">
                        Disabled
                        <Checkbox
                            value={actionButtonDisabled}
                            onChange={(e) => setActionButtonDisabled(e.value ?? false)}
                        />
                    </Label>
                </div>

                <div className="config-row">
                    <Label className="label-inline">
                        Send Icon
                        <DropDownList
                            data={iconOptions}
                            value={selectedIcon}
                            onChange={handleIconChange}
                            textField="text"
                            dataItemKey="value"
                            style={{ width: '200px' }}
                        />
                    </Label>
                </div>
            </div>

            <PromptBox
                value={promptValue}
                onChange={handleValueChange}
                loading={loading}
                actionButtonConfig={actionButtonSettings}
                placeholder="Type a message..."
                onPromptAction={handleAction}
            />
        </div>
    );
};

export default App;
