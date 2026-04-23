---
title: AI Column Assistant
description: 'Learn how to implement an AI Custom Column in the KendoReact Data Grid that provides personalized insights and analysis for individual rows using natural language interactions.'
components: ['datagrid']
slug: ai_custom_column
position: 90
tier: premium
subject: Custom Smart feature of the Grid
---

# KendoReact Data Grid AI Column Assistant

The KendoReact Data Grid can be enhanced with custom AI-powered custom columns that provide personalized insights, summaries, and explanations about individual Grid rows.

By integrating the Inline AI Prompt component with [Custom Cells](slug:cells_grid), you can create an interactive experience where users can ask natural language questions about specific data records and receive contextual AI-generated responses.

> The demos in this article use a Telerik-hosted AI service for demonstration purposes only. For production applications, you should implement your own AI service that understands your specific domain, data, and business requirements.

To implement an AI Custom Column in your Grid:

1. Set up the Grid component with the required columns:

    ```jsx
    <Grid data={gridData}>
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
        <Column field="recentLabResults" title="Recent Lab Results" width={200} cells={{ data: CustomResultsCell }} />
    </Grid>
    ```

1. Add an empty 'AI Assisted Info' column where to fill the returned from AI text.

    ```jsx
    <Column field="aiAssistedInfo" title="AI Assisted Info" width={350} />
    ```

1. Add a dedicated AI custom column with a custom cell component. Use the [`cells` prop](slug:api_grid_gridcolumnprops#toc-cells) to render a custom cell component:

    ```jsx
    <Grid data={gridData}>
        <GridColumn title="AI" width={50} cells={{ data: (props) => <CustomAICell {...props} /> }} />
    </Grid>
    ```

1. Create the custom AI cell component that handles the AI prompt interaction:

    ```jsx
    const CustomAICell = (props) => {
        const [showPrompt, setShowPrompt] = useState(false);
        const [streaming, setStreaming] = useState(false);
        const [outputs, setOutputs] = useState([]);
        const buttonRef = useRef(null);

        const handleClick = () => {
            setShowPrompt(true);
        };

        return (
            <td {...props.tdProps}>
                <Button ref={buttonRef} onClick={handleClick} fillMode="flat" rounded="full" svgIcon={sparklesIcon} />
            </td>
        );
    };
    ```

1. Handle the AI prompt interaction using the InlineAIPrompt component:

    ```jsx
    const handlePromptRequest = (prompt) => {
        setStreaming(true);

        // Perform custom AI service request here
        // Use props.dataItem to access the current row data
        axios({
            url: 'https://your-ai-service.com/api/completion',
            method: 'POST',
            data: {
                prompt: prompt,
                context: props.dataItem
            }
        })
            .then((response) => {
                const newOutput = {
                    id: Date.now(),
                    responseContent: response.data.content,
                    prompt
                };
                setOutputs([newOutput]);
                setStreaming(false);
            })
            .catch((error) => {
                console.error('AI request failed:', error);
                setStreaming(false);
            });
    };

    return (
        <td {...props.tdProps}>
            {showPrompt && (
                <InlineAIPrompt
                    width={400}
                    show={showPrompt}
                    streaming={streaming}
                    promptPlaceholder="Ask for AI assistance about this record..."
                    outputs={outputs}
                    onPromptRequest={handlePromptRequest}
                    anchor={buttonRef.current?.element}
                    popupOptions={{
                        onMouseDownOutside: () => setShowPrompt(false)
                    }}
                />
            )}
            <Button ref={buttonRef} onClick={handleClick} fillMode="flat" rounded="full" svgIcon={sparklesIcon} />
        </td>
    );
    ```

The following example demonstrates a Grid with an AI Custom Column that allows users to ask questions and get insights about specific customer data:

<demo metaUrl="grid/smart/custom-column/" height="540"></demo>

## Suggested Links

-   [Custom Cells Overview](slug:cells_grid)
