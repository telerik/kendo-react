import * as React from 'react';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const inputRef = React.createRef<any>();
    const [isFocused, setIsFocused] = React.useState(false);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div style={{ maxWidth: '320px', margin: '20px auto', textAlign: 'center' }}>
            <Label editorId="number-input">Enter a value:</Label>
            <NumericTextBox
                id="number-input"
                ref={inputRef}
                defaultValue={10}
                width="100%"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <div style={{ marginTop: '12px' }}>
                <Button type="button" onClick={handleFocus} disabled={isFocused}>
                    {isFocused ? 'Input is Focused' : 'Focus Input'}
                </Button>
            </div>
        </div>
    );
};

export default App;
