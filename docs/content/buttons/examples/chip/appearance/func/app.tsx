import * as React from 'react';

import { Chip, ChipProps } from '@progress/kendo-react-buttons';
import { starIcon } from '@progress/kendo-svg-icons';
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
                        options: fillModeOptions(['default', 'solid', 'outline']),
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
                        options: themeColorOptions(['base', 'info', 'success', 'warning', 'error']),
                        defaultValue: 'base'
                    }
                ]
            }
        ]
    }) as {
        size: ChipProps['size'];
        themeColor: ChipProps['themeColor'];
        fillMode: ChipProps['fillMode'];
        rounded: ChipProps['rounded'];
    };

    return (
        <div className="example-wrapper-center">
            <Chip
                text="Chip"
                value="chip"
                svgIcon={starIcon}
                size={config.size}
                themeColor={config.themeColor}
                fillMode={config.fillMode}
                rounded={config.rounded}
            />
        </div>
    );
};

export default App;
