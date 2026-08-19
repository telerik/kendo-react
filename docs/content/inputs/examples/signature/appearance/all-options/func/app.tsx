import * as React from 'react';

import { Signature } from '@progress/kendo-react-inputs';
import { useConfigurator, sizeOptions, roundedOptions, fillModeOptions } from '@docs-shared/configurator';

const App = () => {
    const config = useConfigurator({
        sections: [
            {
                label: 'Stroke Color',
                controls: [{ type: 'colorPicker', name: 'color', defaultValue: '#000000' }]
            },
            {
                label: 'Background Color',
                controls: [{ type: 'colorPicker', name: 'backgroundColor', defaultValue: '#ffffff' }]
            },
            {
                label: 'Stroke Width',
                controls: [{ type: 'slider', name: 'strokeWidth', min: 1, max: 3, step: 1, defaultValue: 1 }]
            },
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
                        options: roundedOptions(['default', 'none', 'small', 'medium', 'large']),
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
                        options: fillModeOptions(['default', 'solid', 'outline', 'flat']),
                        defaultValue: 'default'
                    }
                ]
            }
        ]
    });

    return (
        <div className="example-wrapper-center">
            <Signature
                color={config.color}
                size={config.size}
                fillMode={config.fillMode}
                rounded={config.rounded}
                backgroundColor={config.backgroundColor}
                strokeWidth={config.strokeWidth}
                smooth={true}
                popupScale={2}
            />
        </div>
    );
};

export default App;
