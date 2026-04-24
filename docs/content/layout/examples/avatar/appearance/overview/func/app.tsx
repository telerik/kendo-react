import * as React from 'react';

import { Avatar } from '@progress/kendo-react-layout';
import { userIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-react-common';

const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div style={{ display: 'flex', gap: '20px' }}>
                <Avatar type="icon" size="large">
                    <SvgIcon icon={userIcon} />
                </Avatar>
            </div>
        </div>
    );
};

export default App;
