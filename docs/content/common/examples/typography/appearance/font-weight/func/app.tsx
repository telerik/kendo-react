import * as React from 'react';

import { Typography } from '@progress/kendo-react-common';

const App = () => {
    return (
        <React.Fragment>
            <Typography.p fontWeight={'light'}>Light</Typography.p>
            <Typography.p fontWeight={'normal'}>Normal</Typography.p>
            <Typography.p fontWeight={'bold'}>Bold</Typography.p>
        </React.Fragment>
    );
};

export default App;
