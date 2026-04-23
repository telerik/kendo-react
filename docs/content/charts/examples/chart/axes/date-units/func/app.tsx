import * as React from 'react';

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    CategoryBaseUnit
} from '@progress/kendo-react-charts';

import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { mockData } from './ch-weather-data';

const data = mockData();
const baseUnits = ['days', 'weeks', 'months'];

const ChartContainer = () => {
    const [baseUnit, setBaseUnit] = React.useState<CategoryBaseUnit>('weeks');

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
                        type="column"
                        name="Daily Max"
                        field="TMax"
                        categoryField="Date"
                        data={data}
                        tooltip={{ visible: true }}
                    />
                </ChartSeries>
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem baseUnit={baseUnit} />
                </ChartCategoryAxis>
            </Chart>
        </div>
    );
};

export default ChartContainer;
