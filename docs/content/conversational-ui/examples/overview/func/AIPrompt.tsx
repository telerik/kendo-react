import * as React from 'react';
import {
    AIPrompt,
    AIPromptOutputInterface,
    AIPromptCommandsView,
    AIPromptOutputView,
    AIPromptView,
    outputViewDefaults,
    CommandItemInterface,
    commandsViewDefaults,
    promptViewDefaults
} from '@progress/kendo-react-conversational-ui';
import { bookIcon, infoCircleIcon, shareIcon, starIcon } from '@progress/kendo-svg-icons';

interface OverviewAIPromptProps {
    activeView: string;
    outputs: AIPromptOutputInterface[];
    onActiveViewChange: (viewName: string) => void;
    onPromptRequest: (prompt?: string, output?: AIPromptOutputInterface) => void;
    onCommandExecute: (command: CommandItemInterface) => void;
}

const promptSuggestions = [
    'Build a 10-day Tokyo & Kyoto itinerary with day-by-day schedule',
    'Recommend top 10 restaurants in Tokyo for a foodie traveler',
    'Create a Japan packing list for late October weather',
    'Plan a day trip from Kyoto to Nara including temple visits'
];

const promptCommands: CommandItemInterface[] = [
    { id: '1', text: 'Save to Trip Folder', svgIcon: bookIcon },
    { id: '2', text: 'Share with Travel Buddy', svgIcon: shareIcon },
    { id: '3', text: 'Find Budget Alternatives', svgIcon: starIcon },
    { id: '4', text: 'Add Accessibility Notes', svgIcon: infoCircleIcon }
];

const outputCard = {
    body: (output: AIPromptOutputInterface) => {
        return <div className="output-body" dangerouslySetInnerHTML={{ __html: output.responseContent || '' }} />;
    }
};

const OverviewAIPrompt = ({
    activeView,
    outputs,
    onActiveViewChange,
    onPromptRequest,
    onCommandExecute
}: OverviewAIPromptProps) => {
    return (
        <AIPrompt
            className="aiprompt"
            activeView={activeView}
            onActiveViewChange={onActiveViewChange}
            onPromptRequest={onPromptRequest}
            onCommandExecute={onCommandExecute}
            toolbarItems={[promptViewDefaults, outputViewDefaults, commandsViewDefaults]}
        >
            <AIPromptView promptSuggestions={promptSuggestions} />
            <AIPromptOutputView outputs={outputs} outputCard={outputCard} />
            <AIPromptCommandsView commands={promptCommands} />
        </AIPrompt>
    );
};

export default OverviewAIPrompt;
