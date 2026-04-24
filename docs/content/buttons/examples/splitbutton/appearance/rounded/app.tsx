import * as React from 'react';

import { SplitButton, SplitButtonItem } from '@progress/kendo-react-buttons';
import { clipboardHtmlIcon, clipboardMarkdownIcon, clipboardTextIcon } from '@progress/kendo-svg-icons';

import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <SplitButton rounded="small" text="Small">
                <SplitButtonItem text="Keep Text Only" svgIcon={clipboardTextIcon} />
                <SplitButtonItem text="Paste as HTML" svgIcon={clipboardHtmlIcon} />
                <SplitButtonItem text="Paste Markdown" svgIcon={clipboardMarkdownIcon} />
            </SplitButton>
            <SplitButton rounded="medium" text="Medium">
                <SplitButtonItem text="Keep Text Only" svgIcon={clipboardTextIcon} />
                <SplitButtonItem text="Paste as HTML" svgIcon={clipboardHtmlIcon} />
                <SplitButtonItem text="Paste Markdown" svgIcon={clipboardMarkdownIcon} />
            </SplitButton>
            <SplitButton rounded="large" text="Large">
                <SplitButtonItem text="Keep Text Only" svgIcon={clipboardTextIcon} />
                <SplitButtonItem text="Paste as HTML" svgIcon={clipboardHtmlIcon} />
                <SplitButtonItem text="Paste Markdown" svgIcon={clipboardMarkdownIcon} />
            </SplitButton>
            <SplitButton rounded="full" text="Full">
                <SplitButtonItem text="Keep Text Only" svgIcon={clipboardTextIcon} />
                <SplitButtonItem text="Paste as HTML" svgIcon={clipboardHtmlIcon} />
                <SplitButtonItem text="Paste Markdown" svgIcon={clipboardMarkdownIcon} />
            </SplitButton>
            <SplitButton rounded="none" text="None">
                <SplitButtonItem text="Keep Text Only" svgIcon={clipboardTextIcon} />
                <SplitButtonItem text="Paste as HTML" svgIcon={clipboardHtmlIcon} />
                <SplitButtonItem text="Paste Markdown" svgIcon={clipboardMarkdownIcon} />
            </SplitButton>
        </div>
    );
};

export default App;
