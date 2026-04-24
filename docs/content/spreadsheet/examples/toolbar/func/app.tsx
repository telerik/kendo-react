import * as React from 'react';
import { Spreadsheet } from '@progress/kendo-react-spreadsheet';
import { orders } from './shared-sp-orders';
import { toolbar } from './toolbar';

const App = () => {
    return (
        <Spreadsheet
            style={{
                width: '100%',
                height: 680
            }}
            defaultProps={{ sheets: orders }}
            toolbar={toolbar}
        />
    );
};

export default App;
