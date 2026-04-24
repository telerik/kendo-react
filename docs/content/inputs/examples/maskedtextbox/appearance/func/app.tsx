import * as React from 'react';

import { MaskedTextBox } from '@progress/kendo-react-inputs';

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
            <div>Number:</div>
            <MaskedTextBox
                size={size}
                fillMode={fillMode}
                rounded={rounded}
                width={300}
                mask="(999) 000-00-00-00"
                defaultValue="(359) 884-12-33-21"
            />
        </div>
    );
};

export default App;
