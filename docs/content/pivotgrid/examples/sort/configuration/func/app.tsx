import * as React from 'react';

import {
    PivotGrid,
    PivotGridConfigurator,
    PivotGridContainer,
    usePivotOLAPService,
    PivotGridAxis,
    PivotGridConfiguratorButton
} from '@progress/kendo-react-pivotgrid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Loader } from '@progress/kendo-react-indicators';
import { WideColumn } from './wide-column';

const defaultColumnAxes: PivotGridAxis[] = [
    { name: ['[Date].[Calendar]'], expand: true },
    { name: ['[Product].[Category]'] }
];

const defaultRowAxes: PivotGridAxis[] = [{ name: ['[Geography].[City]'] }];

const defaultMeasureAxes: PivotGridAxis[] = [{ name: ['[Measures].[Reseller Freight Cost]'] }];

const defaultSort: SortDescriptor[] = [
    {
        field: '[Date].[Calendar]',
        dir: 'desc'
    }
];

const catalog = 'Adventure Works DW 2008R2';
const cube = 'Adventure Works';
const url = 'https://demos.telerik.com/service/v2/olap/msmdpump.dll';

const App = () => {
    const [show, setShow] = React.useState(false);
    const { pivotProps, configuratorProps, state } = usePivotOLAPService({
        catalog,
        cube,
        url,
        defaultRowAxes,
        defaultColumnAxes,
        defaultMeasureAxes,
        defaultSort
    });

    const handleButtonClick = React.useCallback(() => {
        setShow(!show);
    }, [show]);

    return (
        <PivotGridContainer>
            <PivotGrid {...pivotProps} style={{ height: 700 }} column={WideColumn} />
            {show && <PivotGridConfigurator {...configuratorProps} />}
            <PivotGridConfiguratorButton onClick={handleButtonClick} />
            {state.loading && (
                <Loader
                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                    size="large"
                    type={'converging-spinner'}
                />
            )}
        </PivotGridContainer>
    );
};

export default App;
