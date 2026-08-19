import * as React from 'react';
import { PromptBox, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import { useConfigurator } from '@docs-shared/configurator';
import './styles.css';

const App = () => {
    const [promptValue, setPromptValue] =
        React.useState<string>(`Analyze our Q4 financial performance and provide a comprehensive strategic assessment covering the following areas:

1. Revenue Analysis:
   - Compare Q4 revenue against Q3 and the same quarter last year
   - Identify which product lines or services drove the most growth
   - Analyze revenue by geographic region and customer segment

2. Cost Structure and Efficiency:
   - Evaluate operational expenses as a percentage of revenue
   - Suggest opportunities for cost optimization without impacting quality
   - Compare our cost efficiency metrics against industry benchmarks

3. Market Positioning:
   - Assess our market share trends in key product categories
   - Identify emerging market opportunities we should prioritize

Please structure your analysis with clear sections, supporting data points, and actionable recommendations.`);
    const config = useConfigurator({
        sections: [
            {
                label: 'Max Text Area Height (px)',
                controls: [
                    {
                        type: 'numericTextBox',
                        name: 'maxTextAreaHeight',
                        min: 60,
                        max: 250,
                        step: 10,
                        defaultValue: 140
                    }
                ]
            }
        ]
    });
    const maxTextAreaHeight = config.maxTextAreaHeight ?? 140;

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const handleSend = () => {
        setPromptValue('');
    };

    return (
        <div className="demo-container">
            <PromptBox
                value={promptValue}
                onChange={handleValueChange}
                mode="multi"
                rows={4}
                maxTextAreaHeight={maxTextAreaHeight.toString()}
                uploadButtonConfig={true}
                placeholder="Type a detailed request..."
                onPromptAction={handleSend}
            />
        </div>
    );
};

export default App;
