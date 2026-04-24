import * as React from 'react';
import { ArcGauge, CircularGauge, LinearGauge, RadialGauge } from '@progress/kendo-react-gauges';

const value = 30;
const pointer = {
    value: value
};

const centerRenderer = (currentValue: number, color: string) => {
    return <h3 style={{ color: color }}>{currentValue}%</h3>;
};

const gaugeStyles = {
    display: 'block'
};

const GaugeContainer = () => (
    <div className="row">
        <div className="col-sm-12 col-md-6">
            <RadialGauge style={gaugeStyles} pointer={pointer} />
        </div>
        <div className="col-sm-12 col-md-6">
            <ArcGauge style={gaugeStyles} value={value} centerRender={centerRenderer} />
        </div>
        <div className="col-sm-12 col-md-6">
            <CircularGauge style={gaugeStyles} value={value} centerRender={centerRenderer} />
        </div>
        <div className="col-sm-12 col-md-6">
            <LinearGauge style={gaugeStyles} pointer={pointer} />
        </div>
    </div>
);

export default GaugeContainer;
