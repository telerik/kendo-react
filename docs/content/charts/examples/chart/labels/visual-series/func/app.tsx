import * as React from 'react';
import { Chart, ChartSeries, ChartSeriesItem, SeriesLabelsVisualArgs, ChartLegend } from '@progress/kendo-react-charts';
import { Group, Path } from '@progress/kendo-drawing';

const seriesData = [2034, 40124, 45234, 30234, 50234];

const labelVisual = (e: SeriesLabelsVisualArgs) => {
    const defaultLabel = e.createVisual();
    const value = parseFloat(e.text);

    if (value < 40000) {
        return defaultLabel;
    }

    const path = new Path({
        stroke: {
            color: 'red',
            width: 1
        }
    });

    const bbox = defaultLabel.bbox();
    path.moveTo(bbox.topLeft()).lineTo(bbox.topRight());

    const group = new Group();
    group.append(defaultLabel, path);

    return group;
};

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                type="line"
                name="Revenue"
                data={seriesData}
                labels={{ visible: true, visual: labelVisual }}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
