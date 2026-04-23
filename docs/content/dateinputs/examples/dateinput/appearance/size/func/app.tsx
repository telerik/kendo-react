import * as React from 'react';

import { DateInput } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <section className="k-container k-gap-1 k-gap-sm-6">
            <div className="k-row k-col-gap-1 k-col-gap-sm-6">
                <div className="k-col">
                    <Label editorId={'small'}>Small</Label>
                    <br />
                    <DateInput id={'small'} size={'small'} spinners={true} width={200} />
                </div>
                <div className="k-col">
                    <Label editorId={'medium'}>Medium</Label>
                    <br />
                    <DateInput id={'medium'} size={'medium'} spinners={true} width={200} />
                </div>
                <div className="k-col">
                    <Label editorId={'large'}>Large</Label>
                    <br />
                    <DateInput id={'large'} size={'large'} spinners={true} width={200} />
                </div>
            </div>
        </section>
    );
};

export default App;
