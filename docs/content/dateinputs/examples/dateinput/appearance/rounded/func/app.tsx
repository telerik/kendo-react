import * as React from 'react';

import { DateInput } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'small'}>Small</Label>
                <br />
                <DateInput id={'small'} rounded={'small'} spinners={true} width={200} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'medium'}>Medium</Label>
                <br />
                <DateInput id={'medium'} rounded={'medium'} spinners={true} width={200} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'large'}>Large</Label>
                <br />
                <DateInput id={'large'} rounded={'large'} spinners={true} width={200} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'full'}>Full</Label>
                <br />
                <DateInput id={'full'} rounded={'full'} spinners={true} width={200} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'none'}>None</Label>
                <br />
                <DateInput id={'none'} rounded={'none'} spinners={true} width={200} />
            </div>
        </div>
    );
};

export default App;
