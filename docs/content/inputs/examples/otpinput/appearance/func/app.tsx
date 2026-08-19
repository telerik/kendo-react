import * as React from 'react';

import { OTPInput, OTPInputProps } from '@progress/kendo-react-inputs';
import { useConfigurator, sizeOptions, roundedOptions, fillModeOptions } from '@docs-shared/configurator';

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
                        options: fillModeOptions(['default', 'solid', 'outline', 'flat']),
                        defaultValue: 'default'
                    }
                ]
            },
            {
                label: 'Length',
                controls: [
                    {
                        type: 'numericTextBox',
                        name: 'length',
                        min: 3,
                        max: 8,
                        defaultValue: 4
                    }
                ]
            },
            {
                label: 'Spacing',
                controls: [
                    {
                        type: 'switch',
                        name: 'spacing',
                        label: 'Spacing',
                        defaultValue: true
                    }
                ]
            }
        ]
    }) as {
        size: OTPInputProps['size'];
        fillMode: OTPInputProps['fillMode'];
        rounded: OTPInputProps['rounded'];
        length: number;
        spacing: boolean;
    };

    return (
        <div className="example-wrapper-center">
            <OTPInput
                size={config.size}
                fillMode={config.fillMode}
                rounded={config.rounded}
                length={config.length ?? 4}
                spacing={config.spacing ?? true}
            />
        </div>
    );
};

export default App;
