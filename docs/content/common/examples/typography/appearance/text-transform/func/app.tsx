import * as React from 'react';

import { Typography } from '@progress/kendo-react-common';

const App = () => {
    return (
        <React.Fragment>
            <Typography.p textTransform={'lowercase'}>In search of Earth, flying in to the night.</Typography.p>
            <Typography.p textTransform={'uppercase'}>In search of Earth, flying in to the night.</Typography.p>
            <Typography.p textTransform={'capitalize'}>In search of Earth, flying in to the night.</Typography.p>
        </React.Fragment>
    );
};

export default App;
