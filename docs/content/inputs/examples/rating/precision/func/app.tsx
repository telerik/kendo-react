import * as React from 'react';

import { Rating } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div className={'k-d-flex k-flex-col k-align-items-center k-gap-lg'}>
            <div className={'k-d-flex k-flex-col k-align-items-center k-gap-sm k-mt-lg'}>
                <Label> {'Item Precision Mode'}</Label>
                <Rating precision={'item'} />
            </div>
            <div className={'k-d-flex k-flex-col k-align-items-center k-gap-sm k-mt-lg'}>
                <Label> {'Half Precision Mode'}</Label>
                <Rating precision={'half'} />
            </div>
        </div>
    );
};

export default App;
