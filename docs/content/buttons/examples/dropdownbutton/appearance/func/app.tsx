import * as React from 'react';

import { DropDownButton, DropDownButtonItem, DropDownButtonProps } from '@progress/kendo-react-buttons';
import {
    useConfigurator,
    sizeOptions,
    roundedOptions,
    fillModeOptions,
    themeColorOptions
} from '@docs-shared/configurator';

const App = () => {
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
                        options: fillModeOptions(['default', 'solid', 'outline', 'flat', 'link']),
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
    }) as {
        size: DropDownButtonProps['size'];
        themeColor: DropDownButtonProps['themeColor'];
        fillMode: Exclude<DropDownButtonProps['fillMode'], 'clear'>;
        rounded: Exclude<DropDownButtonProps['rounded'], 'none'>;
    };

    return (
        <div className="example-wrapper-center">
            <DropDownButton
                size={config.size}
                themeColor={config.themeColor}
                fillMode={config.fillMode}
                rounded={config.rounded}
                text="Edit"
            >
                <DropDownButtonItem text="Undo" icon="undo" />
                <DropDownButtonItem text="Redo" icon="redo" disabled={true} />
                <DropDownButtonItem text="Cut" icon="cut" />
                <DropDownButtonItem text="Copy" icon="copy" />
                <DropDownButtonItem text="Paste" icon="paste" />
            </DropDownButton>
        </div>
    );
};

export default App;
