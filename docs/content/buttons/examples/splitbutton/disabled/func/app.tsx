import * as React from 'react';
import { SplitButton } from '@progress/kendo-react-buttons';

const App = () => {
    const items: string[] = ['Item1', 'Item2', 'Item3'];

    return (
        <div>
            <SplitButton items={items} text="Enabled Button" /> &nbsp;
            <SplitButton disabled={true} items={items} text="Disabled Button" />
        </div>
    );
};

export default App;
