import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';

import './styles.css';

const App = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
            <div>
                <Button type="button" themeColor={'primary'}>
                    Default
                </Button>
                <Button type="button" rounded={'small'} themeColor={'primary'}>
                    Small
                </Button>
                <Button type="button" rounded={'medium'} themeColor={'primary'}>
                    Medium
                </Button>
                <Button type="button" rounded={'large'} themeColor={'primary'}>
                    Large
                </Button>
                <Button type="button" rounded={'full'} themeColor={'primary'}>
                    Full
                </Button>
                <Button type="button" rounded={'none'} themeColor={'primary'}>
                    None
                </Button>
            </div>
        </div>
    );
};

export default App;
