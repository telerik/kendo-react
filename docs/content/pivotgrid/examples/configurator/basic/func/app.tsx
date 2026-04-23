import * as React from 'react';

import {
    PivotGrid,
    PivotGridConfigurator,
    PivotGridContainer,
    usePivotOLAPService,
    PivotGridAxis,
    PivotGridConfiguratorButton
} from '@progress/kendo-react-pivotgrid';
import { WideColumn } from './wide-column';

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
    const [show, setShow] = React.useState(true);

    const { pivotProps, configuratorProps } = usePivotOLAPService({
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
            <PivotGrid {...pivotProps} style={{ height: 700 }} column={WideColumn} />
            {show && <PivotGridConfigurator {...configuratorProps} />}
            <PivotGridConfiguratorButton onClick={handleButtonClick} />
        </PivotGridContainer>
    );
};

export default App;
