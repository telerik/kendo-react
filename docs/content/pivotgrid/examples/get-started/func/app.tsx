import * as React from 'react';

import { PivotGrid, PivotGridContainer, usePivotOLAPService } from '@progress/kendo-react-pivotgrid';
import { WideColumn } from './wide-column';
const defaultColumnAxes = [
    {
        name: ['[Date].[Calendar]'],
        expand: true
    },
    {
        name: ['[Product].[Category]']
    }
];
const defaultRowAxes = [
    {
        name: ['[Geography].[City]']
    }
];
const defaultMeasureAxes = [
    {
        name: ['[Measures].[Reseller Freight Cost]']
    }
];
const catalog = 'Adventure Works DW 2008R2';
const cube = 'Adventure Works';
const url = 'https://demos.telerik.com/service/v2/olap/msmdpump.dll';

const App = () => {
    const [show, setShow] = React.useState(true);
    const { pivotProps } = usePivotOLAPService({
        catalog,
        cube,
        url,
        defaultRowAxes,
        defaultColumnAxes,
        defaultMeasureAxes
    });
    const handleButtonClick = React.useCallback(() => {
        setShow(!show);
    }, [show]);
    return (
        <PivotGridContainer>
            <PivotGrid
                {...pivotProps}
                style={{
                    height: 700
                }}
                column={WideColumn}
            />
        </PivotGridContainer>
    );
};

export default App;
