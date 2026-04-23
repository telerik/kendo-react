import * as React from 'react';

import { TimePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const defaultValue = new Date(2000, 2, 10, 13, 30, 0);
    return (
        <div className="example-wrapper">
            <div className="col-xs-12 col-sm-6 example-col">
                <p>Select a long time:</p>
                <TimePicker format="HH:mm:ss" defaultValue={defaultValue} />
            </div>

            <div className="col-xs-12 col-sm-6 example-col">
                <p>Select a short time:</p>
                <TimePicker format="hh:mm a" defaultValue={defaultValue} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <p>Custom Skeleton:</p>
                <TimePicker
                    format={{
                        skeleton: 'EHmSs'
                    }}
                    defaultValue={defaultValue}
                />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <p>Custom Format:</p>
                <TimePicker
                    format={{
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
