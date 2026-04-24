import * as React from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartTooltip,
    ChartLegend,
    TooltipContext,
    ChartSeriesLabels
} from '@progress/kendo-react-charts';
import { Checkbox, CheckboxChangeEvent } from '@progress/kendo-react-inputs';
import { data } from './data';

const tooltipRender = (props: TooltipContext) => {
    if (props.point) {
        const { category, percentage } = props.point;
        return (
            <span>
                {String(category)}: ({Math.floor(percentage * 100) + '%'})
            </span>
        );
    }
};

const App = () => {
    const [dynamicHeight, setDynamicHeight] = React.useState<boolean>(false);

    const onChange = React.useCallback((event: CheckboxChangeEvent) => {
        setDynamicHeight(Boolean(event.target.value));
    }, []);

    return (
        <React.Fragment>
            <div className="example-config">
                <Checkbox checked={dynamicHeight} onChange={onChange} label="Dynamic Height" />
            </div>

            <Chart style={{ width: 300, margin: '0 auto' }}>
                <ChartTitle text="Sales" />

                <ChartLegend position="top" orientation="horizontal" />

                <ChartSeries>
                    <ChartSeriesItem
                        type="pyramid"
                        field="count"
                        categoryField="stat"
                        dynamicHeight={dynamicHeight}
                        data={data}
                        name="Sales"
                    >
                        <ChartSeriesLabels background="none" />
                    </ChartSeriesItem>
                </ChartSeries>

                <ChartTooltip render={tooltipRender} />
            </Chart>
        </React.Fragment>
    );
};

export default App;
