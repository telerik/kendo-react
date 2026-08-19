import * as React from 'react';
import {
    PromptBox,
    PromptBoxSpeechToTextButtonProps,
    PromptBoxChangeEvent
} from '@progress/kendo-react-conversational-ui';
import { useConfigurator } from '@docs-shared/configurator';
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
    const config = useConfigurator({
        sections: [
            {
                label: 'Language',
                controls: [
                    {
                        type: 'dropdown',
                        name: 'language',
                        options: languageOptions.map((option) => option.text),
                        defaultValue: languageOptions[0].text
                    }
                ]
            },
            {
                label: 'Speech to Text',
                controls: [
                    { type: 'switch', name: 'continuous', label: 'Continuous Mode', defaultValue: false },
                    { type: 'switch', name: 'interimResults', label: 'Interim Results', defaultValue: true },
                    { type: 'switch', name: 'disabled', label: 'Disabled', defaultValue: false }
                ]
            }
        ]
    });
    const selectedLanguage = languageOptions.find((option) => option.text === config.language)?.value ?? 'en-US';

    const speechToTextButtonSettings: PromptBoxSpeechToTextButtonProps = {
        continuous: config.continuous ?? false,
        interimResults: config.interimResults ?? true,
        lang: selectedLanguage,
        themeColor: 'base',
        disabled: config.disabled ?? false
    };

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const handleSend = () => {
        console.log('Sending prompt:', promptValue);
        setPromptValue('');
    };

    return (
        <div className="demo-container">
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
