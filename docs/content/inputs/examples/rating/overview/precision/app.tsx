import * as React from 'react';
import { Rating } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div style={{ margin: 15 }}>
                <Rating precision={'item'} defaultValue={3} />
            </div>
            <div style={{ margin: 15 }}>
                <Rating precision={'half'} defaultValue={2.5} />
            </div>
        </div>
    );
};

export default App;
