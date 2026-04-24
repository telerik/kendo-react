import * as React from 'react';
import { TimePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    return (
        <div className="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
            <div className="k-col-span-1">
                <div>
                    inputmode=text <i>(default)</i>
                </div>
                <TimePicker
                    format={'a HH:mm:ss'}
                    value={new Date()}
                    inputAttributes={{ inputMode: 'text' }}
                    width={300}
                />
            </div>
            <div className="k-col-span-1">
                <div>inputmode=numeric</div>
                <TimePicker
                    format={'HH:mm:ss'}
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
                <TimePicker value={new Date()} inputAttributes={{ inputMode: 'none' }} width={300} />
            </div>
        </div>
    );
};

export default App;
