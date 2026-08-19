import * as React from 'react';

import { FloatingActionButton, FloatingActionButtonProps } from '@progress/kendo-react-buttons';
import { heartIcon } from '@progress/kendo-svg-icons';
import { useConfigurator, sizeOptions, roundedOptions, themeColorOptions } from '@docs-shared/configurator';

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
                label: 'Theme Color',
                controls: [
                    {
                        type: 'dropdown',
                        name: 'themeColor',
                        options: themeColorOptions(['base', 'primary', 'secondary', 'tertiary']),
                        defaultValue: 'primary'
                    }
                ]
            }
        ]
    }) as {
        size: FloatingActionButtonProps['size'];
        themeColor: FloatingActionButtonProps['themeColor'];
        rounded: FloatingActionButtonProps['rounded'];
    };

    return (
        <div className="example-wrapper-center">
            <FloatingActionButton
                svgIcon={heartIcon}
                size={config.size}
                themeColor={config.themeColor}
                rounded={config.rounded}
                className="static-fab"
            />
        </div>
    );
};

export default App;
