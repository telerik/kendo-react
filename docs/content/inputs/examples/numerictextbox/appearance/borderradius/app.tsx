import * as React from 'react';

import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { useConfigurator, sizeOptions, fillModeOptions } from '@docs-shared/configurator';

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
        <div>
            <div className="k-d-flex k-gap-10 k-flex-wrap">
                <div className="k-d-flex k-flex-col k-gap-4">
                    <Label>Small</Label>
                    <NumericTextBox
                        defaultValue={5}
                        rounded={'small'}
                        size={config.size}
                        fillMode={config.fillMode}
                        width={300}
                    />

                    <Label>Medium</Label>
                    <NumericTextBox
                        defaultValue={5}
                        rounded={'medium'}
                        size={config.size}
                        fillMode={config.fillMode}
                        width={300}
                    />

                    <Label>Large</Label>
                    <NumericTextBox
                        defaultValue={5}
                        rounded={'large'}
                        size={config.size}
                        fillMode={config.fillMode}
                        width={300}
                    />
                </div>

                <div className="k-d-flex k-flex-col k-gap-4">
                    <Label>Full</Label>
                    <NumericTextBox
                        defaultValue={5}
                        rounded={'full'}
                        size={config.size}
                        fillMode={config.fillMode}
                        width={300}
                    />

                    <Label>None</Label>
                    <NumericTextBox
                        defaultValue={5}
                        rounded={'none'}
                        size={config.size}
                        fillMode={config.fillMode}
                        width={300}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
