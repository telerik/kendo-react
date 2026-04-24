import * as React from 'react';
import { NumericTextBox, NumericTextBoxChangeEvent } from '@progress/kendo-react-inputs';
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

const tooltipRender = (props: TooltipContext) => {
    if (props.point) {
        return props.point.dataItem.stat;
    }
};

const ChartContainer = () => {
    const [neckRation, setNeckRation] = React.useState<number>(0.3);

    return (
        <div>
            <div className="example-config">
                <NumericTextBox
                    onChange={(event: NumericTextBoxChangeEvent) => setNeckRation(event.value || 0)}
                    value={neckRation}
                    spinners={true}
                    min={0}
                    max={5}
                    step={0.1}
                    label={`Neck ratio (${neckRation})`}
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
                        neckRatio={neckRation}
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
