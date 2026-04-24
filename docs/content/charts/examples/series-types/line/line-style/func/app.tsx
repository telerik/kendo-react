import React, { useState } from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Chart, ChartSeries, ChartSeriesItem, LineStyle } from '@progress/kendo-react-charts';

const series: number[] = [20, 1, 18, 3, 15, 5, 10, 6, 9, 6, 10, 5, 13, 3, 16, 1, 19, 1, 20, 2, 18, 5, 12, 7, 10, 8];

const ChartContainer = () => {
    const [style, setStyle] = useState<LineStyle>('normal');

    return (
        <div>
            <DropDownList
                data={['normal', 'step', 'smooth']}
                value={style}
                onChange={(event) => setStyle(event.target.value as LineStyle)}
            />
            <Chart>
                <ChartSeries>
                    <ChartSeriesItem type="line" data={series} markers={{ visible: false }} style={style} />
                </ChartSeries>
            </Chart>
        </div>
    );
};

export default ChartContainer;
