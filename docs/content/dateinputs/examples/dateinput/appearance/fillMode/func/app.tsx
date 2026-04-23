import * as React from 'react';

import { DateInput } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <section className="k-container k-gap-1 k-gap-sm-6">
            <div className="k-row k-col-gap-1 k-col-gap-sm-6">
                <div className="k-col">
                    <Label editorId={'solid'}>Solid</Label>
                    <br />
                    <DateInput id={'solid'} fillMode={'solid'} spinners={true} width={200} />
                </div>
                <div className="k-col">
                    <Label editorId={'flat'}>Flat</Label>
                    <br />
                    <DateInput id={'flat'} fillMode={'flat'} spinners={true} width={200} />
                </div>
                <div className="k-col">
                    <Label editorId={'outline'}>Outline</Label>
                    <br />
                    <DateInput id={'outline'} fillMode={'outline'} spinners={true} width={200} />
                </div>
            </div>
        </section>
    );
};

export default App;
