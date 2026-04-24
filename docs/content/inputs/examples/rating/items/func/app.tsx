import * as React from 'react';
import { Rating } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Rating defaultValue={2} max={8} />
            <Rating defaultValue={7} min={2} />
        </div>
    );
};

export default App;
