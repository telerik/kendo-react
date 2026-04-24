import * as React from 'react';

import { DateInput, DateInputChangeEvent } from '@progress/kendo-react-dateinputs';

const App = () => {
    const twoDigitYearMax = 30;
    const [value, setValue] = React.useState<Date | null>(new Date());
    const changeDate = (event: DateInputChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div className="example-wrapper" style={{ minHeight: 80 }}>
            <p>twoDigitYearMax: {twoDigitYearMax}</p>
            <p>Full date: {value?.toLocaleString()}</p>
            <DateInput
                value={value}
                onChange={changeDate}
                width={300}
                twoDigitYearMax={twoDigitYearMax}
                format={'dd/MM/yy'}
            />
        </div>
    );
};

export default App;
