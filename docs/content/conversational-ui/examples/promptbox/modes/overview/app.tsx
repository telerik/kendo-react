import * as React from 'react';
import { PromptBox, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import { RadioGroup, RadioGroupChangeEvent } from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { globeOutlineIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const modeOptions = [
    {
        value: 'single',
        label: 'Single'
    },
    {
        value: 'multi',
        label: 'Multi'
    },
    {
        value: 'auto',
        label: 'Auto'
    }
];

const App = () => {
    const [mode, setMode] = React.useState<'single' | 'multi' | 'auto'>('auto');
    const [value, setValue] = React.useState<string>(
        'What are the key benefits of using AI in healthcare, and how can it improve patient outcomes while addressing privacy concerns?'
    );

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setValue(event.value);
    };

    const handleModeChange = (event: RadioGroupChangeEvent) => {
        setMode(event.value);
    };

    return (
        <div className="demo-container">
            <div className="configurator">
                <span className="configurator-label">Mode:</span>
                <div className="radio-group">
                    <RadioGroup value={mode} onChange={handleModeChange} data={modeOptions} layout="horizontal" />
                </div>
            </div>
            <PromptBox
                value={value}
                onChange={handleValueChange}
                placeholder="Type a message"
                mode={mode}
                uploadButtonConfig={true}
                maxTextAreaHeight="100"
                startAffix={<SvgIcon icon={globeOutlineIcon} />}
            />
        </div>
    );
};

export default App;
