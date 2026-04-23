import * as React from 'react';
import { Avatar } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { userIcon } from '@progress/kendo-svg-icons';

const fillOptions: Array<'solid' | 'outline'> = ['solid', 'outline'];

const App = () => {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '15px'
                }}
            >
                {fillOptions.map((fillMode, index) => (
                    <Avatar key={index} fillMode={fillMode} type="icon" border={true}>
                        <SvgIcon icon={userIcon} />
                    </Avatar>
                ))}
            </div>
        </div>
    );
};

export default App;
