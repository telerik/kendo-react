import * as React from 'react';

import { TimePicker } from '@progress/kendo-react-dateinputs';
import { StyleConfigurator } from './shared-di-style-configurator';

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
            <TimePicker size={size} fillMode={fillMode} rounded={rounded} width={200} />
        </div>
    );
};

export default App;
