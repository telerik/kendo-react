import * as React from 'react';

import { DropDownButton, DropDownButtonItem } from '@progress/kendo-react-buttons';

import './styles.css';

const App = () => {
    return (
        <div className="button-container">
            <DropDownButton fillMode="solid" themeColor="primary" text="Solid">
                <DropDownButtonItem text="Undo" icon="undo" />
                <DropDownButtonItem text="Redo" icon="redo" />
                <DropDownButtonItem text="Cut" icon="cut" />
            </DropDownButton>
            <DropDownButton fillMode="outline" themeColor="primary" text="Outline">
                <DropDownButtonItem text="Undo" icon="undo" />
                <DropDownButtonItem text="Redo" icon="redo" />
                <DropDownButtonItem text="Cut" icon="cut" />
            </DropDownButton>
            <DropDownButton fillMode="flat" themeColor="primary" text="Flat">
                <DropDownButtonItem text="Undo" icon="undo" />
                <DropDownButtonItem text="Redo" icon="redo" />
                <DropDownButtonItem text="Cut" icon="cut" />
            </DropDownButton>
            <DropDownButton fillMode="link" themeColor="primary" text="Link">
                <DropDownButtonItem text="Undo" icon="undo" />
                <DropDownButtonItem text="Redo" icon="redo" />
                <DropDownButtonItem text="Cut" icon="cut" />
            </DropDownButton>
        </div>
    );
};

export default App;
