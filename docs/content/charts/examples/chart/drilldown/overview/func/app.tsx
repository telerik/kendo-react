import * as React from 'react';

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

const crosshatchPattern: CrosshatchPattern = {
    type: 'crosshatch',
    background: 'rgb(172, 88, 255)',
    width: 1.2,
    gap: 12
};

class ChartContainer extends React.Component {
    _chart: any;

    render() {
        return (
            <div>
                <Button type="button" onClick={this.onImageExportClick}>
                    Export as Image
                </Button>
                <Chart
                    ref={(cmp) => {
                        this._chart = cmp;
                    }}
                >
                    <ChartLegend />
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={[2015, 2016, 2017, 2018]} />
                    </ChartCategoryAxis>
                    <ChartSeries>
                        <ChartSeriesItem
                            type="column"
                            name="Series"
                            data={[110, 230, 200, 78]}
                            color="rgb(250, 201, 187)"
                            pattern={crosshatchPattern}
                            tooltip={{ visible: true }}
                        />
                    </ChartSeries>
                </Chart>
            </div>
        );
    }

    onImageExportClick = () => {
        const chartVisual = exportVisual(this._chart);
        if (chartVisual) {
            exportImage(chartVisual, { width: 1200, height: 800 }).then((dataURI) => saveAs(dataURI, 'chart.png'));
        }
    };
}

export default ChartContainer;
