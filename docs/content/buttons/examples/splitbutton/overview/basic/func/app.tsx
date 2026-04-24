import * as React from 'react';

import { SplitButton } from '@progress/kendo-react-buttons';
import { clipboardHtmlIcon, clipboardTextIcon, SVGIcon } from '@progress/kendo-svg-icons';

interface Item {
    text: string;
    svgIcon?: SVGIcon;
}

const items: Item[] = [
    {
        text: 'Keep Text Only',
        svgIcon: clipboardTextIcon
    },
    {
        text: 'Paste as HTML',
        svgIcon: clipboardHtmlIcon
    },
    {
        text: 'Paste Markdown',
        svgIcon: clipboardHtmlIcon
    },
    {
        text: 'Set Default Paste'
    }
];
const ButtonContainer = () => {
    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 example-col">
                <p>Default Button</p>
                <SplitButton text="Paste" items={items} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <p>Flat Button</p>
                <SplitButton text="Paste" items={items} fillMode={'flat'} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <p>Outline Button</p>
                <SplitButton text="Paste" items={items} fillMode={'outline'} />
            </div>
        </div>
    );
};
export default ButtonContainer;
