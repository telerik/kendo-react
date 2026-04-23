import * as React from 'react';
import { DateTimePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    return (
        <div className="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
            <div className="k-col-span-1">
                <div>
                    inputmode=text <i>(default)</i>
                </div>
                <DateTimePicker
                    format={'MMMM, dd, yyyy HH:mm:ss a'}
                    value={new Date()}
                    inputAttributes={{ inputMode: 'text' }}
                    width={300}
                />
            </div>
            <div className="k-col-span-1">
                <div>inputmode=numeric</div>
                <DateTimePicker
                    format={'dd-MM-yyyy HH:mm'}
                    value={new Date()}
                    inputAttributes={{ inputMode: 'numeric' }}
                    width={300}
                />
            </div>
            <div className="k-col-span-1">
                <div>
                    inputmode=none <br />
                    <i>(the user can only pick a value from the popup)</i>
                </div>
                <DateTimePicker value={new Date()} inputAttributes={{ inputMode: 'none' }} width={300} />
            </div>
        </div>
    );
};

export default App;
