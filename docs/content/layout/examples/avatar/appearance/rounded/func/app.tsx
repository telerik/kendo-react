import * as React from 'react';

import { Avatar } from '@progress/kendo-react-layout';
import { userIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-react-common';

const roundedOptions: Array<'small' | 'medium' | 'large' | 'full' | 'none'> = [
    'small',
    'medium',
    'large',
    'full',
    'none'
];

const App = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {roundedOptions.map((rounded, index) => {
                    return (
                        <span key={index}>
                            <Avatar rounded={rounded} type="icon" style={{ margin: 10 }} border={true}>
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
