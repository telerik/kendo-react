import * as React from 'react';

import { DateInput } from '@progress/kendo-react-dateinputs';
import { Switch } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [readonly, setReadonly] = React.useState<boolean>(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Label>
                Read-Only Mode &nbsp;
                <Switch onChange={() => setReadonly(!readonly)} checked={readonly} />
            </Label>
            <DateInput value={new Date()} readonly={readonly} width={300} />
        </div>
    );
};

export default App;
