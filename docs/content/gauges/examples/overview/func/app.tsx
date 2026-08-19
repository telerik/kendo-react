import * as React from 'react';
import { ArcGauge, CircularGauge, LinearGauge, RadialGauge } from '@progress/kendo-react-gauges';
import { Card, CardHeader, CardBody, CardFooter } from '@progress/kendo-react-layout';
import './styles.css';

const gaugeStyle = { width: '100%', height: '100%', display: 'block' as const };

const cpuPointer = { value: 68, color: '#ff9800' };
const cpuScale = {
    min: 0,
    max: 100,
    majorUnit: 20,
    minorUnit: 5,
    ranges: [
        { from: 0, to: 60, color: '#4caf50' },
        { from: 60, to: 80, color: '#ff9800' },
        { from: 80, to: 100, color: '#f44336' }
    ]
};

const memory = 18.4;
const memoryColors = [
    { to: 16, color: '#4caf50' },
    { from: 16, to: 24, color: '#ff9800' },
    { from: 24, color: '#f44336' }
];
const memoryScale = {
    min: 0,
    max: 32,
    majorUnit: 8,
    minorUnit: 4,
    labels: { visible: true, format: '{0} GB' }
};

const network = 342;
const networkColors = [
    { to: 400, color: '#4caf50' },
    { from: 400, to: 750, color: '#ff9800' },
    { from: 750, color: '#f44336' }
];
const networkScale = {
    min: 0,
    max: 1000,
    majorUnit: 200,
    minorUnit: 50,
    labels: { visible: true }
};

const temperaturePointer = { value: 74, shape: 'arrow' as const, color: '#ff9800', size: 15, margin: { top: 15 } };
const temperatureScale = {
    vertical: false,
    min: 0,
    max: 120,
    majorUnit: 20,
    minorUnit: 10,
    ranges: [
        { from: 0, to: 60, color: '#4caf50' },
        { from: 60, to: 90, color: '#ff9800' },
        { from: 90, to: 120, color: '#f44336' }
    ]
};

const memoryCenter = (value: number) => (
    <div className="center-label">
        <span className="center-value">{value.toFixed(1)}</span>
        <span className="center-unit">of 32 GB</span>
    </div>
);

const networkCenter = (value: number) => (
    <div className="center-label">
        <span className="center-value">{value}</span>
        <span className="center-unit">Mbps</span>
    </div>
);

const App = () => (
    <div className="demo-wrapper">
        <div className="metrics-grid">
            <Card>
                <CardHeader>
                    <span className="card-title">CPU Load</span>
                    <span className="badge badge-warning">
                        <span className="badge-dot" />
                        Warning
                    </span>
                </CardHeader>
                <CardBody>
                    <div className="gauge-wrap">
                        <RadialGauge style={gaugeStyle} pointer={cpuPointer} scale={cpuScale} />
                    </div>
                </CardBody>
                <CardFooter>
                    <span className="card-value">68%</span>
                    <span className="card-meta">4-core · 3.2 GHz</span>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <span className="card-title">Memory Usage</span>
                    <span className="badge badge-warning">
                        <span className="badge-dot" />
                        Warning
                    </span>
                </CardHeader>
                <CardBody>
                    <div className="gauge-wrap">
                        <ArcGauge
                            style={gaugeStyle}
                            value={memory}
                            colors={memoryColors}
                            scale={memoryScale}
                            centerRender={memoryCenter}
                        />
                    </div>
                </CardBody>
                <CardFooter>
                    <span className="card-value">58% utilized</span>
                    <span className="card-meta">DDR4 ECC</span>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <span className="card-title">Network</span>
                    <span className="badge badge-normal">
                        <span className="badge-dot" />
                        Normal
                    </span>
                </CardHeader>
                <CardBody>
                    <div className="gauge-wrap">
                        <CircularGauge
                            style={gaugeStyle}
                            value={network}
                            colors={networkColors}
                            scale={networkScale}
                            centerRender={networkCenter}
                        />
                    </div>
                </CardBody>
                <CardFooter>
                    <span className="card-value">342 / 1000 Mbps</span>
                    <span className="card-meta">1 GbE · eth0</span>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <span className="card-title">CPU Temperature</span>
                    <span className="badge badge-warning">
                        <span className="badge-dot" />
                        Warning
                    </span>
                </CardHeader>
                <CardBody>
                    <div className="gauge-wrap linear-wrap">
                        <LinearGauge style={gaugeStyle} pointer={temperaturePointer} scale={temperatureScale} />
                    </div>
                </CardBody>
                <CardFooter>
                    <span className="card-value">74°C</span>
                    <span className="card-meta">Thermal limit: 90°C</span>
                </CardFooter>
            </Card>
        </div>
    </div>
);

export default App;
