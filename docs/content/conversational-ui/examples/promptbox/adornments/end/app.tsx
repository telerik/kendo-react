import * as React from 'react';
import { PromptBox, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { trashIcon, heartIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const App = () => {
    const [promptValue, setPromptValue] = React.useState<string>('Summarize the benefits of renewable energy');
    const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const setShortText = () => {
        setPromptValue('What are neural networks?');
    };

    const setLongText = () => {
        setPromptValue(`Create a comprehensive project plan for implementing a customer relationship management (CRM) system:

1. Requirements Gathering:
   - Identify key stakeholders and their needs
   - Document current processes and pain points
   - Define success criteria and KPIs

2. Technical Architecture:
   - Select appropriate technology stack
   - Design database schema and data models
   - Plan integration with existing systems

3. Implementation Roadmap:
   - Phase 1: Core functionality and user management
   - Phase 2: Advanced features and customization
   - Phase 3: Analytics and reporting capabilities

4. Training and Adoption:
   - Develop user training materials
   - Schedule onboarding sessions
   - Establish support channels and documentation`);
    };

    const clearText = () => {
        setPromptValue('');
    };

    const handleSend = () => {
        setPromptValue('');
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const clearPrompt = () => {
        setPromptValue('');
    };

    return (
        <div className="demo-container">
            <div className="example-buttons">
                <Button onClick={setShortText}>Short Prompt</Button>
                <Button onClick={setLongText}>Long Prompt</Button>
                <Button onClick={clearText}>Clear</Button>
            </div>
            <PromptBox
                value={promptValue}
                onChange={handleValueChange}
                mode="auto"
                maxTextAreaHeight="200"
                placeholder="Start typing to see the affix position change..."
                onPromptAction={handleSend}
                uploadButtonConfig={true}
                endAffix={
                    <>
                        <Button
                            svgIcon={heartIcon}
                            fillMode="flat"
                            rounded="full"
                            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                            themeColor={isFavorite ? 'error' : 'base'}
                            onClick={toggleFavorite}
                        />
                        <Button
                            svgIcon={trashIcon}
                            fillMode="flat"
                            rounded="full"
                            title="Clear prompt"
                            disabled={!promptValue}
                            onClick={clearPrompt}
                        />
                    </>
                }
            />
        </div>
    );
};

export default App;
