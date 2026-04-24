import * as React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    exportVisual,
    VerticalStripesPattern
} from '@progress/kendo-react-charts';

import { exportImage } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';
import { Button } from '@progress/kendo-react-buttons';

const verticalStripes: VerticalStripesPattern = {
    type: 'verticalStripes',
    background: 'rgb(75, 96, 250)',
    width: 1.2,
    gap: 12
};

const ChartContainer = () => {
    const chart = React.createRef<Chart>();

    const onExportVisual = () => {
        const chartVisual: any = exportVisual(chart.current as any);
        exportImage(chartVisual).then((dataURI) => saveAs(dataURI, 'chart.png'));
    };

    return (
        <div>
            <Button type="button" onClick={onExportVisual}>
                Export as visual element
            </Button>
            <Chart ref={chart}>
                <ChartLegend />
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem categories={[2015, 2016, 2017, 2018]} />
                </ChartCategoryAxis>
                <ChartSeries>
                    <ChartSeriesItem
                        type="column"
                        name="Series"
                        data={[110, 230, 200, 78]}
                        color="rgb(148, 236, 255)"
                        pattern={verticalStripes}
                        tooltip={{ visible: true }}
                    />
                </ChartSeries>
            </Chart>
        </div>
    );
};

export default ChartContainer;
