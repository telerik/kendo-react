import * as React from 'react';
import { SmartPasteButton } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <SmartPasteButton fillMode="solid">Solid</SmartPasteButton>
            <SmartPasteButton fillMode="flat">Flat</SmartPasteButton>
            <SmartPasteButton fillMode="outline">Outline</SmartPasteButton>
            <SmartPasteButton fillMode="clear">Clear</SmartPasteButton>
            <SmartPasteButton fillMode="link">Link</SmartPasteButton>
        </div>
    );
};

export default App;
