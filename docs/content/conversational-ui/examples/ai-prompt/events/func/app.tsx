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
import { suggestionsList, promptCommands } from './service-ai-data';

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
    const [events, setEvents] = React.useState<string[]>([]);
    const [localPrompt, setLocalPrompt] = React.useState<string>();
    const [activeView, setActiveView] = React.useState<string>(promptViewDefaults.name);
    const [outputs, setOutputs] = React.useState<AIPromptOutputInterface[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [abortController, setAbortController] = React.useState<AbortController | null>(null);

    const logEvent = (eventName: string) => {
        setEvents((prevEvents) => [eventName, ...prevEvents]);
    };

    const handleOnRequest = async (prompt?: string, output?: AIPromptOutputInterface) => {
        if (!prompt) {
            logEvent(`Request Made: { prompt: ${prompt}}`);
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
                logEvent(`Request Made: { prompt: ${prompt}, output.isRetry: ${output.isRetry}}`);
                responseContent = await getSuggestion(
                    prompt + ' (please provide an alternative response)',
                    controller.signal
                );
            } else if (output?.ratingType) {
                const ratingOutput = outputs.map((item) => {
                    return output.id === item.id ? { ...item, ratingType: output.ratingType } : item;
                });
                setOutputs(ratingOutput);
                logEvent(`Request Made: { prompt: ${prompt}, output.ratingType: ${output.ratingType}}`);
                setIsLoading(false);
                return;
            } else {
                logEvent(`Request Made: { prompt: ${prompt}}`);
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

        setLocalPrompt(prompt);
    };

    const handleActiveViewChange = (viewName: string) => {
        setActiveView(viewName);
        logEvent(`Active View Changed: ${viewName}`);
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
        logEvent(`Command Executed: ${commandData.text}`);
    };

    const handleCancel = () => {
        if (abortController) {
            abortController.abort();
        }
        logEvent('Request Cancelled');
    };

    return (
        <div className="k-d-flex k-gap-3">
            <AIPrompt
                style={{ width: '400px', height: '400px' }}
                activeView={activeView}
                streaming={isLoading}
                loading={isLoading}
                suggestionsView={'modern'}
                onActiveViewChange={handleActiveViewChange}
                onPromptRequest={handleOnRequest}
                onCommandExecute={handleCommandExecute}
                onCancel={handleCancel}
                toolbarItems={[promptViewDefaults, outputViewDefaults, commandsViewDefaults]}
            >
                <AIPromptView promptSuggestions={suggestionsList} />
                <AIPromptOutputView outputs={outputs} showOutputRating={true} />
                <AIPromptCommandsView commands={promptCommands} />
            </AIPrompt>
            <br />
            <div className="example-config">
                <h5>Event Log</h5>
                <ul className="event-log">
                    {events.map((event, index) => (
                        <li key={index}>{event}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
