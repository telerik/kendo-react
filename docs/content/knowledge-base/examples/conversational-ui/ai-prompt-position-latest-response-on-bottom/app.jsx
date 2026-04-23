import * as React from 'react';
import { AIPrompt, AIPromptOutputView, AIPromptView, outputViewDefaults, promptViewDefaults } from '@progress/kendo-react-conversational-ui';
import { suggestionsList, suggestionsResponse, unknownSuggestion } from './ai-data';

const App = () => {
    const [localPrompt, setLocalPrompt] = React.useState();
    const [activeView, setActiveView] = React.useState(promptViewDefaults.name);
    const [outputs, setOutputs] = React.useState([]);

    const handleOnRequest = (prompt, output) => {
        if (!prompt) {
            return;
        }
        if (output?.isRetry) {
            const responseContent = getSuggestion(prompt + 'retry');
            setOutputs([...outputs, {
                id: outputs.length + 1,
                title: prompt,
                responseContent: responseContent?.response || unknownSuggestion,
                prompt
            }]);
        } else if (output?.ratingType) {
            const ratingOutput = outputs.map(item => {
                return output.id === item.id ? {
                    ...item,
                    ratingType: output.ratingType
                } : item;
            });
            setOutputs(ratingOutput);
        } else {
            const responseContent = getSuggestion(prompt);
            setOutputs([...outputs, {
                id: outputs.length + 1,
                title: prompt,
                responseContent: responseContent?.response || unknownSuggestion,
                prompt
            }]);
        }
        setLocalPrompt(prompt);
        setActiveView(outputViewDefaults.name);
    };

    const handleActiveViewChange = viewName => {
        setActiveView(viewName);
    };

    const handleCommandExecute = commandData => {
        const responseItem = getSuggestion(localPrompt || '');
        const commandText = commandData.text;
        setOutputs([...outputs, {
            id: outputs.length + 1,
            title: localPrompt,
            subTitle: commandData.text,
            responseContent: responseItem?.commands && responseItem.commands[commandText] || unknownSuggestion,
            prompt: localPrompt
        }]);
        setActiveView(outputViewDefaults.name);
    };

    const getSuggestion = prompt => {
        return suggestionsResponse.find(item => {
            return item.suggestion === prompt && item;
        });
    };

    return (
    <AIPrompt
      style={{ width: '400px', height: '400px' }}
      activeView={activeView}
      onActiveViewChange={handleActiveViewChange}
      onPromptRequest={handleOnRequest}
      onCommandExecute={handleCommandExecute}
      toolbarItems={[promptViewDefaults, outputViewDefaults]}
    >
      <AIPromptView promptSuggestions={suggestionsList} />
      <AIPromptOutputView outputs={outputs} showOutputRating={true} />
    </AIPrompt>
    );
};

export default App;
