import * as React from 'react';

import { DropDownButton } from '@progress/kendo-react-buttons';

interface Item {
    actionName: string;
    disabled?: boolean;
}

const items: Item[] = [
    {
        actionName: 'Undo'
    },
    {
        actionName: 'Redo',
        disabled: true
    },
    {
        actionName: 'Cut'
    },
    {
        actionName: 'Copy'
    },
    {
        actionName: 'Paste'
    }
];

const App = () => {
    return (
        <div>
            <DropDownButton textField="actionName" items={items} text="Edit" />
        </div>
    );
};

export default App;
