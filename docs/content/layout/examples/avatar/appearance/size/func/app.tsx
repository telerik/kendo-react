import * as React from 'react';

import { Avatar } from '@progress/kendo-react-layout';
import { userIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-react-common';

const sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];

const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div style={{ gap: '130px' }}>
                {sizes.map((size, index) => {
                    return (
                        <span key={index}>
                            <Avatar size={size} type="icon" style={{ margin: 10 }}>
                                <SvgIcon icon={userIcon} />
                            </Avatar>
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default App;
