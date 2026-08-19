import * as React from 'react';

import { DateInput, DateInputProps } from '@progress/kendo-react-dateinputs';
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
                        options: fillModeOptions(['default', 'solid', 'outline', 'flat']),
                        defaultValue: 'default'
                    }
                ]
            }
        ]
    }) as {
        size: DateInputProps['size'];
        fillMode: DateInputProps['fillMode'];
        rounded: Exclude<DateInputProps['rounded'], 'none'>;
    };

    return (
        <div className="example-wrapper-center">
            <DateInput
                size={config.size}
                fillMode={config.fillMode}
                rounded={config.rounded}
                label={'Date'}
                spinners={true}
                width={200}
            />
        </div>
    );
};

export default App;
