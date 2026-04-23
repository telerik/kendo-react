import * as React from 'react';
import { PromptBox, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
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
    const [maxTextAreaHeight, setMaxTextAreaHeight] = React.useState<number>(140);

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const handleSend = () => {
        setPromptValue('');
    };

    return (
        <div className="demo-container">
            <div className="configuration-panel">
                <Label className="label-inline">
                    Max Textarea Height (px)
                    <NumericTextBox
                        value={maxTextAreaHeight}
                        onChange={(e) => setMaxTextAreaHeight(e.value ?? 140)}
                        min={60}
                        max={250}
                        step={10}
                        format="n0"
                        style={{ width: '170px' }}
                    />
                </Label>
            </div>

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
