import * as React from 'react';
import {
    InlineAIPrompt,
    InlineAIPromptOutputInterface,
    CommandItemInterface,
    OutputActionInterface
} from '@progress/kendo-react-conversational-ui';
import { TextArea, TextAreaHandle } from '@progress/kendo-react-inputs';
import { commands, outputActions } from './service-ai-data';

const getSuggestion = async (prompt: string, signal?: AbortSignal): Promise<string> => {
    const url = 'https://demos.telerik.com/service/v2/ai/completion';
    const data = [
        {
            role: 'user',
            contents: [
                {
                    $type: 'text',
                    text: prompt
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
            signal
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        try {
            const responseText = result.messages[0].contents[0].text;
            return responseText;
        } catch (parseError) {
            return 'Something went wrong. Please try again.';
        }
    } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
            throw error;
        }
        return 'Error making request. Please try again.';
    }
};

const App = () => {
    const [outputs, setOutputs] = React.useState<InlineAIPromptOutputInterface[]>([]);
    const [streaming, setStreaming] = React.useState<boolean>(false);
    const [textareaValue, setTextareaValue] = React.useState<string>(
        'This is a sample text in the textarea. You can select any part of this text to rewrite it using the AI prompt. Try selecting some text and see how the inline AI prompt appears with various commands to help you improve your writing.'
    );
    const [selectedText, setSelectedText] = React.useState<string>('');
    const [selectionRange, setSelectionRange] = React.useState<{
        start: number;
        end: number;
    }>({ start: 0, end: 0 });
    const [showPrompt, setShowPrompt] = React.useState<boolean>(false);
    const textareaRef = React.useRef<TextAreaHandle>(null);
    const abortControllerRef = React.useRef<AbortController | null>(null);

    // Handle text selection in textarea
    const handleTextSelection = () => {
        const textarea = textareaRef.current?.element.current;
        if (!textarea) {
            return;
        }

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selected = textareaValue.substring(start, end);

        if (selected.trim().length > 0) {
            setSelectedText(selected);
            setSelectionRange({ start, end });
            setShowPrompt(true);
        } else {
            setShowPrompt(false);
            setSelectedText('');
            setOutputs([]);
        }
    };

    const onPromptRequest = async (prompt: string) => {
        if (!prompt || !selectedText) {
            return;
        }

        setStreaming(true);
        const abortController = new AbortController();
        abortControllerRef.current = abortController;

        try {
            const responseContent = await getSuggestion(prompt, abortController.signal);

            if (!abortController.signal.aborted) {
                const newOutput: InlineAIPromptOutputInterface = {
                    id: 1,
                    responseContent,
                    prompt
                };
                setOutputs([newOutput]);
            }
        } catch (error) {
            if (error instanceof Error && error.name !== 'AbortError') {
                const errorOutput: InlineAIPromptOutputInterface = {
                    id: 1,
                    responseContent: 'Sorry, there was an error processing your request.',
                    prompt
                };
                setOutputs([errorOutput]);
            }
        } finally {
            setStreaming(false);
            abortControllerRef.current = null;
        }
    };

    const onPromptCancel = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            setStreaming(false);
            abortControllerRef.current = null;
        }
    };

    const onCommandExecute = (commandData: CommandItemInterface) => {
        if (commandData.prompt && selectedText) {
            const prompt = commandData.prompt(selectedText);
            onPromptRequest(prompt);
        }
    };

    const onOutputAction = (command: OutputActionInterface, output: InlineAIPromptOutputInterface) => {
        const textarea = textareaRef.current?.element.current;
        if (!textarea) {
            return;
        }

        const { start, end } = selectionRange;

        switch (command.id) {
            case 'copy': {
                navigator.clipboard.writeText(output.responseContent);
                break;
            }
            case 'insert': {
                const insertedText =
                    textareaValue.substring(0, end) + '\n' + output.responseContent + textareaValue.substring(end);
                setTextareaValue(insertedText);
                break;
            }
            case 'replace': {
                const replacedText =
                    textareaValue.substring(0, start) + output.responseContent + textareaValue.substring(end);
                setTextareaValue(replacedText);
                break;
            }
            case 'discard': {
                onDiscard(output);
                break;
            }
            default: {
                break;
            }
        }

        // Close prompt and clear outputs
        setShowPrompt(false);
        setSelectedText('');
        setOutputs([]);
    };

    const onDiscard = (output: InlineAIPromptOutputInterface) => {
        setOutputs((prevOutputs) => prevOutputs.filter((o) => o.id !== output.id));
    };

    return (
        <div style={{ width: '800px', padding: '20px' }}>
            <div style={{ margin: '0 0 10px 0', color: '#6c757d' }}>
                Select text from the area below to use AI commands:
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                <div style={{ flex: 1 }}>
                    <TextArea
                        ref={textareaRef}
                        value={textareaValue}
                        onChange={(e) => setTextareaValue(e.value)}
                        onSelect={handleTextSelection}
                        onMouseUp={handleTextSelection}
                        placeholder="Type or paste your text here, then select any part to use AI commands..."
                        rows={6}
                        resizable="vertical"
                    />
                </div>

                <div
                    style={{
                        width: '350px',
                        minHeight: '130px',
                        padding: '8px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '4px',
                        overflow: 'auto'
                    }}
                >
                    <strong>Selected text:</strong> {selectedText}
                </div>
            </div>

            {showPrompt && (
                <InlineAIPrompt
                    width={544}
                    streaming={streaming}
                    enableSpeechToText={true}
                    outputs={outputs}
                    anchor={textareaRef.current?.element.current || undefined}
                    commands={commands}
                    onCommandExecute={onCommandExecute}
                    onPromptRequest={onPromptRequest}
                    onPromptCancel={onPromptCancel}
                    outputActions={outputActions}
                    onOutputAction={onOutputAction}
                    onDiscard={onDiscard}
                    show={showPrompt}
                />
            )}
        </div>
    );
};

export default App;
