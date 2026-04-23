import * as React from 'react';

import { TimePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'small'}>Small</Label>
                <br />
                <TimePicker id={'small'} rounded={'small'} width={200} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'medium'}>Medium</Label>
                <br />
                <TimePicker id={'medium'} rounded={'medium'} width={200} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'large'}>Large</Label>
                <br />
                <TimePicker id={'large'} rounded={'large'} width={200} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'full'}>Full</Label>
                <br />
                <TimePicker id={'full'} rounded={'full'} width={200} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <Label editorId={'none'}>None</Label>
                <br />
                <TimePicker id={'none'} rounded={'none'} width={200} />
            </div>
        </div>
    );
};

export default App;
