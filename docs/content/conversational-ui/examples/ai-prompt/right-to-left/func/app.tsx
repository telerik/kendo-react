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

import './overview-styles.css';

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

    const handleOnRequest = async (prompt?: string, output?: AIPromptOutputInterface) => {
        if (!prompt) {
            return;
        }

        // Cancel any existing request
        if (abortController) {
            abortController.abort();
        }

        const newAbortController = new AbortController();
        setAbortController(newAbortController);
        setIsLoading(true);

        try {
            let requestPrompt = prompt;
            if (output?.isRetry) {
                requestPrompt = prompt + ' (retry)';
            }

            const responseContent = await getSuggestion(requestPrompt, newAbortController.signal);

            setOutputs([
                {
                    id: outputs.length + 1,
                    title: prompt,
                    responseContent: responseContent,
                    prompt
                },
                ...outputs
            ]);
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                // Request was aborted, don't add output
                return;
            }

            // Handle other errors
            setOutputs([
                {
                    id: outputs.length + 1,
                    title: prompt,
                    responseContent: 'Sorry, something went wrong. Please try again.',
                    prompt
                },
                ...outputs
            ]);
        } finally {
            setIsLoading(false);
            setAbortController(null);
        }

        setActiveView(outputViewDefaults.name);
    };

    const handleActiveViewChange = (viewName: string) => {
        setActiveView(viewName);
    };

    return (
        <AIPrompt
            dir={'rtl'}
            style={{ width: '400px', height: '400px' }}
            activeView={activeView}
            suggestionsView={'modern'}
            onActiveViewChange={handleActiveViewChange}
            onPromptRequest={handleOnRequest}
            toolbarItems={[promptViewDefaults, outputViewDefaults]}
        >
            <AIPromptView promptSuggestions={suggestionsList} />
            <AIPromptOutputView outputs={outputs} />
        </AIPrompt>
    );
};

export default App;
