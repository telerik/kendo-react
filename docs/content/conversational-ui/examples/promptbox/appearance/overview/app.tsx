import * as React from 'react';
import { PromptBox, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import {
    useConfigurator,
    sizeOptions,
    roundedOptions,
    fillModeOptions,
    themeColorOptions
} from '@docs-shared/configurator';

const App = () => {
    const [value, setValue] = React.useState<string>('');

    const config = useConfigurator({
        sections: [
            {
                label: 'Size',
                controls: [
                    {
                        type: 'segmented',
                        name: 'size',
                        options: sizeOptions(['default', 'small', 'medium', 'large']),
                        defaultValue: 'default'
                    }
                ]
            },
            {
                label: 'Border Radius',
                controls: [
                    {
                        type: 'segmented',
                        name: 'rounded',
                        options: roundedOptions(['default', 'small', 'medium', 'large', 'full']),
                        defaultValue: 'default'
                    }
                ]
            },
            {
                label: 'Fill Mode',
                controls: [
                    {
                        type: 'segmented',
                        name: 'fillMode',
                        options: fillModeOptions(['default', 'solid', 'outline', 'flat', 'link', 'clear']),
                        defaultValue: 'default'
                    }
                ]
            },
            {
                label: 'Theme Color',
                controls: [
                    {
                        type: 'dropdown',
                        name: 'themeColor',
                        options: themeColorOptions(),
                        defaultValue: 'base'
                    }
                ]
            }
        ]
    });

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setValue(event.value);
    };

    const buttonConfig = {
        size: config.size,
        rounded: config.rounded,
        fillMode: config.fillMode,
        themeColor: config.themeColor
    };

    return (
        <div className="example-wrapper-center">
            <PromptBox
                value={value}
                onChange={handleValueChange}
                mode="single"
                placeholder="Type your message..."
                uploadButtonConfig={buttonConfig}
                speechToTextButtonConfig={buttonConfig}
                actionButtonConfig={buttonConfig}
            />
        </div>
    );
};

export default App;
