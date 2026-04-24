import * as React from 'react';
import { Grid, GridColumn as Column, GridCustomCellProps } from '@progress/kendo-react-grid';
import axios, { AxiosResponse } from 'axios';
import { patients } from './data';
import { Button, ButtonHandle, Chip } from '@progress/kendo-react-buttons';
import {
    CommandInterface,
    CommandItemInterface,
    InlineAIPrompt,
    InlineAIPromptOutputInterface,
    OutputActionInterface
} from '@progress/kendo-react-conversational-ui';
import { cancelOutlineIcon, copyIcon, insertBottomIcon, sparklesIcon } from '@progress/kendo-svg-icons';

const CustomStatusCell = (props: GridCustomCellProps) => {
    let themeColor;
    switch (props.dataItem.treatmentPlanStatus) {
        case 'Active':
            themeColor = 'info';
            break;
        case 'Stable':
            themeColor = 'success';
            break;
        default:
            themeColor = 'base';
    }

    return (
        <td {...props.tdProps}>
            <Chip text={props.dataItem.treatmentPlanStatus} themeColor={themeColor} />
        </td>
    );
};

const outputActions: OutputActionInterface[] = [
    {
        id: 'copy',
        text: 'Copy',
        svgIcon: copyIcon,
        themeColor: 'primary',
        title: 'Copy'
    },
    {
        id: 'insert',
        text: 'Insert',
        svgIcon: insertBottomIcon,
        themeColor: 'primary',
        title: 'Insert content'
    },
    {
        id: 'discard',
        text: 'Discard',
        svgIcon: cancelOutlineIcon,
        themeColor: 'base',
        title: 'Discard'
    }
];

interface CustomAICellProps extends GridCustomCellProps {
    onUpdateAssistedInfo: (output: InlineAIPromptOutputInterface, dataItem: any) => void;
}

const CustomAICell = (props: CustomAICellProps) => {
    const [showPrompt, setShowPrompt] = React.useState(false);
    const [streaming, setStreaming] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [outputs, setOutputs] = React.useState<any[]>([]);
    const buttonRef = React.useRef<ButtonHandle | null>(null);

    const commands: CommandInterface[] = [
        {
            id: 'summarise',
            text: 'Summarise',
            prompt: () => `Get summary of this patient.Patient:\n${JSON.stringify(props.dataItem, null, 2)}`
        },
        {
            id: 'recommendation',
            text: 'Recommendation',
            prompt: () =>
                `Provide a recommendation based on the following patient data:\n${JSON.stringify(
                    props.dataItem,
                    null,
                    2
                )}`
        },
        {
            id: 'analyze-condition',
            text: 'Analyze condition',
            prompt: () =>
                `Analyze the condition of the following patient and provide insights:\n${JSON.stringify(
                    props.dataItem,
                    null,
                    2
                )}`
        }
    ];

    const onCommandExecute = (commandData: CommandItemInterface) => {
        if (commandData.prompt) {
            const prompt = commandData.prompt('');
            handlePromptRequest(prompt);
        }
    };

    const onResponseSuccess = (req: AxiosResponse<any>, prompt?: string) => {
        const newOutput: InlineAIPromptOutputInterface = {
            id: 1,
            responseContent: req.data.messages[0].contents[0].text,
            prompt
        };
        setOutputs([newOutput]);
        setStreaming(false);
        setLoading(false);
    };

    const onResponseError = (_error: any, prompt?: string) => {
        const errorOutput: InlineAIPromptOutputInterface = {
            id: 1,
            responseContent: 'Sorry, there was an error processing your request.',
            prompt
        };
        setOutputs([errorOutput]);
        setStreaming(false);
        setLoading(false);
    };

    const handlePromptRequest = (prompt: string, outputItem?: InlineAIPromptOutputInterface) => {
        setOutputs((prevOutputs) => [...prevOutputs, { prompt, outputItem }]);
        setStreaming(true);
        setLoading(true);
        axios({
            url: 'https://demos.telerik.com/service/v2/ai/completion',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            withCredentials: false,
            responseType: 'json',
            data: [
                {
                    role: 'user',
                    contents: [
                        {
                            $type: 'text',
                            text: `${prompt}:\n${JSON.stringify(props.dataItem, null, 2)}`
                        }
                    ]
                }
            ]
        })
            .then((e) => onResponseSuccess(e, prompt))
            .catch(onResponseError);
    };

    const handleClick = () => {
        setShowPrompt(true);
    };

    const onOutputAction = (command: OutputActionInterface, output: InlineAIPromptOutputInterface) => {
        switch (command.id) {
            case 'copy': {
                navigator.clipboard.writeText(output.responseContent);
                break;
            }
            case 'insert': {
                props.onUpdateAssistedInfo(output, props.dataItem);
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
        setOutputs([]);
    };

    const onDiscard = (output: InlineAIPromptOutputInterface) => {
        setOutputs((prevOutputs) => prevOutputs.filter((o) => o.id !== output.id));
    };

    return (
        <td {...props.tdProps}>
            {showPrompt && (
                <InlineAIPrompt
                    width={400}
                    show={showPrompt}
                    streaming={streaming}
                    loading={loading}
                    promptPlaceholder={'Ask for AI assistance about this record...'}
                    enableSpeechToText={true}
                    commands={commands}
                    outputActions={outputActions}
                    outputs={outputs}
                    onPromptRequest={handlePromptRequest}
                    onCommandExecute={onCommandExecute}
                    onOutputAction={onOutputAction}
                    onDiscard={onDiscard}
                    anchor={buttonRef.current?.element || undefined}
                    popupOptions={{
                        onMouseDownOutside: () => {
                            setShowPrompt(false);
                        }
                    }}
                />
            )}
            <Button
                themeColor={'primary'}
                ref={buttonRef}
                onClick={handleClick}
                fillMode={'flat'}
                rounded={'full'}
                svgIcon={sparklesIcon}
            />
        </td>
    );
};

const CustomResultsCell = (props: GridCustomCellProps) => {
    return (
        <td {...props.tdProps}>
            {props.dataItem.recentLabResults && typeof props.dataItem.recentLabResults === 'object'
                ? Object.entries(props.dataItem.recentLabResults)
                      .map(([key, value]) => `${key}: ${value}`)
                      .join(', ')
                : 'No recent lab results available.'}
        </td>
    );
};

const App = () => {
    const [patientsData, setPatientsData] = React.useState(patients);
    const onUpdateAssistedInfo = (output: InlineAIPromptOutputInterface, dataItem: any) => {
        // Update the AI assisted info in the data item
        const updatedDataItem = { ...dataItem, aiAssistedInfo: output.responseContent };
        setPatientsData((prevData) =>
            prevData.map((item) => (item.id === updatedDataItem.id ? updatedDataItem : item))
        );
    };

    return (
        <React.StrictMode>
            <Grid autoProcessData={true} size="small" dataItemKey="id" data={patientsData}>
                <Column
                    title="AI"
                    width={50}
                    cells={{ data: (props) => <CustomAICell {...props} onUpdateAssistedInfo={onUpdateAssistedInfo} /> }}
                />
                <Column field="aiAssistedInfo" title="AI Assisted Info" width={350} />
                <Column field="name" title="Patient Name" width={150} />
                <Column field="diagnosis" title="Diagnosis" width={180} />
                <Column
                    field="treatmentPlanStatus"
                    title="Treatment Plan Status"
                    width={180}
                    cells={{ data: (props) => <CustomStatusCell {...props} /> }}
                />
                <Column field="medicationCount" title="Medication Count" width={140} />
                <Column field="riskIndicators" title="Risk Indicators" width={160} />
                <Column
                    field="recentLabResults"
                    title="Recent Lab Results"
                    width={200}
                    cells={{ data: CustomResultsCell }}
                />
            </Grid>
        </React.StrictMode>
    );
};

export default App;
