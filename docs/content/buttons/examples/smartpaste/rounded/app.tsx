import * as React from 'react';
import { SmartPasteButton } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <SmartPasteButton rounded="none">None</SmartPasteButton>
            <SmartPasteButton rounded="small">Small</SmartPasteButton>
            <SmartPasteButton rounded="medium">Medium</SmartPasteButton>
            <SmartPasteButton rounded="large">Large</SmartPasteButton>
            <SmartPasteButton rounded="full">Full</SmartPasteButton>
        </div>
    );
};

export default App;
