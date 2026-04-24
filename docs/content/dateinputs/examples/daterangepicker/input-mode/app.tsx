import * as React from 'react';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    return (
        <div className="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
            <div className="k-col-span-1">
                <div>
                    inputmode=text <i>(default)</i>
                </div>
                <DateRangePicker
                    format={{
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }}
                    inputAttributes={{ inputMode: 'text' }}
                    style={{ width: 350 }}
                />
            </div>
            <div className="k-col-span-1">
                <div>inputmode=numeric</div>
                <DateRangePicker
                    format={'dd-MM-yyyy'}
                    inputAttributes={{ inputMode: 'numeric' }}
                    style={{ width: 350 }}
                />
            </div>
            <div className="k-col-span-1">
                <div>
                    inputmode=none <br />
                    <i>(the user can only pick a value from the popup)</i>
                </div>
                <DateRangePicker inputAttributes={{ inputMode: 'none' }} style={{ width: 350 }} />
            </div>
        </div>
    );
};

export default App;
