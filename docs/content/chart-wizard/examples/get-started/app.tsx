import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';

import { ChartWizard, ChartWizardDataRow } from '@progress/kendo-react-chart-wizard';
import { chartColumnClusteredIcon } from '@progress/kendo-svg-icons';

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
    const [visible, setVisible] = React.useState(true);
    const chartWizardData = data;

    const onClose = React.useCallback(() => {
        setVisible(false);
    }, []);

    const onOpen = React.useCallback(() => {
        setVisible(true);
    }, []);

    return (
        <>
            <Button onClick={onOpen} svgIcon={chartColumnClusteredIcon}>
                Open Chart Wizard
            </Button>
            {visible && <ChartWizard data={chartWizardData} onClose={onClose} />}
        </>
    );
};

export default App;
