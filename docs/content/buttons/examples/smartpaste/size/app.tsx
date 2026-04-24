import * as React from 'react';
import { SmartPasteButton } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <SmartPasteButton size="small">Small</SmartPasteButton>
            <SmartPasteButton size="medium">Medium</SmartPasteButton>
            <SmartPasteButton size="large">Large</SmartPasteButton>
        </div>
    );
};

export default App;
