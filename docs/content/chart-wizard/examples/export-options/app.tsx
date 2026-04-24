import * as React from 'react';

import { ChartWizard, ChartWizardDataRow, ExportOptions } from '@progress/kendo-react-chart-wizard';

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
    const chartWizardData = data;
    const exportOptions: ExportOptions = {
        fileName: 'report',
        pdf: {
            paperSize: 'Letter'
        },
        image: {
            width: 1900, // px
            height: 1200
        }
    };

    return <ChartWizard data={chartWizardData} exportOptions={exportOptions} />;
};

export default App;
