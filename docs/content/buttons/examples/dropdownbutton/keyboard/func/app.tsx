import * as React from 'react';

import { DropDownButton, DropDownButtonItem } from '@progress/kendo-react-buttons';
import { clipboardIcon, copyIcon, cutIcon, redoIcon, undoIcon } from '@progress/kendo-svg-icons';

const App = () => {
    return (
        <div>
            <DropDownButton text="Edit">
                <DropDownButtonItem text="Undo" svgIcon={undoIcon} />
                <DropDownButtonItem text="Redo" svgIcon={redoIcon} disabled={true} />
                <DropDownButtonItem text="Cut" svgIcon={cutIcon} />
                <DropDownButtonItem text="Copy" svgIcon={copyIcon} />
                <DropDownButtonItem text="Paste" svgIcon={clipboardIcon} />
            </DropDownButton>
        </div>
    );
};

export default App;
