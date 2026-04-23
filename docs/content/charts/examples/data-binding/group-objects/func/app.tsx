import * as React from 'react';

import { groupBy } from '@progress/kendo-data-query';
import { Chart, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';

const data: object[] = [
    {
        interval: 1,
        service: 'Service 1',
        value: 5
    },
    {
        interval: 2,
        service: 'Service 1',
        value: 15
    },
    {
        interval: 3,
        service: 'Service 1',
        value: 10
    },
    {
        interval: 1,
        service: 'Service 2',
        value: 10
    },
    {
        interval: 2,
        service: 'Service 2',
        value: 5
    },
    {
        interval: 3,
        service: 'Service 2',
        value: 15
    }
];

const series = groupBy(data, [{ field: 'service' }]);

const mapSeries = (item) => (
    <ChartSeriesItem
        data={item.items}
        name={item.value}
        field="value"
        categoryField="interval"
        type="line"
        tooltip={{ visible: true }}
    />
);

const ChartContainer = () => (
    <Chart>
        <ChartSeries>{series.map(mapSeries)}</ChartSeries>
    </Chart>
);

export default ChartContainer;
