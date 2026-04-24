import * as React from 'react';

import { Chart, ChartLegend, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';

const seriesData = [1, 2, 3, 5];

const ChartContainer = () => {
    const [seriesVisible, setSeriesVisible] = React.useState(true);

    const onLegendItemClick = () => {
        /* Hide the series manually */
        setSeriesVisible(!seriesVisible);
    };

    return (
        <Chart onLegendItemClick={onLegendItemClick}>
            <ChartLegend />
            <ChartSeries>
                <ChartSeriesItem
                    name="Fibonacci"
                    visible={seriesVisible}
                    data={seriesData}
                    tooltip={{ visible: true }}
                />
            </ChartSeries>
        </Chart>
    );
};

export default ChartContainer;
