import * as React from 'react';

import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div>
            <div className="k-d-flex k-gap-10 k-flex-wrap">
                <div className="k-d-flex k-flex-col k-gap-4">
                    <Label>Small</Label>
                    <NumericTextBox defaultValue={5} rounded={'small'} width={300} />

                    <Label>Medium</Label>
                    <NumericTextBox defaultValue={5} rounded={'medium'} width={300} />

                    <Label>Large</Label>
                    <NumericTextBox defaultValue={5} rounded={'large'} width={300} />
                </div>

                <div className="k-d-flex k-flex-col k-gap-4">
                    <Label>Full</Label>
                    <NumericTextBox defaultValue={5} rounded={'full'} width={300} />

                    <Label>None</Label>
                    <NumericTextBox defaultValue={5} rounded={'none'} width={300} />
                </div>
            </div>
        </div>
    );
};

export default App;
