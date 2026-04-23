import * as React from 'react';

import {
    AIPrompt,
    AIPromptOutputInterface,
    AIPromptOutputView,
    AIPromptView,
    outputViewDefaults,
    promptViewDefaults
} from '@progress/kendo-react-conversational-ui';
import { TextBox, TextAreaProps } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { CustomComponent } from '@progress/kendo-react-common';
import { Loader } from '@progress/kendo-react-indicators';
import { customViewToolbarItem, CustomView } from './custom-view';

import './overview-styles.css';

const App = () => {
    const [activeView, setActiveView] = React.useState<string>(customViewToolbarItem.name);
    const [localPrompt, setLocalPrompt] = React.useState<string>('');
    const [outputs, setOutputs] = React.useState<AIPromptOutputInterface[]>([]);

    const onTextChange = (event: any) => {
        setLocalPrompt(event.target.value?.toString());
    };

    const CustomInput = React.useMemo(() => {
        return <TextBox placeholder="Enter text" value={localPrompt} onChange={onTextChange} />;
    }, [localPrompt]);

    const CustomGenerateButton = () => {
        return (
            <Button
                size={'medium'}
                themeColor={'primary'}
                fillMode={'flat'}
                rounded={'full'}
                svgIcon={undefined}
                onClick={handleOnRequest}
            >
                Generate prompt
            </Button>
        );
    };

    const handleActiveViewChange = (viewName: string) => {
        setActiveView(viewName);
    };

    const handleOnRequest = () => {
        setLoadingCard();
        setTimeout(() => {
            setOutputs([
                {
                    id: outputs.length + 1,
                    title: localPrompt,
                    responseContent: 'Sorry, there was an error processing your request. Please try again.'
                },
                ...outputs
            ]);
        }, 2000);

        setActiveView(outputViewDefaults.name);
    };

    const setLoadingCard = () => {
        setOutputs([
            {
                id: outputs.length + 1,
                title: localPrompt,
                responseContent: 'Loading'
            },
            ...outputs
        ]);
    };

    return (
        <AIPrompt
            style={{ width: '400px', height: '400px' }}
            activeView={activeView}
            suggestionsView={'modern'}
            onActiveViewChange={handleActiveViewChange}
            toolbarItems={[promptViewDefaults, outputViewDefaults, customViewToolbarItem]}
        >
            <AIPromptView
                generateButton={CustomGenerateButton}
                promptInput={CustomInput as unknown as CustomComponent<TextAreaProps>}
            />
            <AIPromptOutputView
                outputs={outputs}
                showOutputRating={true}
                outputCard={{
                    header: (output: AIPromptOutputInterface) => (
                        <div style={{ textAlign: 'center' }}>{output.title}</div>
                    ),
                    body: (output: AIPromptOutputInterface) =>
                        output.responseContent === 'Loading' ? (
                            <div style={{ textAlign: 'center' }}>
                                <Loader type={'infinite-spinner'} />
                            </div>
                        ) : (
                            output.responseContent
                        ),
                    actions: (output: AIPromptOutputInterface) =>
                        output.responseContent === 'Loading' ? (
                            <div />
                        ) : (
                            <Button
                                size={'medium'}
                                themeColor={'primary'}
                                fillMode={'flat'}
                                rounded={'full'}
                                svgIcon={undefined}
                                onClick={() => setActiveView(promptViewDefaults.name)}
                            >
                                Go to Asc AI
                            </Button>
                        )
                }}
            />
            <CustomView setActiveView={setActiveView} />
        </AIPrompt>
    );
};

export default App;
