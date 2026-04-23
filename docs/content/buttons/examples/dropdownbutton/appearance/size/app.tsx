import * as React from 'react';

import { DropDownButton, DropDownButtonItem } from '@progress/kendo-react-buttons';

import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <DropDownButton size="small" text="Small">
                <DropDownButtonItem text="Undo" icon="undo" />
                <DropDownButtonItem text="Redo" icon="redo" />
                <DropDownButtonItem text="Cut" icon="cut" />
            </DropDownButton>
            <DropDownButton size="medium" text="Medium">
                <DropDownButtonItem text="Undo" icon="undo" />
                <DropDownButtonItem text="Redo" icon="redo" />
                <DropDownButtonItem text="Cut" icon="cut" />
            </DropDownButton>
            <DropDownButton size="large" text="Large">
                <DropDownButtonItem text="Undo" icon="undo" />
                <DropDownButtonItem text="Redo" icon="redo" />
                <DropDownButtonItem text="Cut" icon="cut" />
            </DropDownButton>
        </div>
    );
};

export default App;
