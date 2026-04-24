import React, { useRef, useCallback } from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    exportVisual,
    CrosshatchPattern
} from '@progress/kendo-react-charts';
import { Button } from '@progress/kendo-react-buttons';
import { exportImage } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';

const ChartContainer = () => {
    const chartRef = useRef<any>(null);

    const onImageExportClick = useCallback(() => {
        if (!chartRef.current) return;
        const chartVisual = exportVisual(chartRef.current);
        if (chartVisual) {
            exportImage(chartVisual, { width: 1200, height: 800 }).then((dataURI) => {
                saveAs(dataURI, 'chart.png');
            });
        }
    }, []);

    return (
        <div>
            <Button type="button" onClick={onImageExportClick}>
                Export as Image
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
