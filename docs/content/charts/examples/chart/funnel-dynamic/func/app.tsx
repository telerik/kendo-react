import * as React from 'react';
import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    TooltipContext
} from '@progress/kendo-react-charts';
import { Label } from '@progress/kendo-react-labels';
import data from './ch-funnel-data';
import { Checkbox } from '@progress/kendo-react-inputs';

const tooltipRender = (props: TooltipContext) => {
    if (props.point) {
        return props.point.dataItem.stat;
    }
};
const style = { marginLeft: 5, marginRight: 5 };

const ChartContainer = () => {
    const [dynamicSlope, setDynamicSlope] = React.useState(false);
    const [dynamicHeight, setDynamicHeight] = React.useState(false);

    return (
        <div>
            <div className="example-config">
                <Checkbox
                    id="slopeRatio"
                    style={style}
                    checked={dynamicSlope}
                    onChange={(e) => setDynamicSlope(e.value)}
                    label="Dynamic Slope"
                />
                <Checkbox
                    id="heightRatio"
                    style={style}
                    checked={dynamicHeight}
                    onChange={(e) => setDynamicHeight(e.value)}
                    label="Dynamic Height"
                />
            </div>
            <Chart style={{ margin: '0 auto', width: 300 }}>
                <ChartTitle text="Sales funnel" />
                <ChartSeries>
                    <ChartSeriesItem
                        type="funnel"
                        data={data}
                        categoryField="stat"
                        field="count"
                        colorField="color"
                        dynamicSlope={dynamicSlope}
                        dynamicHeight={dynamicHeight}
                    >
                        <ChartSeriesLabels color="white" background="none" format="N0" />
                    </ChartSeriesItem>
                </ChartSeries>
                <ChartTooltip render={tooltipRender} />
                <ChartLegend visible={false} />
            </Chart>
        </div>
    );
};

export default ChartContainer;
