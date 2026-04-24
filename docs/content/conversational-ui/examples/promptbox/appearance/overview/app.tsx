import * as React from 'react';
import { PromptBox, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import './styles.css';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonRounded = 'small' | 'medium' | 'large' | 'full';
type ButtonFillMode = 'solid' | 'flat' | 'outline' | 'clear' | 'link';
type ButtonThemeColor =
    | 'base'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'dark'
    | 'light'
    | 'inverse';

const App = () => {
    const [value, setValue] = React.useState<string>('');
    const [size, setSize] = React.useState<ButtonSize>('medium');
    const [rounded, setRounded] = React.useState<ButtonRounded>('medium');
    const [fillMode, setFillMode] = React.useState<ButtonFillMode>('solid');
    const [themeColor, setThemeColor] = React.useState<ButtonThemeColor>('base');

    const sizes: ButtonSize[] = ['small', 'medium', 'large'];
    const roundedOptions: ButtonRounded[] = ['small', 'medium', 'large', 'full'];
    const fillModes: ButtonFillMode[] = ['solid', 'flat', 'outline', 'clear', 'link'];
    const themeColors: ButtonThemeColor[] = [
        'base',
        'primary',
        'secondary',
        'tertiary',
        'info',
        'success',
        'warning',
        'error',
        'dark',
        'light',
        'inverse'
    ];

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setValue(event.value);
    };

    const handleSizeChange = (event: DropDownListChangeEvent) => {
        setSize(event.value);
    };

    const handleRoundedChange = (event: DropDownListChangeEvent) => {
        setRounded(event.value);
    };

    const handleFillModeChange = (event: DropDownListChangeEvent) => {
        setFillMode(event.value);
    };

    const handleThemeColorChange = (event: DropDownListChangeEvent) => {
        setThemeColor(event.value);
    };

    const buttonConfig = {
        size,
        rounded,
        fillMode,
        themeColor
    };

    return (
        <div>
            <div className="configurator">
                <div className="configurator-header">
                    <span className="k-color-primary">CONFIGURATOR</span>
                </div>
                <div className="configurator-options">
                    <span className="k-form-field">
                        <Label>
                            Size
                            <div className="k-form-field-wrap">
                                <DropDownList
                                    data={sizes}
                                    value={size}
                                    onChange={handleSizeChange}
                                    style={{ minWidth: 120 }}
                                />
                            </div>
                        </Label>
                    </span>
                    <span className="k-form-field">
                        <Label>
                            Border Radius
                            <div className="k-form-field-wrap">
                                <DropDownList
                                    data={roundedOptions}
                                    value={rounded}
                                    onChange={handleRoundedChange}
                                    style={{ minWidth: 120 }}
                                />
                            </div>
                        </Label>
                    </span>
                    <span className="k-form-field">
                        <Label>
                            Fill Mode
                            <div className="k-form-field-wrap">
                                <DropDownList
                                    data={fillModes}
                                    value={fillMode}
                                    onChange={handleFillModeChange}
                                    style={{ minWidth: 120 }}
                                />
                            </div>
                        </Label>
                    </span>
                    <span className="k-form-field">
                        <Label>
                            Theme Color
                            <div className="k-form-field-wrap">
                                <DropDownList
                                    data={themeColors}
                                    value={themeColor}
                                    onChange={handleThemeColorChange}
                                    style={{ minWidth: 120 }}
                                />
                            </div>
                        </Label>
                    </span>
                </div>
            </div>

            <div className="example-config">
                <PromptBox
                    value={value}
                    onChange={handleValueChange}
                    mode="single"
                    placeholder="Type your message..."
                    uploadButtonConfig={buttonConfig}
                    speechToTextButtonConfig={buttonConfig}
                    actionButtonConfig={buttonConfig}
                />
            </div>
        </div>
    );
};

export default App;
