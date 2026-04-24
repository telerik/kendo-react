import * as React from 'react';

import { saveAs } from '@progress/kendo-file-saver';
import { exportPDF } from '@progress/kendo-drawing/pdf';
import { Rect } from '@progress/kendo-drawing/geometry';
import { fit, Group } from '@progress/kendo-drawing';
import { Button } from '@progress/kendo-react-buttons';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    GridPattern,
    exportVisual
} from '@progress/kendo-react-charts';

const mm = (val) => val * 2.8347;
const PAGE_RECT = new Rect([0, 0], [mm(210 - 20), mm(297 - 20)]);

const ChartContainer = () => {
    const chart = React.useRef(null);

    const gridPattern: GridPattern = {
        type: 'grid',
        background: 'rgb(255, 148, 109)',
        size: 12,
        gap: 1.2
    };

    const exportSizedChart = () => {
        if (chart.current) {
            const visual = exportVisual(chart.current, {
                width: PAGE_RECT.size.width
            });
            exportElement(visual);
        }
    };

    const exportScaledChart = () => {
        const visual = chart.current && exportVisual(chart.current);
        const content = new Group();

        if (visual) {
            content.append(visual);
            fit(content, PAGE_RECT);
            exportElement(content);
        }
    };

    const exportElement = (element) => {
        exportPDF(element, {
            paperSize: 'A4',
            margin: '1cm'
        }).then((dataURI) => {
            saveAs(dataURI, 'chart.pdf');
        });
    };

    return (
        <div>
            <Button type="button" onClick={exportScaledChart}>
                Export as PDF(scаle)
            </Button>
            <Button type="button" onClick={exportSizedChart}>
                Export as PDF(size)
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
                        color="rgb(255, 99, 88)"
                        pattern={gridPattern}
                        tooltip={{ visible: true }}
                    />
                </ChartSeries>
            </Chart>
        </div>
    );
};

export default ChartContainer;
