import * as React from 'react';

import { ComboBox, ComboBoxProps } from '@progress/kendo-react-dropdowns';
import { StyleConfigurator } from './shared-dd-style-configurator';

const App = () => {
    const [size, setSize] = React.useState<ComboBoxProps['size']>('medium');
    const [fillMode, setFillMode] = React.useState<ComboBoxProps['fillMode']>('solid');
    const [rounded, setRounded] = React.useState<ComboBoxProps['rounded']>('medium');

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
                <ComboBox
                    size={size}
                    fillMode={fillMode}
                    rounded={rounded}
                    data={['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large']}
                    placeholder="Please select ..."
                    style={{ width: '300px' }}
                />
            </div>
        </div>
    );
};

export default App;
