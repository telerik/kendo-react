import * as React from 'react';

import { ColorPicker } from '@progress/kendo-react-inputs';
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
            <p>Select color:</p>
            <ColorPicker views={['gradient', 'palette']} size={size} fillMode={fillMode} rounded={rounded} />
        </div>
    );
};

export default App;
