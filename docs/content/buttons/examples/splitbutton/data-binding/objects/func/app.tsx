import * as React from 'react';

import { SplitButton } from '@progress/kendo-react-buttons';
import { clipboardHtmlIcon, clipboardMarkdownIcon, clipboardTextIcon, SVGIcon } from '@progress/kendo-svg-icons';

interface Item {
    actionName: string;
    svgIcon?: SVGIcon;
}

const items: Item[] = [
    {
        actionName: 'Keep Text Only',
        svgIcon: clipboardTextIcon
    },
    {
        actionName: 'Paste as HTML',
        svgIcon: clipboardHtmlIcon
    },
    {
        actionName: 'Paste Markdown',
        svgIcon: clipboardMarkdownIcon
    },
    {
        actionName: 'Set Default Paste'
    }
];
const App = () => {
    return (
        <div>
            <SplitButton textField="actionName" items={items} text="Paste" />
        </div>
    );
};
export default App;
