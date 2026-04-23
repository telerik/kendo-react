import * as React from 'react';

import { SplitButton, SplitButtonItem } from '@progress/kendo-react-buttons';
import { StyleConfigurator } from './shared-bn-style-configurator';
import { clipboardHtmlIcon, clipboardMarkdownIcon, clipboardTextIcon } from '@progress/kendo-svg-icons';

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
                roundedOptions={['small', 'medium', 'large', 'full']}
                onRoundedChange={setRounded}
            />
            <SplitButton size={size} themeColor={themeColor} fillMode={fillMode} rounded={rounded} text="Paste">
                <SplitButtonItem text="Keep Text Only" svgIcon={clipboardTextIcon} />
                <SplitButtonItem text="Paste as HTML" svgIcon={clipboardHtmlIcon} />
                <SplitButtonItem text="Paste Markdown" svgIcon={clipboardMarkdownIcon} />
                <SplitButtonItem text="Set Default Paste" />
            </SplitButton>
        </div>
    );
};

export default App;
