import * as React from 'react';

import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartSeriesMarkers
} from '@progress/kendo-react-charts';
import { Label } from '@progress/kendo-react-labels';
import { makeDataObjects } from './ch-make-data-objects';
import { RadioButton } from '@progress/kendo-react-inputs';

const data = makeDataObjects(20, 10);

const ChartContainer = () => {
    const [size, setSize] = React.useState<string>('');

    const handleSizeChange = React.useCallback(
        (event: any) => {
            setSize(event.value);
        },
        [setSize]
    );

    const parsedSize = () => {
        return size === '' ? undefined : Number.parseInt(size, 10);
    };

    return (
        <div>
            <div className="example-config d-flex">
                <div className="col-12 col-md-6">
                    <h6>Marker size</h6>

                    <RadioButton
                        id="fixedSpacing"
                        name="shape"
                        value=""
                        onChange={handleSizeChange}
                        checked={size === ''}
                    />
                    <Label style={{ margin: '5px' }} editorId="fixedSpacing" className="k-radio-label">
                        Fixed spacing
                    </Label>

                    <RadioButton
                        id="fixedSize"
                        name="fixedSize"
                        value="30"
                        onChange={handleSizeChange}
                        checked={size === '30'}
                    />
                    <Label style={{ margin: '5px' }} editorId="fixedSize" className="k-radio-label">
                        Fixed size
                    </Label>
                </div>
            </div>

            <Chart>
                <ChartLegend position="top" orientation="horizontal" />

                <ChartSeries>
                    <ChartSeriesItem
                        type="heatmap"
                        data={data}
                        xField="a"
                        yField="b"
                        field="value"
                        name="Heatmap"
                        tooltip={{ visible: true }}
                    >
                        <ChartSeriesMarkers type="roundedRect" size={parsedSize()} />
                        <ChartSeriesLabels visible={false} />
                    </ChartSeriesItem>
                </ChartSeries>
            </Chart>
        </div>
    );
};

export default ChartContainer;
