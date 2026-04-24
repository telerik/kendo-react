import * as React from 'react';
import AIPrompt from './AIPrompt';
import InlineAIPrompt from './InlineAIPrompt';
import Chat from './Chat';
import './styles.css';

const App = () => {
    return (
        <div>
            <div className="demo-container">
                <Chat />
                <AIPrompt />
            </div>

            <InlineAIPrompt />
        </div>
    );
};

export default App;
