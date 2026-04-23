import * as React from 'react';
import { Rating } from '@progress/kendo-react-inputs';
import { thumbUpIcon } from '@progress/kendo-svg-icons';

const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Rating defaultValue={2} svgIcon={thumbUpIcon} />
        </div>
    );
};

export default App;
