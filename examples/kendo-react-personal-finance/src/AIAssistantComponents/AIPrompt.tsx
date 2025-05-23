import * as React from 'react';
import { AIPrompt, AIPromptOutputView, AIPromptView, outputViewDefaults, promptViewDefaults } from '@progress/kendo-react-conversational-ui';
import { suggestionsList, suggestionsResponse, unknownRequest } from '../data/ai-data';

const App = () => {
  const [activeView, setActiveView] = React.useState(promptViewDefaults.name);
  const [outputs, setOutputs] = React.useState([]);
  const handleOnRequest = (prompt, output) => {
    if (!prompt) {
      return;
    }
    if (output?.isRetry) {
      const responseContent = getSuggestion(prompt + 'retry');
      setOutputs([{
        id: outputs.length + 1,
        title: prompt,
        responseContent: responseContent?.response || unknownRequest,
        prompt
      }, ...outputs]);
    } else if (output?.ratingType) {
      const responseContent = getSuggestion(prompt);
      setOutputs([{
        id: outputs.length + 1,
        title: prompt,
        responseContent: responseContent?.response || unknownRequest,
        prompt
      }, ...outputs]);
    } else {
      const responseContent = getSuggestion(prompt);
      setOutputs([{
        id: outputs.length + 1,
        title: prompt,
        responseContent: responseContent?.response || unknownRequest,
        prompt
      }, ...outputs]);
    }
    setActiveView(outputViewDefaults.name);
  };
  const handleActiveViewChange = viewName => {
    setActiveView(viewName);
  };
  const getSuggestion = prompt => {
    return suggestionsResponse.find(item => {
      return item.suggestion === prompt && item;
    });
  };
  return <AIPrompt activeView={activeView} onActiveViewChange={handleActiveViewChange} onPromptRequest={handleOnRequest} toolbarItems={[promptViewDefaults, outputViewDefaults]}>
            <AIPromptView promptSuggestions={suggestionsList} />
            <AIPromptOutputView outputs={outputs} />
        </AIPrompt>;
};
export default App;