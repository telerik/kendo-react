import * as React from 'react';
import {
    AIPrompt,
    AIPromptContent,
    AIPromptOutputInterface,
    AIPromptOutputView,
    AIPromptToolbarItemInterface,
    AIPromptView,
    AIPromptViewRender,
    outputViewDefaults,
    promptViewDefaults
} from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { infoCircleIcon } from '@progress/kendo-svg-icons';
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

// Define the custom view toolbar item
export const customViewToolbarItem: AIPromptToolbarItemInterface = {
    name: 'info',
    buttonIcon: infoCircleIcon
};

// Custom view component
export const InfoView = (props: { setActiveView: (viewName: string) => void }) => {
    const { setActiveView } = props;

    return (
        <AIPromptViewRender name={customViewToolbarItem.name}>
            <AIPromptContent>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h3>About AI Assistant</h3>
                    <p>This AI assistant can help you with various tasks including:</p>
                    <ul style={{ textAlign: 'left', maxWidth: '300px', margin: '0 auto' }}>
                        <li>Answering questions</li>
                        <li>Writing content</li>
                        <li>Code assistance</li>
                        <li>Data analysis</li>
                    </ul>
                    <Button
                        style={{ marginTop: '20px' }}
                        themeColor="primary"
                        onClick={() => setActiveView(promptViewDefaults.name)}
                    >
                        Start Conversation
                    </Button>
                </div>
            </AIPromptContent>
        </AIPromptViewRender>
    );
};

const App = () => {
    const [activeView, setActiveView] = React.useState<string>(customViewToolbarItem.name);
    const [outputs, setOutputs] = React.useState<AIPromptOutputInterface[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [abortController, setAbortController] = React.useState<AbortController | null>(null);

    const handleActiveViewChange = (viewName: string) => {
        setActiveView(viewName);
    };

    const handleOnRequest = async (prompt?: string, output?: AIPromptOutputInterface) => {
        if (!prompt || output?.ratingType) return;

        // Create new abort controller for this request
        const controller = new AbortController();
        setAbortController(controller);

        setIsLoading(true);
        setActiveView(outputViewDefaults.name);

        try {
            let responseContent: string;

            if (output?.isRetry) {
                responseContent = await getSuggestion(
                    prompt + ' (please provide an alternative response)',
                    controller.signal
                );
            } else {
                responseContent = await getSuggestion(prompt, controller.signal);
            }

            const newOutput: AIPromptOutputInterface = {
                id: outputs.length + 1,
                title: prompt,
                responseContent: responseContent,
                prompt
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
                title: prompt,
                responseContent: 'Sorry, there was an error processing your request. Please try again.',
                prompt
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
            style={{ width: '400px', height: '400px' }}
            activeView={activeView}
            loading={isLoading}
            suggestionsView={'modern'}
            onActiveViewChange={handleActiveViewChange}
            onPromptRequest={handleOnRequest}
            onCancel={handleCancel}
            toolbarItems={[promptViewDefaults, outputViewDefaults, customViewToolbarItem]}
        >
            <AIPromptView promptSuggestions={suggestionsList} />
            <AIPromptOutputView outputs={outputs} showOutputRating={true} />
            <InfoView setActiveView={setActiveView} />
        </AIPrompt>
    );
};

export default App;
