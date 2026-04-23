import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <section className="k-container k-gap-1 k-gap-sm-6">
            <div className="k-row k-col-gap-1 k-col-gap-sm-6">
                <div className="k-col">
                    <Label editorId={'solid'}>Solid</Label>
                    <br />
                    <DateTimePicker id={'solid'} fillMode={'solid'} width={200} />
                </div>
                <div className="k-col">
                    <Label editorId={'flat'}>Flat</Label>
                    <br />
                    <DateTimePicker id={'flat'} fillMode={'flat'} width={200} />
                </div>
                <div className="k-col">
                    <Label editorId={'outline'}>Outline</Label>
                    <br />
                    <DateTimePicker id={'outline'} fillMode={'outline'} width={200} />
                </div>
            </div>
        </section>
    );
};

export default App;
