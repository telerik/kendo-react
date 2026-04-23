import * as React from 'react';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { ColorPicker, ColorPickerChangeEvent, Signature } from '@progress/kendo-react-inputs';
import { StyleConfigurator } from './shared-in-style-configurator';

const App = () => {
    const [color, setColor] = React.useState('#000');
    const [backgroundColor, setBackgroundColor] = React.useState('#fff');
    const [strokeWidth, setStrokeWidth] = React.useState(1);
    const [size, setSize] = React.useState<'small' | 'medium' | 'large'>('medium');
    const [fillMode, setFillMode] = React.useState<'solid' | 'outline' | 'flat'>('solid');
    const [rounded, setRounded] = React.useState<'small' | 'medium' | 'large'>('medium');

    const strokeWidthOptions = [1, 2, 3];

    const onColorChange = (e: ColorPickerChangeEvent) => {
        setColor(e.value);
    };

    const onStrokeWidthChange = (e: DropDownListChangeEvent) => {
        setStrokeWidth(e.value);
    };

    const onBackgroundColorChange = (e: ColorPickerChangeEvent) => {
        setBackgroundColor(e.value);
    };

    return (
        <div>
            <StyleConfigurator
                size={size}
                onSizeChange={setSize}
                fillMode={fillMode}
                onFillModeChange={setFillMode}
                rounded={rounded}
                onRoundedChange={setRounded}
            >
                <span className="k-form-field" style={{ flex: '1 1 0px' }}>
                    <Label>
                        Color
                        <div className="k-form-field-wrap">
                            <ColorPicker value={color} onChange={onColorChange} />
                        </div>
                    </Label>
                </span>
                <span className="k-form-field" style={{ flex: '1 1 0px' }}>
                    <Label>
                        Background Color
                        <div className="k-form-field-wrap">
                            <ColorPicker value={backgroundColor} onChange={onBackgroundColorChange} />
                        </div>
                    </Label>
                </span>
                <span className="k-form-field" style={{ flex: '1 1 0px' }}>
                    <Label>
                        Stroke Width
                        <div className="k-form-field-wrap">
                            <DropDownList
                                data={strokeWidthOptions}
                                value={strokeWidth}
                                onChange={onStrokeWidthChange}
                                style={{ minWidth: 120 }}
                            />
                        </div>
                    </Label>
                </span>
            </StyleConfigurator>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Signature
                    color={color}
                    size={size}
                    fillMode={fillMode}
                    rounded={rounded}
                    backgroundColor={backgroundColor}
                    strokeWidth={strokeWidth}
                    smooth={true}
                    popupScale={2}
                />
            </div>
        </div>
    );
};

export default App;
