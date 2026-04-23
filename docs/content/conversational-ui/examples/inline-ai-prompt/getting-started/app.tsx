import * as React from 'react';
import {
    InlineAIPrompt,
    InlineAIPromptOutputInterface,
    CommandInterface
} from '@progress/kendo-react-conversational-ui';
import './styles.css';

const commands: CommandInterface[] = [
    {
        id: 'email-formal',
        text: 'Formal email',
        prompt: (input: string) => `Write a formal email about: ${input}`
    },
    {
        id: 'email-friendly',
        text: 'Friendly email',
        prompt: (input: string) => `Write a friendly email about: ${input}`
    },
    {
        id: 'email-brief',
        text: 'Brief email',
        prompt: (input: string) => `Write a brief email about: ${input}`
    }
];

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
                        '. Make the email as short as possible. The response should be a valid JSON object that has subject and body fields. Do not add any other text to the response. Remove all formatting.'
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
    const [outputs, setOutputs] = React.useState<InlineAIPromptOutputInterface[]>([]);
    const [streaming, setStreaming] = React.useState<boolean>(false);
    const [abortController, setAbortController] = React.useState<AbortController | null>(null);

    const onPromptRequest = async (prompt: string) => {
        if (!prompt) {
            return;
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
                    responseContent: `AI Response: ${JSON.parse(responseContent).body}`,
                    prompt
                };

                setOutputs((prevOutputs) => [...prevOutputs, newOutput]);
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
            setOutputs((prevOutputs) => [...prevOutputs, errorOutput]);
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

    const handleDiscard = (output: InlineAIPromptOutputInterface) => {
        setOutputs((prevOutputs) => prevOutputs.filter((o) => o.id !== output.id));
    };

    const onCommandExecute = (command: CommandInterface) => {
        if (command.prompt && typeof command.prompt === 'function') {
            const prompt = command.prompt('');
            onPromptRequest(prompt);
        }
    };

    return (
        <InlineAIPrompt
            width={544}
            popupOptions={{
                anchorAlign: { horizontal: 'center', vertical: 'top' },
                popupAlign: { horizontal: 'center', vertical: 'top' },
                anchor: document.body,
                offset: { x: 0, y: 60 }
            }}
            streaming={streaming}
            outputs={outputs}
            commands={commands}
            onCommandExecute={onCommandExecute}
            onPromptRequest={onPromptRequest}
            onPromptCancel={handleCancel}
            onDiscard={handleDiscard}
            show={true}
        />
    );
};

export default App;
