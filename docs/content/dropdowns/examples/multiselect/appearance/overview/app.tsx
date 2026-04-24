import * as React from 'react';

import { MultiSelect, MultiSelectProps } from '@progress/kendo-react-dropdowns';
import { StyleConfigurator } from './shared-dd-style-configurator';

const App = () => {
    const [size, setSize] = React.useState<MultiSelectProps['size']>('medium');
    const [fillMode, setFillMode] = React.useState<MultiSelectProps['fillMode']>('solid');
    const [rounded, setRounded] = React.useState<MultiSelectProps['rounded']>('medium');

    return (
        <div>
            <StyleConfigurator
                size={size}
                onSizeChange={setSize}
                fillMode={fillMode}
                onFillModeChange={setFillMode}
                rounded={rounded}
                onRoundedChange={setRounded}
            />
            <div className="example-config" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <MultiSelect
                    style={{ width: '300px' }}
                    size={size}
                    fillMode={fillMode}
                    rounded={rounded}
                    data={['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large']}
                    placeholder="Please select ..."
                />
            </div>
        </div>
    );
};

export default App;
