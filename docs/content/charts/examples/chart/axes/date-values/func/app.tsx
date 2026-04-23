import * as React from 'react';

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartLegend,
    BaseUnit
} from '@progress/kendo-react-charts';

import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { mockData } from './ch-weather-data';

const data = mockData();
const baseUnits = ['days', 'weeks', 'months'];

const ChartContainer = () => {
    const [baseUnit, setBaseUnit] = React.useState<BaseUnit>('weeks');

    const onChange = (event: DropDownListChangeEvent) => {
        setBaseUnit(event.value);
    };

    return (
        <div>
            <div className="example-config">
                <Label>Base Unit</Label>
                <DropDownList style={{ marginLeft: 5 }} value={baseUnit} onChange={onChange} data={baseUnits} />
            </div>
            <Chart>
                <ChartTitle text="Daily Max (&deg;C)" />
                <ChartLegend position="top" orientation="horizontal" />
                <ChartSeries>
                    <ChartSeriesItem
                        type="scatterLine"
                        name="Daily Max"
                        yField="TMax"
                        xField="Date"
                        data={data}
                        tooltip={{ visible: true }}
                    />
                </ChartSeries>
                <ChartXAxis>
                    <ChartXAxisItem baseUnit={baseUnit} />
                </ChartXAxis>
            </Chart>
        </div>
    );
};

export default ChartContainer;
