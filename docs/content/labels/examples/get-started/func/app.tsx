import * as React from 'react';
import { Label, Hint } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';

const App = () => {
    const editorId = 'firstName';
    return (
        <div>
            <Label editorId={editorId}>First Name&nbsp;</Label>
            <Input id={editorId} />
            <Hint id={editorId}>e.g. Peter</Hint>
        </div>
    );
};

export default App;
