import * as React from 'react';

import { Avatar } from '@progress/kendo-react-layout';

const App = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
                <span>
                    <Avatar size="large" type="text">
                        <span>JS</span>
                    </Avatar>
                </span>
            </div>
        </div>
    );
};

export default App;
