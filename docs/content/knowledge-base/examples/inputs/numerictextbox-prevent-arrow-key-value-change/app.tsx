import * as React from 'react';
import { NumericTextBox, NumericTextBoxChangeEvent, NumericTextBoxHandle } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const inputRef = React.useRef<NumericTextBoxHandle>(null);
    const lastKeyRef = React.useRef<string | null>(null);

    const [isFocused, setIsFocused] = React.useState(false);
    const [value, setValue] = React.useState<number | null>(10);
    const [lastParentKey, setLastParentKey] = React.useState('none');

    const handleFocus = () => {
        inputRef.current?.focus?.();
    };

    const handleInnerKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        lastKeyRef.current = e.key;
    };

    const handleInnerKeyUp = () => {
        lastKeyRef.current = null;
    };

    const handleInnerBlur = () => {
        lastKeyRef.current = null;
        setIsFocused(false);
    };

    const handleChange = (e: NumericTextBoxChangeEvent) => {
        const nativeEvent = e.nativeEvent as KeyboardEvent | WheelEvent | undefined;
        const nativeKey = (nativeEvent as KeyboardEvent)?.key;
        const nativeKeyCode = (nativeEvent as KeyboardEvent)?.keyCode;
        const eventType = nativeEvent?.type;

        const isArrowStep =
            nativeKey === 'ArrowUp' ||
            nativeKey === 'ArrowDown' ||
            nativeKeyCode === 38 ||
            nativeKeyCode === 40 ||
            lastKeyRef.current === 'ArrowUp' ||
            lastKeyRef.current === 'ArrowDown';

        const isWheel = eventType === 'wheel';

        if (isArrowStep || isWheel) {
            return;
        }

        setValue(e.value ?? null);
    };

    return (
        <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ maxWidth: '360px', margin: '0 auto' }}>
                <Label editorId="number-input">Enter a value:</Label>

                <div
                    onKeyDown={(e) => {
                        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                            setLastParentKey(e.key);
                        }
                    }}
                    style={{ marginTop: '8px' }}
                >
                    <NumericTextBox
                        id="number-input"
                        ref={inputRef}
                        value={value}
                        width="100%"
                        spinners={true}
                        onChange={handleChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        inputAttributes={{
                            onKeyDown: handleInnerKeyDown,
                            onKeyUp: handleInnerKeyUp,
                            onBlur: handleInnerBlur,
                        }}
                    />
                </div>

                <div style={{ marginTop: '12px' }}>
                    <Button type="button" onClick={handleFocus} disabled={isFocused}>
                        {isFocused ? 'Input is Focused' : 'Focus Input'}
                    </Button>
                </div>

                <div style={{ marginTop: '12px' }}>
                    <strong>Current value:</strong> {value ?? 'null'}
                </div>

                <div style={{ marginTop: '8px' }}>
                    <strong>Last parent key:</strong> {lastParentKey}
                </div>
            </div>
        </div>
    );
};

export default App;
