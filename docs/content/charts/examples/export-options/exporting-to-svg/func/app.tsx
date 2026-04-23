import * as React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    VerticalStripesPattern,
    exportVisual
} from '@progress/kendo-react-charts';
import { Button } from '@progress/kendo-react-buttons';

import { exportSVG } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';

const verticalStripes: VerticalStripesPattern = {
    type: 'verticalStripes',
    background: 'rgb(75, 96, 250)',
    width: 1.2,
    gap: 12
};

const ChartContainer = () => {
    const chart = React.useRef(null);

    const onSVGExportClick = () => {
        const chartVisual = chart.current && exportVisual(chart.current);

        if (chartVisual) {
            exportSVG(chartVisual).then((dataURI) => saveAs(dataURI, 'chart.svg'));
        }
    };

    return (
        <div>
            <Button type="button" onClick={onSVGExportClick}>
                Export as SVG
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
