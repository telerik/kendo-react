import * as React from 'react';

import {
    AIPrompt,
    AIPromptCommandsView,
    AIPromptOutputInterface,
    AIPromptOutputView,
    CommandItemInterface,
    commandsViewDefaults,
    outputViewDefaults
} from '@progress/kendo-react-conversational-ui';
import { promptCommands, suggestionsList } from './service-ai-data';

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
    const defaultPrompt = 'Out of office';
    const [localPrompt, setLocalPrompt] = React.useState<string>(suggestionsList[0]);
    const [activeView, setActiveView] = React.useState<string>(commandsViewDefaults.name);
    const [outputs, setOutputs] = React.useState<AIPromptOutputInterface[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [abortController, setAbortController] = React.useState<AbortController | null>(null);

    const handleOnRequest = async (prompt?: string, output?: AIPromptOutputInterface) => {
        if (!localPrompt) {
            return;
        }

        // Create new abort controller for this request
        const controller = new AbortController();
        setAbortController(controller);

        setIsLoading(true);
        setActiveView(outputViewDefaults.name);

        try {
            let responseContent: string;

            if (output?.isRetry) {
                // Handle retry - get a new response
                responseContent = await getSuggestion(
                    localPrompt + ' (please provide an alternative response)',
                    controller.signal
                );
            } else {
                // Regular request
                responseContent = await getSuggestion(localPrompt, controller.signal);
            }

            const newOutput: AIPromptOutputInterface = {
                id: outputs.length + 1,
                title: localPrompt,
                responseContent: responseContent,
                prompt: localPrompt
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
                title: localPrompt,
                responseContent: 'Sorry, there was an error processing your request. Please try again.',
                prompt: localPrompt
            };
            setOutputs((prevOutputs) => [errorOutput, ...prevOutputs]);
        } finally {
            setIsLoading(false);
            setAbortController(null);
        }

        if (output?.ratingType) {
            const ratingOutput = outputs.map((item) => {
                return output.id === item.id ? { ...item, ratingType: output.ratingType } : item;
            });
            setOutputs(ratingOutput);
        }

        setLocalPrompt(prompt || '');
    };

    React.useEffect(() => {
        // Initial load with default prompt
        const initializeWithDefaultPrompt = async () => {
            try {
                const responseContent = await getSuggestion(defaultPrompt);
                setOutputs([
                    {
                        id: 1,
                        title: localPrompt,
                        responseContent: responseContent,
                        prompt: localPrompt
                    }
                ]);
            } catch (error) {
                setOutputs([
                    {
                        id: 1,
                        title: localPrompt,
                        responseContent: 'Sorry, there was an error processing your request. Please try again.',
                        prompt: localPrompt
                    }
                ]);
            }
        };
        initializeWithDefaultPrompt();
    }, []);

    const handleActiveViewChange = (viewName: string) => {
        setActiveView(viewName);
    };

    const handleCommandExecute = async (commandData: CommandItemInterface) => {
        if (!localPrompt) return;

        try {
            setIsLoading(true);
            // Create a prompt that incorporates the command action
            let commandPrompt = '';
            switch (commandData.text.toLowerCase()) {
                case 'simplify':
                    commandPrompt = `Please simplify the following text: "${localPrompt}"`;
                    break;
                case 'expand':
                    commandPrompt = `Please expand and provide more details about: "${localPrompt}"`;
                    break;
                case 'formal':
                    commandPrompt = `Please rewrite the following text in a formal tone: "${localPrompt}"`;
                    break;
                case 'casual':
                    commandPrompt = `Please rewrite the following text in a casual tone: "${localPrompt}"`;
                    break;
                case 'neutral':
                    commandPrompt = `Please rewrite the following text in a neutral tone: "${localPrompt}"`;
                    break;
                case 'german':
                    commandPrompt = `Please translate the following text to German: "${localPrompt}"`;
                    break;
                case 'spanish':
                    commandPrompt = `Please translate the following text to Spanish: "${localPrompt}"`;
                    break;
                default:
                    commandPrompt = `Please apply the "${commandData.text}" action to: "${localPrompt}"`;
            }

            const responseContent = await getSuggestion(commandPrompt);

            setOutputs((prevOutputs) => [
                {
                    id: prevOutputs.length + 1,
                    title: localPrompt,
                    subTitle: commandData.text,
                    responseContent: responseContent,
                    prompt: localPrompt
                },
                ...prevOutputs
            ]);
        } catch (error) {
            setOutputs((prevOutputs) => [
                {
                    id: prevOutputs.length + 1,
                    title: localPrompt,
                    subTitle: commandData.text,
                    responseContent: 'Sorry, there was an error processing your request. Please try again.',
                    prompt: localPrompt
                },
                ...prevOutputs
            ]);
        } finally {
            setIsLoading(false);
        }

        setActiveView(outputViewDefaults.name);
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
            onActiveViewChange={handleActiveViewChange}
            onPromptRequest={handleOnRequest}
            onCommandExecute={handleCommandExecute}
            onCancel={handleCancel}
            toolbarItems={[outputViewDefaults, commandsViewDefaults]}
        >
            <AIPromptOutputView outputs={outputs} showOutputRating={true} />
            <AIPromptCommandsView commands={promptCommands} />
        </AIPrompt>
    );
};

export default App;
