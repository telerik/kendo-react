import * as React from 'react';
import { Spreadsheet } from '@progress/kendo-react-spreadsheet';
import { products } from './shared-sp-products';

const App = () => {
    return (
        <Spreadsheet
            style={{
                width: '100%',
                height: 680
            }}
            defaultProps={{ sheets: products }}
        />
    );
};

export default App;
