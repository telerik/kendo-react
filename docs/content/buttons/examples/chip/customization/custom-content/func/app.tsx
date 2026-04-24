import * as React from 'react';

import { Chip } from '@progress/kendo-react-buttons';

const App = () => {
    return (
        <>
            <Chip removable={true} icon={'k-i-bell'}>
                <span className="k-chip-label">Set a reminder</span>
                <span className="k-icon k-i-more-vertical" />
            </Chip>
            <style>{`.k-chip-content { padding-right: 0; }`}</style>
        </>
    );
};

export default App;
