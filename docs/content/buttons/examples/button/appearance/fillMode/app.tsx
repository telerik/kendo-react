import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';

import './styles.css';

const App = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
            <div>
                <Button type="button" fillMode={'solid'} themeColor={'primary'}>
                    Solid
                </Button>
                <Button type="button" fillMode={'flat'} themeColor={'primary'}>
                    Flat
                </Button>
                <Button type="button" fillMode={'outline'} themeColor={'primary'}>
                    Outline
                </Button>
                <Button type="button" fillMode={'clear'} themeColor={'primary'}>
                    Clear
                </Button>
                <Button type="button" fillMode={'link'} themeColor={'primary'}>
                    Link
                </Button>
            </div>
        </div>
    );
};

export default App;
