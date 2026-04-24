import * as React from 'react';
import { Spreadsheet } from '@progress/kendo-react-spreadsheet';
import { sheets } from './shared-sp-sheets';

const App = () => {
    return (
        <Spreadsheet
            style={{
                width: '100%',
                height: 680
            }}
            defaultProps={{ sheets }}
        />
    );
};

export default App;
