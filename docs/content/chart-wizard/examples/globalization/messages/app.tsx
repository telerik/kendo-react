import * as React from 'react';
import { loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';
import { ChartWizard, ChartWizardDataRow } from '@progress/kendo-react-chart-wizard';
import esMessages from './bg.json';
loadMessages(esMessages, 'bg');

const chartWizardData: ChartWizardDataRow[] = [
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
    return (
        <>
            <LocalizationProvider language="bg">
                <ChartWizard data={chartWizardData} />
            </LocalizationProvider>
        </>
    );
};

export default App;
