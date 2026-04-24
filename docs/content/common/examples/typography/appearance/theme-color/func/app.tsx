import * as React from 'react';

import { Typography } from '@progress/kendo-react-common';

const App = () => {
    const themeColors = [
        'inherit',
        'primary',
        'secondary',
        'tertiary',
        'info',
        'success',
        'error',
        'warning',
        'dark',
        'light',
        'inverse'
    ];
    return (
        <React.Fragment>
            {themeColors.map((themeColor: any, idx) => {
                return (
                    <Typography.p key={idx} themeColor={themeColor}>
                        I have a {themeColor} text color.
                    </Typography.p>
                );
            })}
        </React.Fragment>
    );
};

export default App;
