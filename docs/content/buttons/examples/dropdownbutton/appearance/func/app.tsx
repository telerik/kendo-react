import * as React from 'react';

import { DropDownButton, DropDownButtonItem } from '@progress/kendo-react-buttons';
import { StyleConfigurator } from './shared-bn-style-configurator';

const App = () => {
    const [size, setSize] = React.useState<'small' | 'medium' | 'large'>('medium');
    const [themeColor, setThemeColor] = React.useState<
        'base' | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'dark' | 'light' | 'inverse'
    >('base');
    const [fillMode, setFillMode] = React.useState<'solid' | 'outline' | 'flat' | 'link'>('solid');
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
            <DropDownButton size={size} themeColor={themeColor} fillMode={fillMode} rounded={rounded} text="Edit">
                <DropDownButtonItem text="Undo" icon="undo" />
                <DropDownButtonItem text="Redo" icon="redo" disabled={true} />
                <DropDownButtonItem text="Cut" icon="cut" />
                <DropDownButtonItem text="Copy" icon="copy" />
                <DropDownButtonItem text="Paste" icon="paste" />
            </DropDownButton>
        </div>
    );
};

export default App;
