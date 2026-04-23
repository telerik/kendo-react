import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';

import { ChartWizard, ChartWizardDataRow, createState, ChartWizardState } from '@progress/kendo-react-chart-wizard';
import {
    Chart,
    ChartArea,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSubtitle,
    ChartTitle,
    ChartValueAxis,
    ChartValueAxisItem
} from '@progress/kendo-react-charts';

const data: ChartWizardDataRow[] = [
    [
        { field: 'Product Name', value: 'Calzone' },
        { field: 'Quantity', value: 1 },
        { field: 'Price', value: 12.39 },
        { field: 'Tax', value: 2.48 },
        { field: 'Total', value: 14.87 }
    ],
    [
        { field: 'Product Name', value: 'Margarita' },
        { field: 'Quantity', value: 2 },
        { field: 'Price', value: 8.79 },
        { field: 'Tax', value: 3.52 },
        { field: 'Total', value: 21.1 }
    ],
    [
        { field: 'Product Name', value: 'Pollo Formaggio' },
        { field: 'Quantity', value: 1 },
        { field: 'Price', value: 13.99 },
        { field: 'Tax', value: 2.8 },
        { field: 'Total', value: 16.79 }
    ]
];

const App = () => {
    const [visible, setVisible] = React.useState(false);
    const [state, setState] = React.useState<ChartWizardState>(createState(data, 'bar'));

    const onStateChange = React.useCallback((newState: ChartWizardState) => {
        setState(newState);
    }, []);

    const onClose = React.useCallback(() => {
        setVisible(false);
    }, []);

    const onOpen = React.useCallback(() => {
        setVisible(true);
    }, []);

    return (
        <>
            <Button onClick={onOpen}>Open Wizard</Button>
            {visible && <ChartWizard onClose={onClose} state={state} onStateChange={onStateChange} />}
            <Chart {...state}>
                <ChartTitle {...state.title} />
                <ChartSubtitle {...state.subtitle} />
                <ChartLegend {...state.legend} />
                <ChartArea {...state.area} />
                <ChartCategoryAxis>
                    {state.categoryAxis.map((el) => (
                        <ChartCategoryAxisItem {...el} />
                    ))}
                </ChartCategoryAxis>
                <ChartValueAxis>
                    {state.valueAxis.map((el) => (
                        <ChartValueAxisItem {...el} />
                    ))}
                </ChartValueAxis>
                <ChartSeries>
                    {state.series.map((el) => (
                        <ChartSeriesItem {...el} />
                    ))}
                </ChartSeries>
            </Chart>
        </>
    );
};

export default App;
