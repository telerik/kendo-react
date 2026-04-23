import * as React from 'react';

import { ChartWizard, DataColumn, DataRow, getWizardDataFromDataRows } from '@progress/kendo-react-chart-wizard';

const dataColumns: DataColumn[] = [
    {
        field: 'Product',
        title: 'Product Name'
    },
    {
        field: 'Quantity',
        title: 'Quantity'
    }
];

const dataRows: DataRow[] = [
    {
        dataItem: {
            ID: 216321,
            Product: 'Calzone',
            Quantity: 1
        },
        dataColumns
    },
    {
        dataItem: {
            ID: 546897,
            Product: 'Margarita',
            Quantity: 2
        },
        dataColumns
    },
    {
        dataItem: {
            ID: 456231,
            Product: 'Pollo Formaggio',
            Quantity: 1
        },
        dataColumns
    }
];

const App = () => {
    const chartWizardData = getWizardDataFromDataRows(dataRows);

    return <ChartWizard data={chartWizardData} />;
};

export default App;
