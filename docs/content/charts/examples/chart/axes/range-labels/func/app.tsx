import * as React from 'react';

import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend
} from '@progress/kendo-react-charts';

import rawData from './ch-covid-data';
import { Checkbox } from '@progress/kendo-react-inputs';

const data = rawData.map((record: { Date: Date; Timestamp: string | number | Date }) => {
    record.Date = new Date(record.Timestamp);
    return record;
});

const App = () => {
    const [showRangeLabels, setShowRangeLabels] = React.useState<boolean>(true);

    return (
        <div>
            <div className="example-config">
                <div className="form-field">
                    <Checkbox
                        checked={showRangeLabels}
                        onChange={(e) => setShowRangeLabels(e.value)}
                        label={'Show date range labels'}
                    />
                </div>
            </div>
            <Chart>
                <ChartLegend position="top" orientation="horizontal" />
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem
                        baseUnit="days"
                        maxDivisions={20}
                        labels={{ format: 'd/M' }}
                        rangeLabels={{ format: 'dd MMM yyyy', visible: showRangeLabels }}
                    />
                </ChartCategoryAxis>
                <ChartSeries>
                    <ChartSeriesItem
                        type="line"
                        style="smooth"
                        name="New Cases"
                        data={data}
                        field="NewCases"
                        categoryField="Date"
                        markers={{ visible: false }}
                        highlight={{ visible: false }}
                        tooltip={{ visible: true }}
                    />
                </ChartSeries>
            </Chart>
        </div>
    );
};

export default App;
