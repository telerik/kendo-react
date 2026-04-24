import * as React from 'react';

import {
    AIPrompt,
    AIPromptCommandsView,
    AIPromptOutputInterface,
    AIPromptOutputView,
    AIPromptView,
    CommandItemInterface,
    commandsViewDefaults,
    outputViewDefaults,
    promptViewDefaults
} from '@progress/kendo-react-conversational-ui';
import { MouseDownOutsideEvent, Popup } from '@progress/kendo-react-popup';
import { TextArea, TextAreaChangeEvent } from '@progress/kendo-react-inputs';
import { xIcon, sparklesIcon } from '@progress/kendo-svg-icons';
import { FloatingActionButton } from '@progress/kendo-react-buttons';

import { promptCommands, suggestionsList } from './service-ai-data';

import './overview-styles.css';
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
const defaultContent =
    'Thank you for your message. \n\nI am currently out of the office and will not be available until [return date]. If your matter is urgent, please contact [alternative contact person or department] at [contact information]. I will respond to your message as soon as I return. \n\nThank you for your patience.';
const App = () => {
    const anchorRef = React.useRef<any>(null);

    const [textAreaValue, setTextAreaValue] = React.useState<string>(defaultContent);
    const [showAIPrompt, setShowAIPrompt] = React.useState<boolean>(false);
    const [activeView, setActiveView] = React.useState<string>(promptViewDefaults.name);
    const [outputs, setOutputs] = React.useState<AIPromptOutputInterface[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isStreaming, setIsStreaming] = React.useState<boolean>(false);
    const [abortController, setAbortController] = React.useState<AbortController | null>(null);

    const toggleAIPrompt = () => {
        setShowAIPrompt(!showAIPrompt);
    };
    const handleOutsideClick = (event: MouseDownOutsideEvent) => {
        !event.isAnchorClicked && toggleAIPrompt();
    };
    const handleTextAreaChange = (event: TextAreaChangeEvent) => {
        setTextAreaValue(event.value);
    };

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

            // Only set the textarea value if the operation wasn't cancelled
            if (!controller.signal.aborted) {
                setTextAreaValue(responseContent);
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

    async function handleCommandExecute(command: CommandItemInterface): Promise<void> {
        // When a command is executed, use its prompt and the current textAreaValue to make a request
        if (command.prompt && textAreaValue) {
            const prompt = command.prompt(textAreaValue);
            handleOnRequest(prompt);
            setActiveView(outputViewDefaults.name);
        }
    }

    return (
        <div className="hobbies-demo card-container">
            <div className="k-card custom-card">
                <div className="card-row">
                    <div className="card-column no-flex">
                        <div className="sidebar-container k-skeleton">
                            <div className="description-container">
                                <div className="k-skeleton skeleton-small-text" />
                                <div className="k-skeleton skeleton-small-text" />
                                <div className="k-skeleton skeleton-small-text" />
                            </div>
                        </div>
                    </div>
                    <div className="card-column">
                        <div className="avatar-title-container">
                            <div className="k-skeleton skeleton-avatar" />
                            <h4 className="k-h4">New E-mail</h4>
                        </div>
                        <div className="skeleton-container top">
                            <div className="k-skeleton skeleton-box-small" />
                            <div className="k-skeleton skeleton-box-large" />
                        </div>
                        <div className="skeleton-container top">
                            <div className="k-skeleton skeleton-box-large" />
                        </div>
                        <div className="component-container">
                            <div>Message body</div>
                            <TextArea
                                style={{ height: '300px' }}
                                value={textAreaValue}
                                onChange={handleTextAreaChange}
                            />
                            <FloatingActionButton
                                style={{ zIndex: 2 }}
                                ref={anchorRef}
                                svgIcon={showAIPrompt ? xIcon : sparklesIcon}
                                align={{
                                    horizontal: 'end',
                                    vertical: 'bottom'
                                }}
                                alignOffset={{
                                    x: 40,
                                    y: 40
                                }}
                                positionMode="absolute"
                                onClick={toggleAIPrompt}
                            />
                            <Popup
                                anchor={anchorRef.current?.element}
                                show={showAIPrompt}
                                popupAlign={{ vertical: 'bottom', horizontal: 'right' }}
                                anchorAlign={{ vertical: 'bottom', horizontal: 'left' }}
                                onMouseDownOutside={handleOutsideClick}
                                margin={{ horizontal: 10, vertical: 25 }}
                            >
                                <AIPrompt
                                    style={{ width: '400px', height: '400px' }}
                                    activeView={activeView}
                                    loading={isLoading}
                                    streaming={isStreaming}
                                    suggestionsView={'modern'}
                                    onActiveViewChange={handleActiveViewChange}
                                    onCommandExecute={handleCommandExecute}
                                    onPromptRequest={handleOnRequest}
                                    onCancel={handleCancel}
                                    toolbarItems={[promptViewDefaults, outputViewDefaults, commandsViewDefaults]}
                                >
                                    <AIPromptView enableSpeechToText promptSuggestions={suggestionsList} />
                                    <AIPromptOutputView outputs={outputs} />
                                    <AIPromptCommandsView commands={promptCommands} />
                                </AIPrompt>
                            </Popup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
