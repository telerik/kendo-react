import * as React from 'react';
import {
    Chart,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
    AxisLabelVisualArgs,
    ChartLegend
} from '@progress/kendo-react-charts';
import { Group, Path } from '@progress/kendo-drawing';

const seriesData = [2034, 40124, 45234, 30234, 50234];

const labelVisual = (e: AxisLabelVisualArgs) => {
    const defaultLabel = e.createVisual();

    if (e.value < 40000) {
        return defaultLabel;
    }

    const path = new Path({
        stroke: {
            color: 'red',
            width: 1
        }
    });

    const bbox: any = defaultLabel.bbox();
    path.moveTo(bbox.bottomLeft()).lineTo(bbox.bottomRight());

    const group = new Group();
    group.append(defaultLabel, path);

    return group;
};

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartValueAxis>
            <ChartValueAxisItem labels={{ visible: true, visual: labelVisual }} />
        </ChartValueAxis>
        <ChartSeries>
            <ChartSeriesItem type="line" name="Revenue" data={seriesData} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
