import * as React from 'react';

import { Calendar } from '@progress/kendo-react-dateinputs';
import { RangeConfigurator } from './RangeConfigurator';

const TODAY = new Date();

const App = () => {
    const [min, setMin] = React.useState<Date>(new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 10));
    const [max, setMax] = React.useState<Date>(new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 10));

    return (
        <div>
            <RangeConfigurator min={min} onMinChange={setMin} max={max} onMaxChange={setMax} />
            <Calendar min={min} max={max} />
        </div>
    );
};

export default App;
