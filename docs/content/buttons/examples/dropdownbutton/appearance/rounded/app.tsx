import * as React from 'react';

import { DropDownButton, DropDownButtonItem } from '@progress/kendo-react-buttons';

import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <DropDownButton rounded="small" text="Small">
                <DropDownButtonItem text="Undo" icon="undo" />
                <DropDownButtonItem text="Redo" icon="redo" />
                <DropDownButtonItem text="Cut" icon="cut" />
            </DropDownButton>
            <DropDownButton rounded="medium" text="Medium">
                <DropDownButtonItem text="Undo" icon="undo" />
                <DropDownButtonItem text="Redo" icon="redo" />
                <DropDownButtonItem text="Cut" icon="cut" />
            </DropDownButton>
            <DropDownButton rounded="large" text="Large">
                <DropDownButtonItem text="Undo" icon="undo" />
                <DropDownButtonItem text="Redo" icon="redo" />
                <DropDownButtonItem text="Cut" icon="cut" />
            </DropDownButton>
            <DropDownButton rounded="full" text="Full">
                <DropDownButtonItem text="Undo" icon="undo" />
                <DropDownButtonItem text="Redo" icon="redo" />
                <DropDownButtonItem text="Cut" icon="cut" />
            </DropDownButton>
            <DropDownButton rounded="none" text="None">
                <DropDownButtonItem text="Undo" icon="undo" />
                <DropDownButtonItem text="Redo" icon="redo" />
                <DropDownButtonItem text="Cut" icon="cut" />
            </DropDownButton>
        </div>
    );
};

export default App;
