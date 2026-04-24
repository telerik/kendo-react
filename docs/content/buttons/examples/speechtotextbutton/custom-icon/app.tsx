import React from 'react';
import { SpeechToTextButton } from '@progress/kendo-react-buttons';
import { starIcon, searchIcon, sharpenIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const App = () => {
    return (
        <div className="custom-icon-examples">
            <div>
                <span>Star Icon</span>
                <SpeechToTextButton svgIcon={starIcon} />
            </div>
            <div>
                <span>Search Icon</span>
                <SpeechToTextButton svgIcon={searchIcon} />
            </div>
            <div>
                <span>Sharpen Icon</span>
                <SpeechToTextButton svgIcon={sharpenIcon} />
            </div>
        </div>
    );
};

export default App;
