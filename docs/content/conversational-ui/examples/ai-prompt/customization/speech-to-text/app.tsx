import * as React from 'react';

import {
    AIPrompt,
    AIPromptOutputInterface,
    AIPromptOutputView,
    AIPromptView,
    outputViewDefaults,
    promptViewDefaults
} from '@progress/kendo-react-conversational-ui';
import { suggestionsList } from './service-ai-data';

// Real API function to get suggestion from Telerik's AI service
const getSuggestion = async (prompt: string, signal?: AbortSignal): Promise<string> => {
    const url = 'https://demos.telerik.com/service/v2/ai/completion';
    const data = [
        {
            role: 'user',
            contents: [
                {
                    $type: 'text',
                    text:
                        'You are a helpful AI assistant. Help me with the following request: ' +
                        prompt +
                        '. Provide a clear and concise response. Make the response informative and helpful.'
                }
            ]
        }
    ];

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            signal: signal
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        try {
            const parsedData = result.messages[0].contents[0].text;
            return parsedData;
        } catch (parseError) {
            return 'Something went wrong. Please try again.';
        }
    } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
            throw error; // Re-throw abort errors to handle them specifically
        }
        return 'Error making request. Please try again.';
    }
};

const App = () => {
    const [activeView, setActiveView] = React.useState<string>(promptViewDefaults.name);
    const [outputs, setOutputs] = React.useState<AIPromptOutputInterface[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [abortController, setAbortController] = React.useState<AbortController | null>(null);

    const handleActiveViewChange = (viewName: string) => {
        setActiveView(viewName);
    };

    const handleOnRequest = async (promptText?: string) => {
        console.log('handleOnRequest', promptText);
        if (!promptText) return;

        // Create new abort controller for this request
        const controller = new AbortController();
        setAbortController(controller);

        setIsLoading(true);
        setActiveView(outputViewDefaults.name);

        try {
            const responseContent = await getSuggestion(promptText, controller.signal);

            const newOutput: AIPromptOutputInterface = {
                id: outputs.length + 1,
                title: promptText,
                responseContent: responseContent,
                prompt: promptText
            };

            setOutputs((prevOutputs) => [newOutput, ...prevOutputs]);
        } catch (error) {
            // Handle abort - don't add any output, just stop
            if (error instanceof Error && error.name === 'AbortError') {
                return;
            }

            // Handle other errors
            const errorOutput: AIPromptOutputInterface = {
                id: outputs.length + 1,
                title: promptText,
                responseContent: 'Sorry, there was an error processing your request. Please try again.',
                prompt: promptText
            };
            setOutputs((prevOutputs) => [errorOutput, ...prevOutputs]);
        } finally {
            setIsLoading(false);
            setAbortController(null);
        }
    };

    const handleCancel = () => {
        if (abortController) {
            abortController.abort();
        }
    };

    return (
        <AIPrompt
            style={{ width: '400px', height: '410px' }}
            activeView={activeView}
            loading={isLoading}
            suggestionsView={'modern'}
            onActiveViewChange={handleActiveViewChange}
            toolbarItems={[promptViewDefaults, outputViewDefaults]}
            onPromptRequest={handleOnRequest}
            onCancel={handleCancel}
        >
            <AIPromptView enableSpeechToText={true} promptSuggestions={suggestionsList} />
            <AIPromptOutputView outputs={outputs} />
        </AIPrompt>
    );
};

export default App;
