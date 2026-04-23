import * as React from 'react';
import {
    PromptBox,
    PromptBoxSpeechToTextButtonProps,
    PromptBoxChangeEvent
} from '@progress/kendo-react-conversational-ui';
import { Checkbox } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import './styles.css';

interface LanguageOption {
    text: string;
    value: string;
}

const languageOptions: LanguageOption[] = [
    { text: 'English (US)', value: 'en-US' },
    { text: 'Spanish (Spain)', value: 'es-ES' },
    { text: 'French (France)', value: 'fr-FR' },
    { text: 'German (Germany)', value: 'de-DE' }
];

const App = () => {
    const [promptValue, setPromptValue] = React.useState<string>('');
    const [continuous, setContinuous] = React.useState<boolean>(false);
    const [interimResults, setInterimResults] = React.useState<boolean>(true);
    const [selectedLanguage, setSelectedLanguage] = React.useState<string>('en-US');
    const [disabled, setDisabled] = React.useState<boolean>(false);

    const speechToTextButtonSettings: PromptBoxSpeechToTextButtonProps = {
        continuous: continuous,
        interimResults: interimResults,
        lang: selectedLanguage,
        themeColor: 'base',
        disabled: disabled
    };

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const handleLanguageChange = (event: DropDownListChangeEvent) => {
        setSelectedLanguage(event.value.value);
    };

    const handleSend = () => {
        console.log('Sending prompt:', promptValue);
        setPromptValue('');
    };

    const selectedLanguageOption = languageOptions.find((opt) => opt.value === selectedLanguage) || languageOptions[0];

    return (
        <div className="demo-container">
            <div className="configuration-panel">
                <div className="config-grid">
                    <div className="config-row">
                        <Label className="label-inline">
                            Continuous Mode
                            <Checkbox value={continuous} onChange={(e) => setContinuous(e.value ?? false)} />
                        </Label>
                    </div>

                    <div className="config-row">
                        <Label className="label-inline">
                            Interim Results
                            <Checkbox value={interimResults} onChange={(e) => setInterimResults(e.value ?? false)} />
                        </Label>
                    </div>

                    <div className="config-row">
                        <Label className="label-compact">Language:</Label>
                        <DropDownList
                            data={languageOptions}
                            value={selectedLanguageOption}
                            onChange={handleLanguageChange}
                            textField="text"
                            dataItemKey="value"
                            className="dropdown-compact"
                        />
                    </div>

                    <div className="config-row">
                        <Label className="label-inline">
                            Disabled
                            <Checkbox value={disabled} onChange={(e) => setDisabled(e.value ?? false)} />
                        </Label>
                    </div>
                </div>
            </div>

            <PromptBox
                value={promptValue}
                onChange={handleValueChange}
                speechToTextButtonConfig={speechToTextButtonSettings}
                placeholder="Click microphone or type a message..."
                onPromptAction={handleSend}
            />
        </div>
    );
};

export default App;
