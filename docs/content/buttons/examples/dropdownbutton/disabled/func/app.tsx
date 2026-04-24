import * as React from 'react';

import { DropDownButton } from '@progress/kendo-react-buttons';

const items: string[] = ['Item1', 'Item2', 'Item3'];
const App = () => {
    return (
        <div>
            <DropDownButton items={items} text="Enabled Button" /> &nbsp;
            <DropDownButton disabled={true} items={items} text="Disabled Button" />
        </div>
    );
};
export default App;
