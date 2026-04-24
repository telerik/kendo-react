import React, { useRef, useCallback } from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    exportVisual,
    GridPattern
} from '@progress/kendo-react-charts';
import { Button } from '@progress/kendo-react-buttons';
import { exportPDF } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';

const ChartContainer = () => {
    const chartRef = useRef<any>(null);

    const onPDFExportClick = useCallback(() => {
        if (!chartRef.current) return;
        const chartVisual = exportVisual(chartRef.current);
        if (chartVisual) {
            exportPDF(chartVisual, {
                paperSize: 'A4',
                landscape: true
            }).then((dataURI) => saveAs(dataURI, 'chart.pdf'));
        }
    }, []);

    return (
        <div>
            <Button type="button" onClick={onPDFExportClick}>
                Export as PDF
            </Button>
            <Chart ref={chartRef}>
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem categories={[2015, 2016, 2017, 2018]} />
                </ChartCategoryAxis>
                <ChartSeries>
                    <ChartSeriesItem data={[110, 230, 200, 78]} />
                </ChartSeries>
            </Chart>
        </div>
    );
};

export default ChartContainer;
