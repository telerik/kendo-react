import * as React from 'react';

import { NumericTextBox, NumericTextBoxProps } from '@progress/kendo-react-inputs';
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
            }
        ]
    }) as {
        size: NumericTextBoxProps['size'];
        fillMode: NumericTextBoxProps['fillMode'];
        rounded: NumericTextBoxProps['rounded'];
    };

    return (
        <div className="example-wrapper-center">
            <NumericTextBox
                defaultValue={0}
                size={config.size}
                fillMode={config.fillMode}
                rounded={config.rounded}
                width={300}
            />
        </div>
    );
};

export default App;
