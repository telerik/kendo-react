import * as React from 'react';

import { Button, ButtonProps } from '@progress/kendo-react-buttons';
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
                        options: sizeOptions(['default', 'xs', 'small', 'medium', 'large']),
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
                        options: roundedOptions(['default', 'none', 'small', 'medium', 'large', 'full']),
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
                        defaultValue: 'primary'
                    }
                ]
            }
        ]
    }) as {
        size: ButtonProps['size'];
        themeColor: ButtonProps['themeColor'];
        fillMode: ButtonProps['fillMode'];
        rounded: ButtonProps['rounded'];
    };

    return (
        <div className="example-wrapper-center">
            <Button
                size={config.size}
                themeColor={config.themeColor}
                fillMode={config.fillMode}
                rounded={config.rounded}
            >
                Button
            </Button>
        </div>
    );
};

export default App;
