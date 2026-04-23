import * as React from 'react';

import { TextArea } from '@progress/kendo-react-inputs';

import { StyleConfigurator } from './shared-in-style-configurator';

const App = () => {
    const [size, setSize] = React.useState<'small' | 'medium' | 'large'>('medium');
    const [fillMode, setFillMode] = React.useState<'solid' | 'outline' | 'flat'>('solid');
    const [rounded, setRounded] = React.useState<'small' | 'medium' | 'large'>('medium');

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
            <TextArea size={size} fillMode={fillMode} rounded={rounded} style={{ width: 200 }} />
        </div>
    );
};

export default App;
