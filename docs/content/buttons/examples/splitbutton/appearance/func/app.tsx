import * as React from 'react';

import { SplitButton, SplitButtonItem, SplitButtonProps } from '@progress/kendo-react-buttons';
import { clipboardHtmlIcon, clipboardMarkdownIcon, clipboardTextIcon } from '@progress/kendo-svg-icons';
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
        size: SplitButtonProps['size'];
        themeColor: SplitButtonProps['themeColor'];
        fillMode: SplitButtonProps['fillMode'];
        rounded: Exclude<SplitButtonProps['rounded'], 'none'>;
    };

    return (
        <div className="example-wrapper-center">
            <SplitButton
                size={config.size}
                themeColor={config.themeColor}
                fillMode={config.fillMode}
                rounded={config.rounded}
                text="Paste"
            >
                <SplitButtonItem text="Keep Text Only" svgIcon={clipboardTextIcon} />
                <SplitButtonItem text="Paste as HTML" svgIcon={clipboardHtmlIcon} />
                <SplitButtonItem text="Paste Markdown" svgIcon={clipboardMarkdownIcon} />
                <SplitButtonItem text="Set Default Paste" />
            </SplitButton>
        </div>
    );
};

export default App;
