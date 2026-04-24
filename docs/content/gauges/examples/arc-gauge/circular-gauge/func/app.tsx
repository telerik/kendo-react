import React, { useState } from 'react';
import { ArcGauge, ArcScale } from '@progress/kendo-react-gauges';
import { Label } from '@progress/kendo-react-labels';
import { Slider } from '@progress/kendo-react-inputs';

const circularScale = (startAngle) => ({ startAngle, endAngle: startAngle + 360 });

function ArcCenter(value: number) {
    return <span>{value}%</span>;
}

function CircularGauge({ value }) {
    const rangeSize = 20;
    const rangeLineCap = 'butt';
    const scale: ArcScale = { ...circularScale(90), rangeSize, rangeLineCap };

    return <ArcGauge value={value} transitions={false} scale={scale} arcCenterRender={ArcCenter} />;
}

function App() {
    const initialValue = 90;
    const [value, setValue] = useState(initialValue);

    return (
        <React.Fragment>
            <div className="example-config">
                <Label>
                    <Slider
                        min={0}
                        max={100}
                        value={value}
                        style={{ verticalAlign: 'middle' }}
                        onChange={(e) => setValue(Math.round(e.value))}
                    />
                    &nbsp;Value
                </Label>
            </div>
            <CircularGauge value={value} />
        </React.Fragment>
    );
}

export default App;
