import * as React from 'react';

import { Typography } from '@progress/kendo-react-common';

const App = () => {
    return (
        <React.Fragment>
            <Typography.p fontSize={'xsmall'}>Extra small</Typography.p>
            <Typography.p fontSize={'small'}>Small</Typography.p>
            <Typography.p fontSize={'medium'}>Medium</Typography.p>
            <Typography.p fontSize={'large'}>Large</Typography.p>
            <Typography.p fontSize={'xlarge'}>Extra large</Typography.p>
        </React.Fragment>
    );
};

export default App;
