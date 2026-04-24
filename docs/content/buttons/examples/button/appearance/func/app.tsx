import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';

import { StyleConfigurator } from './style-configurator';

const App = () => {
    const [size, setSize] = React.useState<'small' | 'medium' | 'large'>('medium');
    const [themeColor, setThemeColor] = React.useState<
        'base' | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'dark' | 'light' | 'inverse'
    >('base');
    const [fillMode, setFillMode] = React.useState<'solid' | 'outline' | 'flat' | 'link' | 'clear'>('solid');
    const [rounded, setRounded] = React.useState<'small' | 'medium' | 'large' | 'full'>('medium');

    return (
        <div>
            <StyleConfigurator
                size={size}
                onSizeChange={setSize}
                themeColor={themeColor}
                onThemeColorChange={setThemeColor}
                fillMode={fillMode}
                onFillModeChange={setFillMode}
                rounded={rounded}
                onRoundedChange={setRounded}
            />
            <Button size={size} themeColor={themeColor} fillMode={fillMode} rounded={rounded}>
                Button
            </Button>
        </div>
    );
};

export default App;
