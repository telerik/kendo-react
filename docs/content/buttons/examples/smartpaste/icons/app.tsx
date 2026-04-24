import * as React from 'react';
import { SmartPasteButton } from '@progress/kendo-react-buttons';
import { sparklesIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <SmartPasteButton />
            <SmartPasteButton>Default Icon</SmartPasteButton>
            <SmartPasteButton svgIcon={sparklesIcon} />
            <SmartPasteButton svgIcon={sparklesIcon}>Custom Icon</SmartPasteButton>
        </div>
    );
};

export default App;
