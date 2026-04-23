import * as React from 'react';

import { Chart, ChartLegend, ChartSeries, ChartSeriesItem, LineStyle } from '@progress/kendo-react-charts';

import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import data from './ch-scatter-line-style-data';

const lineStyles: LineStyle[] = ['normal', 'smooth'];

const ChartContainer = () => {
    const [lineStyle, setLineStyle] = React.useState<LineStyle>('normal');

    return (
        <div>
            <DropDownList
                data={lineStyles}
                value={lineStyle}
                onChange={(event: DropDownListChangeEvent) => {
                    setLineStyle(event.value);
                }}
            />

            <Chart>
                <ChartLegend position="top" orientation="horizontal" />

                <ChartSeries>
                    <ChartSeriesItem
                        type="scatterLine"
                        data={data}
                        style={lineStyle}
                        markers={{ visible: false }}
                        name="Series"
                        tooltip={{ visible: true }}
                    />
                </ChartSeries>
            </Chart>
        </div>
    );
};

export default ChartContainer;
