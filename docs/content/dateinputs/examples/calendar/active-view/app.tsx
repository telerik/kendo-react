import * as React from 'react';

import { RadioButtonChangeEvent } from '@progress/kendo-react-inputs';
import { ActiveView, Calendar } from '@progress/kendo-react-dateinputs';

import { ViewConfigurator } from './ViewConfigurator';

const App = () => {
    const [value, setValue] = React.useState<ActiveView>('month');
    const [key, setKey] = React.useState<number>(0);
    const onChange = (event: RadioButtonChangeEvent) => {
        setValue(event.value);
        setKey((key) => key + 1);
    };

    return (
        <div>
            <ViewConfigurator value={value} onValueChange={onChange} />
            <Calendar key={key} defaultActiveView={value} />
        </div>
    );
};

export default App;
