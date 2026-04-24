import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, SeriesLine, ChartLegend } from '@progress/kendo-react-charts';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

const ChartContainer = () => {
    const [series] = React.useState([
        20, 1, 18, 3, 15, 5, 10, 6, 9, 6, 10, 5, 13, 3, 16, 1, 19, 1, 20, 2, 18, 5, 12, 7, 10, 8
    ]);
    const [lineStyle, setLineStyle] = React.useState<SeriesLine['style']>('normal');
    const [lineStyles] = React.useState(['normal', 'step', 'smooth']);

    return (
        <div>
            <DropDownList
                data={lineStyles}
                value={lineStyle}
                onChange={(event: DropDownListChangeEvent) => {
                    setLineStyle(event.target.value);
                }}
            />
            <Chart>
                <ChartLegend position="top" orientation="horizontal" />
                <ChartSeries>
                    <ChartSeriesItem
                        type="area"
                        name="Series"
                        data={series}
                        markers={{ visible: false }}
                        line={{ style: lineStyle }}
                        tooltip={{ visible: true }}
                    />
                </ChartSeries>
            </Chart>
        </div>
    );
};

export default ChartContainer;
