import * as React from 'react';
import { PromptBox, PromptBoxActionButtonProps, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import { SVGIcon } from '@progress/kendo-react-common';
import { arrowRightIcon, paperPlaneIcon, checkIcon, arrowUpIcon, stopIcon } from '@progress/kendo-svg-icons';
import { useConfigurator } from '@docs-shared/configurator';
import './styles.css';

interface IconOption {
    text: string;
    icon: SVGIcon;
}

const iconOptions: IconOption[] = [
    { text: 'Default', icon: arrowUpIcon },
    { text: 'Paper Plane (send)', icon: paperPlaneIcon },
    { text: 'Arrow Right', icon: arrowRightIcon },
    { text: 'Check', icon: checkIcon }
];

const App = () => {
    const [promptValue, setPromptValue] = React.useState<string>('');
    const config = useConfigurator({
        sections: [
            {
                label: 'Send Icon',
                controls: [
                    {
                        type: 'dropdown',
                        name: 'sendIcon',
                        options: iconOptions.map((option) => option.text),
                        defaultValue: 'Paper Plane (send)'
                    }
                ]
            },
            {
                label: 'Action Button',
                controls: [
                    { type: 'switch', name: 'loading', label: 'Loading', defaultValue: false },
                    { type: 'switch', name: 'disabled', label: 'Disabled', defaultValue: false }
                ]
            }
        ]
    });
    const loading = config.loading ?? false;
    const actionButtonDisabled = config.disabled ?? false;
    const sendIcon = iconOptions.find((option) => option.text === config.sendIcon)?.icon ?? paperPlaneIcon;

    const actionButtonSettings: PromptBoxActionButtonProps = {
        disabled: actionButtonDisabled,
        svgIcon: loading ? stopIcon : sendIcon,
        themeColor: 'primary'
    };

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const handleAction = () => {
        setPromptValue('');
    };

    return (
        <div className="demo-container">
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
