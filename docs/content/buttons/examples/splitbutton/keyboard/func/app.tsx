import * as React from 'react';

import { SplitButton, SplitButtonItem } from '@progress/kendo-react-buttons';
import { clipboardTextIcon, clipboardHtmlIcon, clipboardMarkdownIcon, copyIcon } from '@progress/kendo-svg-icons';

const App = () => {
    return (
        <div>
            <SplitButton text="Paste">
                <SplitButtonItem text="Keep Text Only" svgIcon={clipboardTextIcon} />
                <SplitButtonItem text="Paste as HTML" svgIcon={clipboardHtmlIcon} />
                <SplitButtonItem text="Paste Markdown" svgIcon={clipboardMarkdownIcon} />
                <SplitButtonItem text="Set Default Paste" svgIcon={copyIcon} />
            </SplitButton>
        </div>
    );
};
export default App;
