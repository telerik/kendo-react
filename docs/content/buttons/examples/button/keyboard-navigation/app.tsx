import * as React from 'react';
import { useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [firstButtonInstructions, setFirstButtonInstructions] = useState<string>('');
    const [secondButtonInfo, setSecondButtonInfo] = useState<string>('');

    const handleFirstButtonClick = () => {
        const currentDate = new Date();
        setFirstButtonInstructions(
            `Last clicked at ${currentDate.toLocaleTimeString()} on ${currentDate.toLocaleDateString()}. ` +
                `Now you can press Enter or Space to click me again. ` +
                `You can also press Tab to get to the next button and activate it with the keyboard too.`
        );
    };

    const handleSecondButtonClick = () => {
        setSecondButtonInfo('You can also press Shift + Tab to go back to the previous button.');
    };

    return (
        <div className="example-wrapper">
            <p>
                <Button onClick={handleFirstButtonClick} themeColor={'primary'} type="button">
                    Click me!
                </Button>
            </p>
            <p>{firstButtonInstructions}</p>
            <p>
                <Button onClick={handleSecondButtonClick} type="button">
                    Tab here and press Enter or Space
                </Button>
            </p>
            <p>{secondButtonInfo}</p>
        </div>
    );
};

export default App;
