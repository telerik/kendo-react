import * as React from 'react';

import { DateRangePicker, DateRangePickerChangeEvent, SelectionRange } from '@progress/kendo-react-dateinputs';

const App = () => {
    const [value, setValue] = React.useState<SelectionRange>({
        start: new Date(2018, 8, 5),
        end: new Date(2018, 8, 12)
    });

    const handleChange = (event: DateRangePickerChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div className="row">
            <div className="example-config col-xs-12 col-md-12 example-col">
                <p>
                    The range is: <br />
                    start: {`${value.start}`}
                    <br />
                    end: {`${value.end}`}
                </p>
            </div>
            <div className="col-xs-12 col-md-12 example-col">
                <p>Controlled DateRangePicker</p>
                <DateRangePicker value={value} onChange={handleChange} />
            </div>
        </div>
    );
};
export default App;
