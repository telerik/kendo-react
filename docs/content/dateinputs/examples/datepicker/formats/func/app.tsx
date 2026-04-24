import * as React from 'react';

import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const TODAY: Date = new Date();

    return (
        <div className="example-wrapper" style={{ minHeight: '400px' }}>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId="long">Select a long date</Label>
                <DatePicker id="long" format="dd-MMM-yyyy HH:mm:ss" value={TODAY} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId="short">Select a short date</Label>
                <DatePicker id="short" format="MMMM yyyy" value={TODAY} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId="skeleton">Select a date in Custom Skeleton Format</Label>
                <DatePicker
                    id="skeleton"
                    format={{
                        skeleton: 'yMMMdEHm'
                    }}
                    value={TODAY}
                />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId="custom">Select a date in Custom Format</Label>
                <DatePicker
                    id="custom"
                    format={{
                        year: 'numeric',
                        month: 'short'
                    }}
                    value={TODAY}
                />
            </div>
        </div>
    );
};
export default App;
