import * as React from 'react';
import {
    AIPrompt,
    AIPromptOutputInterface,
    AIPromptOutputView,
    AIPromptView,
    outputViewDefaults,
    promptViewDefaults
} from '@progress/kendo-react-conversational-ui';

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
    const [isStreaming, setIsStreaming] = React.useState<boolean>(false);
    const [abortController, setAbortController] = React.useState<AbortController | null>(null);

    const promptSuggestions = [
        'Explain React hooks',
        'How to optimize performance?',
        'Best practices for TypeScript',
        'What are design patterns?'
    ];

    const handleOnRequest = async (prompt?: string, output?: AIPromptOutputInterface) => {
        if (!prompt) {
            return;
        }

        // Create new abort controller for this request
        const controller = new AbortController();
        setAbortController(controller);

        setIsLoading(true);
        setIsStreaming(true);
        setActiveView(outputViewDefaults.name); // Switch to output view when streaming starts

        try {
            let responseContent: string;

            if (output?.isRetry) {
                // Handle retry - get a new response
                responseContent = await getSuggestion(
                    prompt + ' (please provide an alternative response)',
                    controller.signal
                );
            } else if (output?.ratingType) {
                // Handle rating - could log the rating and still provide a response
                responseContent = await getSuggestion(prompt, controller.signal);
            } else {
                // Regular request
                responseContent = await getSuggestion(prompt, controller.signal);
            }

            // Set loading to false after getSuggestion completes
            setIsLoading(false);

            // Streaming output in chunks
            const newOutput: AIPromptOutputInterface = {
                id: outputs.length + 1,
                title: prompt,
                responseContent: '',
                prompt
            };

            setOutputs((prevOutputs) => [newOutput, ...prevOutputs]);

            // Simulate streaming by splitting responseContent into chunks
            const chunkSize = 20;
            let currentIndex = 0;
            while (currentIndex < responseContent.length && !controller.signal.aborted) {
                await new Promise((resolve) => setTimeout(resolve, 100));

                if (controller.signal.aborted) {
                    break;
                }

                const nextChunk = responseContent.slice(0, currentIndex + chunkSize);
                setOutputs((prevOutputs) => {
                    const updated = [...prevOutputs];
                    if (updated[0]?.id === newOutput.id) {
                        updated[0] = {
                            ...updated[0],
                            responseContent: nextChunk
                        };
                    }
                    return updated;
                });
                currentIndex += chunkSize;
            }
            setActiveView(outputViewDefaults.name);
        } catch (error) {
            // Handle abort - don't add any output, just stop streaming
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
            setActiveView(outputViewDefaults.name);
        } finally {
            setIsLoading(false);
            setIsStreaming(false);
            setAbortController(null);
        }
    };

    const handleActiveViewChange = (viewName: string) => {
        setActiveView(viewName);
    };

    const handleCancel = () => {
        if (abortController) {
            abortController.abort();
        }
    };

    return (
        <AIPrompt
            style={{ width: '400px', height: '500px' }}
            activeView={activeView}
            streaming={isStreaming}
            loading={isLoading}
            suggestionsView={'modern'}
            onActiveViewChange={handleActiveViewChange}
            onPromptRequest={handleOnRequest}
            onCancel={handleCancel}
            toolbarItems={[promptViewDefaults, outputViewDefaults]}
        >
            <AIPromptView promptSuggestions={promptSuggestions} enableSpeechToText={true} />
            <AIPromptOutputView outputs={outputs} />
        </AIPrompt>
    );
};

export default App;
