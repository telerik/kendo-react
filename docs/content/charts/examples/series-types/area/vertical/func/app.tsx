import * as React from 'react';
import { useState } from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend
} from '@progress/kendo-react-charts';

const ChartContainer = () => {
    const [categories] = useState(['Jan', 'Feb', 'Mar', 'Apr']);
    const [positiveSeries] = useState([1, 2, 3, 5]);
    const [negativeSeries] = useState([-1, -2, -3, -5]);

    return (
        <div>
            <Chart>
                <ChartLegend position="top" orientation="horizontal" />
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem categories={categories} />
                </ChartCategoryAxis>
                <ChartSeries>
                    <ChartSeriesItem
                        type="verticalArea"
                        name="Positive"
                        data={positiveSeries}
                        tooltip={{ visible: true }}
                    />
                    <ChartSeriesItem
                        type="verticalArea"
                        name="Negative"
                        data={negativeSeries}
                        tooltip={{ visible: true }}
                    />
                </ChartSeries>
            </Chart>
        </div>
    );
};

export default ChartContainer;
