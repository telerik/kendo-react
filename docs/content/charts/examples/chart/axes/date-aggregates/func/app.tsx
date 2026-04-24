import * as React from 'react';

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend
} from '@progress/kendo-react-charts';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { mockData } from './ch-weather-data';

const data = mockData();
const aggregates = ['max', 'min'];

const ChartContainer = () => {
    const [aggregate, setAggregate] = React.useState('max');

    const onChange = (event: DropDownListChangeEvent) => {
        setAggregate(event.target.value);
    };

    return (
        <div>
            <div className="example-config">
                <Label>Base Unit</Label>
                <DropDownList style={{ marginLeft: 5 }} value={aggregate} onChange={onChange} data={aggregates} />
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
                        aggregate={aggregate}
                        data={data}
                        tooltip={{ visible: true }}
                    />
                </ChartSeries>
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem baseUnit="weeks" />
                </ChartCategoryAxis>
            </Chart>
        </div>
    );
};

export default ChartContainer;
