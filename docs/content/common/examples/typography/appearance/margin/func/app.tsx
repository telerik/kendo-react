import * as React from 'react';

import { Typography } from '@progress/kendo-react-common';

const App = () => {
    return (
        <React.Fragment>
            <Typography.p margin={'xsmall'}>Extra small margin</Typography.p>
            <Typography.p margin={'small'}>Small margin</Typography.p>
            <Typography.p margin={'medium'}>Medium margin</Typography.p>
            <Typography.p margin={'large'}>Large margin</Typography.p>
            <Typography.p margin={'xlarge'}>Extra large margin</Typography.p>
            <Typography.p margin={'thin'}>Thin margin</Typography.p>
            <Typography.p margin={'hair'}>Hair margin</Typography.p>
            <Typography.p margin={3}>Equal margin for each side</Typography.p>
            <Typography.p margin={{ top: 3, bottom: 4, left: 2, right: 1 }}>
                Different margin for each side
            </Typography.p>
        </React.Fragment>
    );
};

export default App;
