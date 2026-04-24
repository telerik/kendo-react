import * as React from 'react';

import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartSeriesMarkers,
    ChartXAxis,
    ChartXAxisItem,
    MarkerType
} from '@progress/kendo-react-charts';
import { Label } from '@progress/kendo-react-labels';
import { makeDataObjects } from './ch-make-data-objects';
import { RadioButton } from '@progress/kendo-react-inputs';

const data = makeDataObjects(20, 10);

const ChartContainer = () => {
    const [shape, setShape] = React.useState<MarkerType>('roundedRect');

    const handleShapeChange = React.useCallback(
        (event: any) => {
            setShape(event.value);
        },
        [setShape]
    );

    return (
        <div>
            <div className="example-config d-flex">
                <div className="col-12 col-md-12">
                    <h6>Marker shape</h6>

                    <RadioButton
                        id="rect"
                        name="shape"
                        value="rect"
                        onChange={handleShapeChange}
                        checked={shape === 'rect'}
                    />
                    <Label style={{ margin: '5px' }} editorId="rect" className="k-radio-label">
                        Rectange
                    </Label>

                    <RadioButton
                        id="roundedRect"
                        name="roundedRect"
                        value="roundedRect"
                        onChange={handleShapeChange}
                        checked={shape === 'roundedRect'}
                    />
                    <Label style={{ margin: '5px' }} editorId="roundedRect" className="k-radio-label">
                        Rounded Rectangle
                    </Label>

                    <RadioButton
                        id="circle"
                        name="cat"
                        value="circle"
                        onChange={handleShapeChange}
                        checked={shape === 'circle'}
                    />
                    <Label style={{ margin: '5px' }} editorId="circle" className="k-radio-label">
                        Circle
                    </Label>

                    <RadioButton
                        id="triangle"
                        name="cat"
                        value="triangle"
                        onChange={handleShapeChange}
                        checked={shape === 'triangle'}
                    />
                    <Label style={{ margin: '5px' }} editorId="triangle" className="k-radio-label">
                        Triangle
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
                        <ChartSeriesMarkers type={shape} border={{ width: 1 }} />
                        <ChartSeriesLabels visible={false} />
                    </ChartSeriesItem>
                </ChartSeries>

                <ChartXAxis>
                    <ChartXAxisItem labels={{ rotation: 'auto' }} />
                </ChartXAxis>
            </Chart>
        </div>
    );
};

export default ChartContainer;
