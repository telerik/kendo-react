import * as React from 'react';
import { PromptBox, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { starIcon, bookIcon, heartIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const App = () => {
    const [promptValue, setPromptValue] = React.useState<string>(
        'Compare different machine learning algorithms for classification tasks'
    );
    const [isPromptBoxDisabled, setIsPromptBoxDisabled] = React.useState<boolean>(false);
    const [areAdornmentsDisabled, setAreAdornmentsDisabled] = React.useState<boolean>(false);

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const togglePromptBox = () => {
        setIsPromptBoxDisabled(!isPromptBoxDisabled);
    };

    const toggleAdornments = () => {
        setAreAdornmentsDisabled(!areAdornmentsDisabled);
    };

    const handleSend = () => {
        setPromptValue('');
    };

    const handleFavorite = () => {
        console.log('Added to favorites');
    };

    const handleBookmark = () => {
        console.log('Prompt bookmarked');
    };

    const handleLike = () => {
        console.log('Prompt liked');
    };

    return (
        <div className="demo-container">
            <div className="example-buttons">
                <Button onClick={togglePromptBox}>{isPromptBoxDisabled ? 'Enable' : 'Disable'} PromptBox</Button>
                <Button onClick={toggleAdornments}>{areAdornmentsDisabled ? 'Enable' : 'Disable'} Adornments</Button>
            </div>
            <PromptBox
                value={promptValue}
                onChange={handleValueChange}
                mode="single"
                disabled={isPromptBoxDisabled}
                placeholder="Type your message..."
                onPromptAction={handleSend}
                uploadButtonConfig={true}
                startAffix={
                    <Button
                        svgIcon={starIcon}
                        fillMode="flat"
                        rounded="full"
                        disabled={areAdornmentsDisabled}
                        title="Add to favorites"
                        onClick={handleFavorite}
                    />
                }
                endAffix={
                    <>
                        <Button
                            svgIcon={bookIcon}
                            fillMode="flat"
                            rounded="full"
                            disabled={areAdornmentsDisabled}
                            title="Bookmark prompt"
                            onClick={handleBookmark}
                        />
                        <Button
                            svgIcon={heartIcon}
                            fillMode="flat"
                            rounded="full"
                            disabled={areAdornmentsDisabled}
                            title="Like prompt"
                            onClick={handleLike}
                        />
                    </>
                }
            />
        </div>
    );
};

export default App;
