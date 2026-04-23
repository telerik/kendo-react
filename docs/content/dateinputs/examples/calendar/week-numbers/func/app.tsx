import * as React from 'react';

import { Calendar } from '@progress/kendo-react-dateinputs';
import { Switch } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [weekNumber, setWeekNumber] = React.useState<boolean>(true);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Label>
                Show Week Numbers &nbsp;
                <Switch onChange={() => setWeekNumber(!weekNumber)} checked={weekNumber} />
            </Label>
            <Calendar weekNumber={weekNumber} showOtherMonthDays />
        </div>
    );
};

export default App;
