import * as React from 'react';

import { Circle as CircleGeometry } from '@progress/kendo-drawing/geometry';
import { Layout, Text } from '@progress/kendo-drawing';

import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    RenderEvent,
    SeriesVisualArgs
} from '@progress/kendo-react-charts';
import data from './ch-power-distribution-data';

let center;
let radius;

const labelContent = (e: any) => e.category;

const visualHandler = (e: SeriesVisualArgs) => {
    center = e.center;
    radius = e.innerRadius;
    return e.createVisual();
};

const onRender = (e: RenderEvent) => {
    const circleGeometry = new CircleGeometry([center.x, center.y], radius);
    const bbox = circleGeometry.bbox();

    const heading = new Text('22.5%', [0, 0], { font: '28px Verdana,Arial,sans-serif' });
    const line1 = new Text('of which', [0, 0], { font: '16px Verdana,Arial,sans-serif' });
    const line2 = new Text('renewables', [0, 0], { font: '16px Verdana,Arial,sans-serif' });

    const layout = new Layout(bbox, {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        spacing: 5
    });

    layout.append(heading, line1, line2);
    layout.reflow();

    if (e.target.surface) {
        e.target.surface.draw(layout);
    }
};

const ChartContainer = () => (
    <Chart onRender={onRender}>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                type="donut"
                name="Power Distribution"
                data={data}
                categoryField="kind"
                field="share"
                visual={visualHandler}
                tooltip={{ visible: true }}
            >
                <ChartSeriesLabels color="#fff" background="none" content={labelContent} />
            </ChartSeriesItem>
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
