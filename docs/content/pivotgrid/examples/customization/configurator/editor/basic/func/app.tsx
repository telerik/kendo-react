import * as React from 'react';

import {
    PivotGridConfigurator,
    PivotGridContainer,
    usePivotOLAPService,
    PivotGridAxis
} from '@progress/kendo-react-pivotgrid';

import { CustomEditor } from './custom-editor';

const defaultColumnAxes: PivotGridAxis[] = [
    { name: ['[Date].[Calendar]'], expand: true },
    { name: ['[Product].[Category]'] }
];

const defaultRowAxes: PivotGridAxis[] = [{ name: ['[Geography].[City]'] }];

const defaultMeasureAxes: PivotGridAxis[] = [{ name: ['[Measures].[Reseller Freight Cost]'] }];

const catalog = 'Adventure Works DW 2008R2';
const cube = 'Adventure Works';
const url = 'https://demos.telerik.com/service/v2/olap/msmdpump.dll';

const App = () => {
    const { configuratorProps } = usePivotOLAPService({
        catalog,
        cube,
        url,
        defaultRowAxes,
        defaultColumnAxes,
        defaultMeasureAxes
    });

    return (
        <PivotGridContainer>
            <PivotGridConfigurator {...configuratorProps} editor={CustomEditor} />
        </PivotGridContainer>
    );
};

export default App;
