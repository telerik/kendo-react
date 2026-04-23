import * as React from 'react';

import { DropDownButton } from '@progress/kendo-react-buttons';

const items: string[] = ['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out'];
const App = () => {
    return (
        <div>
            <DropDownButton items={items} text="User Settings" />
        </div>
    );
};
export default App;
