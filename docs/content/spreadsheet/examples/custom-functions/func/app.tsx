import * as React from 'react';
import { Spreadsheet, defineFunction } from '@progress/kendo-react-spreadsheet';
import { sheets } from './shared-sp-sheets';

defineFunction('distance', function (x1: number, y1: number, x2: number, y2: number) {
    const dx = Math.abs(x1 - x2);
    const dy = Math.abs(y1 - y2);
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance;
}).args(
    [
        ['x1', 'number'],
        ['y1', 'number'],
        ['x2', 'number'],
        ['y2', 'number']
    ],
    {}
);

const App = () => {
    return (
        <Spreadsheet
            style={{
                width: '100%',
                height: 600
            }}
            defaultProps={{
                sheets: sheets
            }}
        />
    );
};

export default App;
