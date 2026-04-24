import * as React from 'react';
import { Spreadsheet } from '@progress/kendo-react-spreadsheet';
import { data } from './shared-sp-basic-data';

const App = () => {
    return (
        <Spreadsheet
            style={{
                width: '100%',
                height: 680
            }}
            defaultProps={{ sheets: data }}
        />
    );
};

export default App;
