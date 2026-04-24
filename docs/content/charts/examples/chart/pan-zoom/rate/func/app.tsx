import * as React from 'react';
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartLegend
} from '@progress/kendo-react-charts';

import { randomData } from './data';
import { NumericTextBox } from '@progress/kendo-react-inputs';

const data = randomData();

const ChartContainer = () => {
    const [zoomRate, setZoomRate] = React.useState<number>(0.3);

    return (
        <div>
            <div className="example-config">
                <NumericTextBox
                    onChange={(e) => setZoomRate(Number(e.value))}
                    value={zoomRate}
                    min={0.05}
                    max={0.9}
                    step={0.05}
                    label={`Zoom rate (${zoomRate})`}
                />
            </div>
            <Chart renderAs="canvas" transitions={false} pannable={true} zoomable={{ mousewheel: { rate: zoomRate } }}>
                <ChartTitle text="Sales funnel" />
                <ChartLegend />
                <ChartSeries>
                    <ChartSeriesItem
                        type="column"
                        name="Sales"
                        data={data}
                        categoryField="category"
                        field="value"
                        tooltip={{ visible: true }}
                    />
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem max={new Date(2021, 1, 0)} maxDivisions={10} />
                    </ChartCategoryAxis>
                    <ChartValueAxis>
                        <ChartValueAxisItem labels={{ format: 'N2' }} />
                    </ChartValueAxis>
                </ChartSeries>
            </Chart>
        </div>
    );
};

export default ChartContainer;
