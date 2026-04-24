import * as React from 'react';
import {
    AIPromptOutputInterface,
    InlineAIPrompt,
    InlineAIPromptOutputInterface
} from '@progress/kendo-react-conversational-ui';

import { getSuggestion } from './service-ai-data';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [outputs, setOutputs] = React.useState<InlineAIPromptOutputInterface[]>([]);
    const [streaming, setStreaming] = React.useState<boolean>(false);
    const [abortController, setAbortController] = React.useState<AbortController | null>(null);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    const handleOnRequest = async (prompt?: string, output?: AIPromptOutputInterface) => {
        if (!prompt) {
            return;
        }

        // Create new abort controller for this request
        const controller = new AbortController();
        setAbortController(controller);

        setStreaming(true);

        try {
            let responseContent: string;

            if (output?.isRetry) {
                responseContent = await getSuggestion(
                    prompt + ' (please provide an alternative response)',
                    controller.signal
                );
            } else if (output?.ratingType) {
                return;
            } else {
                responseContent = await getSuggestion(prompt, controller.signal);
            }

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

                // Scroll to bottom after each chunk
                setTimeout(() => scrollToBottom(), 50);

                currentIndex += chunkSize;
            }
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
        } finally {
            setStreaming(false);
            setAbortController(null);
        }
    };
    const handleCancel = () => {
        if (abortController) {
            abortController.abort();
        }
    };
    const handleDiscard = (output: AIPromptOutputInterface) => {
        setOutputs((prevOutputs) => prevOutputs.filter((item) => item.id !== output.id));
    };

    return (
        <div className="k-d-flex-col k-align-items-center">
            <Label>Inline AIPrompt</Label>
            <InlineAIPrompt
                popupOptions={{
                    popupAlign: { horizontal: 'center', vertical: 'bottom' },
                    anchorAlign: { horizontal: 'center', vertical: 'bottom' },
                    anchor: document.body
                }}
                width={'100%'}
                streaming={streaming}
                outputs={outputs}
                onPromptRequest={handleOnRequest}
                onPromptCancel={handleCancel}
                onDiscard={handleDiscard}
                show={true}
            />
        </div>
    );
};

export default App;
