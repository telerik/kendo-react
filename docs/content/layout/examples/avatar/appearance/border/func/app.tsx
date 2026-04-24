import * as React from 'react';

import { Avatar } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { userIcon } from '@progress/kendo-svg-icons';

const src = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg';

const App = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Avatar type="image" size="large" rounded="full" border={true} fillMode="outline">
                    <img src={src} alt="KendoReact Avatar Customer Image" style={{ width: 64, height: 64 }} />
                </Avatar>
                <Avatar type="text" size="large" rounded="full" border={true} fillMode="outline">
                    <span>JS</span>
                </Avatar>
                <Avatar type="icon" size="large" rounded="full" border={true} fillMode="outline">
                    <SvgIcon icon={userIcon} />
                </Avatar>
            </div>
        </div>
    );
};

export default App;
