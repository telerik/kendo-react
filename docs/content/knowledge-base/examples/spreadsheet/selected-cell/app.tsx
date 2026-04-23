import * as React from 'react';
import { Spreadsheet } from '@progress/kendo-react-spreadsheet';

const App = () => {
    const handleSelect = (e) => {
        const range_ = e.range;
        console.log('Selected cell range:', range_);
        console.log('Column index:', range_._ref.col);
        console.log('Row index:', range_._ref.row);
    };
    return (
        <Spreadsheet
            style={{
                width: '100%',
                height: 680,
            }}
            defaultProps={{ columnWidth: 75, headerWidth: 75 }}
            onSelect={handleSelect}
        />
    );
};

export default App;
