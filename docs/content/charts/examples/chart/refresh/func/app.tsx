import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartLegend, VerticalStripesPattern } from '@progress/kendo-react-charts';
import { Button } from '@progress/kendo-react-buttons';

const verticalStripes: VerticalStripesPattern = {
    type: 'verticalStripes',
    background: 'rgb(75, 96, 250)',
    width: 1.2,
    gap: 12
};

const ChartContainer = () => {
    const [data, setData] = React.useState<number[]>([1, 2, 3, 5]);
    const [counter, setCounter] = React.useState(0);
    const [refreshChart, setRefreshChart] = React.useState(true);

    const updateCounter = () => {
        setCounter(counter + 1);
        setRefreshChart(false);
    };

    const updateData = () => {
        setData([...data, Math.random() * 100]);
        setRefreshChart(true);
    };

    const handleChartRefresh = (chartOptions, themeOptions, chartInstance) => {
        if (refreshChart) {
            chartInstance.setOptions(chartOptions, themeOptions);
        }
    };

    return (
        <React.Fragment>
            <Button type="button" style={{ marginRight: 20 }} onClick={updateData}>
                Update data
            </Button>
            <Button type="button" onClick={updateCounter}>
                Update counter
            </Button>
            <hr />
            Counter: {counter}
            <hr />
            <Chart onRefresh={handleChartRefresh}>
                <ChartLegend />
                <ChartSeries>
                    <ChartSeriesItem
                        name="Series"
                        data={data}
                        color="rgb(148, 236, 255)"
                        pattern={verticalStripes}
                        tooltip={{ visible: true }}
                    />
                </ChartSeries>
            </Chart>
        </React.Fragment>
    );
};

export default ChartContainer;
