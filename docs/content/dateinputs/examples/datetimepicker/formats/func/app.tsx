import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const defaultValue = new Date(2000, 2, 10, 13, 30, 0);

    return (
        <div className="example-wrapper" style={{ minHeight: '400px' }}>
            <div className="col-sm-12 col-md-6 example-col">
                <p>Select a long date-time </p>
                <DateTimePicker format={'dd-MM-yyyy hh:mm:ss a'} defaultValue={defaultValue} />
            </div>
            <div className="col-sm-12 col-md-6 example-col">
                <p>Select a short date without time parsing</p>
                <DateTimePicker format={'dd MMMM | HH:mm'} defaultValue={defaultValue} />
            </div>
            <div className="col-sm-12 col-md-6 example-col">
                <p>Select a date in Custom Skeleton Format</p>
                <DateTimePicker
                    format={{
                        skeleton: 'yMMMdEHmSs'
                    }}
                    defaultValue={defaultValue}
                />
            </div>
            <div className="col-sm-12 col-md-6 example-col">
                <p>Select a date in Custom Format</p>
                <DateTimePicker
                    format={{
                        year: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    }}
                    defaultValue={defaultValue}
                />
            </div>
        </div>
    );
};
export default App;
