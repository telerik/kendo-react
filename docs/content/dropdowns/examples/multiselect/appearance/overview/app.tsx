import * as React from 'react';

import { MultiSelect } from '@progress/kendo-react-dropdowns';
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
    });

    return (
        <div className="example-wrapper-center">
            <div>
                <MultiSelect
                    style={{ width: '300px' }}
                    size={config.size}
                    fillMode={config.fillMode}
                    rounded={config.rounded}
                    data={['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large']}
                    placeholder="Please select ..."
                />
            </div>
        </div>
    );
};

export default App;
