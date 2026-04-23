import * as React from 'react';

import { SplitButton, SplitButtonItem } from '@progress/kendo-react-buttons';
import { clipboardHtmlIcon, clipboardMarkdownIcon, clipboardTextIcon } from '@progress/kendo-svg-icons';

import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <SplitButton size="small" text="Small">
                <SplitButtonItem text="Keep Text Only" svgIcon={clipboardTextIcon} />
                <SplitButtonItem text="Paste as HTML" svgIcon={clipboardHtmlIcon} />
                <SplitButtonItem text="Paste Markdown" svgIcon={clipboardMarkdownIcon} />
            </SplitButton>
            <SplitButton size="medium" text="Medium">
                <SplitButtonItem text="Keep Text Only" svgIcon={clipboardTextIcon} />
                <SplitButtonItem text="Paste as HTML" svgIcon={clipboardHtmlIcon} />
                <SplitButtonItem text="Paste Markdown" svgIcon={clipboardMarkdownIcon} />
            </SplitButton>
            <SplitButton size="large" text="Large">
                <SplitButtonItem text="Keep Text Only" svgIcon={clipboardTextIcon} />
                <SplitButtonItem text="Paste as HTML" svgIcon={clipboardHtmlIcon} />
                <SplitButtonItem text="Paste Markdown" svgIcon={clipboardMarkdownIcon} />
            </SplitButton>
        </div>
    );
};

export default App;
