import * as React from 'react';
import {
    AIPromptOutputInterface,
    InlineAIPrompt,
    InlineAIPromptOutputInterface
} from '@progress/kendo-react-conversational-ui';

import { Button } from '@progress/kendo-react-buttons';
import { arrowLeftIcon, sparklesIcon, arrowRightIcon } from '@progress/kendo-svg-icons';

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
                        'You are a chat bot that helps me writing an email. Help me write an email with topic and content related to ' +
                        prompt +
                        '. The response should be a valid JSON object that has subject and body fields. Do not add any other text to the response.'
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
    const [allOutputs, setAllOutputs] = React.useState<InlineAIPromptOutputInterface[]>([]);
    const [currentIndex, setCurrentIndex] = React.useState<number>(-1);
    const [streaming, setStreaming] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string>('');
    const [abortController, setAbortController] = React.useState<AbortController | null>(null);
    const [anchorElement, setAnchorElement] = React.useState<HTMLDivElement | null>(null);

    const CustomButton = (props) => {
        return (
            <Button
                themeColor="primary"
                fillMode="solid"
                svgIcon={sparklesIcon}
                disabled={streaming}
                onClick={props.onClick}
            >
                {streaming ? 'Generating...' : 'Generate'}
            </Button>
        );
    };

    const onPromptRequest = async (prompt: string, outputItem?: InlineAIPromptOutputInterface) => {
        if (!prompt) {
            prompt = 'Generate new response';
        }

        // Create new abort controller for this request
        const controller = new AbortController();
        setAbortController(controller);

        setStreaming(true);

        try {
            const responseContent = await getSuggestion(prompt, controller.signal);

            if (!controller.signal.aborted) {
                const newOutput: InlineAIPromptOutputInterface = {
                    id: Date.now(),
                    responseContent: `${JSON.parse(responseContent).body}`,
                    prompt
                };

                // Add new output to the end of the array and move to it
                setAllOutputs((prev) => [...prev, newOutput]);
                setCurrentIndex((prev) => prev + 1);
            }
        } catch (error) {
            // Handle abort - don't add any output, just stop streaming
            if (error instanceof Error && error.name === 'AbortError') {
                return;
            }

            // Handle other errors
            const errorOutput: InlineAIPromptOutputInterface = {
                id: Date.now(),
                responseContent: 'Sorry, there was an error processing your request.',
                prompt
            };

            // Add error output to the end of the array and move to it
            setAllOutputs((prev) => [...prev, errorOutput]);
            setCurrentIndex((prev) => prev + 1);
        } finally {
            setStreaming(false);
            setAbortController(null);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < allOutputs.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    // Get current output
    const currentOutput = allOutputs[currentIndex] || null;

    const handleCancel = () => {
        if (abortController) {
            abortController.abort();
        }
    };

    return (
        <div ref={setAnchorElement} style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <h2
                    style={{
                        margin: '0 0 8px 0',
                        color: '#333',
                        fontSize: '24px',
                        fontWeight: '600'
                    }}
                >
                    ✉️ AI Email Writing Assistant
                </h2>
                <p
                    style={{
                        margin: '0',
                        color: '#666',
                        fontSize: '14px',
                        lineHeight: '1.4'
                    }}
                >
                    Describe what you want to write about and let AI help you compose a professional email
                </p>
            </div>

            {anchorElement && (
                <InlineAIPrompt
                    width={500}
                    promptPlaceholder="Ask AI to help with your email..."
                    streaming={streaming}
                    enableSpeechToText={{
                        fillMode: 'solid',
                        themeColor: 'primary',
                        size: 'medium'
                    }}
                    popupOptions={{
                        popupAlign: { horizontal: 'center', vertical: 'top' },
                        anchorAlign: { horizontal: 'center', vertical: 'bottom' },
                        anchor: anchorElement
                    }}
                    outputs={currentOutput ? [currentOutput] : []}
                    generateButton={CustomButton}
                    onPromptRequest={onPromptRequest}
                    onPromptCancel={handleCancel}
                    outputCard={{
                        body: (output: AIPromptOutputInterface) => (
                            <div>
                                <div
                                    style={{
                                        marginBottom: '12px',
                                        paddingBottom: '8px',
                                        borderBottom: '2px solid #e9ecef',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        color: '#495057'
                                    }}
                                >
                                    📧 Generated Email
                                </div>
                                <div
                                    style={{
                                        maxHeight: '200px',
                                        overflowY: 'auto',
                                        padding: '12px',
                                        backgroundColor: '#f8f9fa',
                                        borderRadius: '6px',
                                        border: '1px solid #e9ecef'
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: '14px',
                                            lineHeight: '1.5',
                                            color: '#212529',
                                            whiteSpace: 'pre-wrap'
                                        }}
                                    >
                                        {output.responseContent}
                                    </div>
                                </div>
                            </div>
                        ),
                        actions: (output: AIPromptOutputInterface) => (
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <Button
                                    size="small"
                                    themeColor="base"
                                    fillMode="flat"
                                    svgIcon={arrowLeftIcon}
                                    onClick={handlePrevious}
                                    title="Previous response"
                                    disabled={currentIndex <= 0}
                                >
                                    Previous
                                </Button>
                                <Button
                                    size="small"
                                    themeColor="base"
                                    fillMode="flat"
                                    svgIcon={arrowRightIcon}
                                    onClick={handleNext}
                                    title="Next response"
                                    disabled={currentIndex >= allOutputs.length - 1}
                                >
                                    Next
                                </Button>
                            </div>
                        )
                    }}
                    show={true}
                />
            )}
        </div>
    );
};

export default App;
