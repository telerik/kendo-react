import * as React from 'react';

import { ArcGauge, LinearGauge, RadialGauge } from '@progress/kendo-react-gauges';
import { Button } from '@progress/kendo-react-buttons';

import { exportImage } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';

const GaugeExportComponent = () => {
    const _arcGauge = React.createRef<ArcGauge>();
    const _linearGauge = React.createRef<LinearGauge>();
    const _radialGauge = React.createRef<RadialGauge>();

    const exportGaugeVisual = (gauge, callback) => {
        gauge.exportVisual().then((gaugeVisual) => callback(gaugeVisual));
    };

    const exportGauge = (gauge) => {
        exportGaugeVisual(gauge, (gaugeVisual) =>
            exportImage(gaugeVisual).then((dataURI) => saveAs(dataURI, 'gauge.svg'))
        );
    };

    const exportLinearGauge = () => {
        exportGauge(_linearGauge.current);
    };

    const exportRadialGauge = () => {
        exportGauge(_radialGauge.current);
    };

    const exportArcGauge = () => {
        exportGauge(_arcGauge.current);
    };

    const arcCenterRenderer = (value: number, color: string) => {
        return <div style={{ color: color }}>{value}%</div>;
    };

    const value = 30;
    const pointer = {
        value: value
    };

    const gaugeStyles = {
        display: 'block'
    };

    return (
        <div>
            <h5>Export to SVG</h5>
            <div className="example-config">
                <Button onClick={exportLinearGauge}>Export Linear Gauge</Button>
                <Button onClick={exportRadialGauge}>Export Radial Gauge</Button>
                <Button onClick={exportArcGauge}>Export Arc Gauge</Button>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-2">
                    <LinearGauge ref={_linearGauge} style={gaugeStyles} pointer={pointer} />
                </div>
                <div className="col-sm-12 col-md-5">
                    <RadialGauge ref={_radialGauge} style={gaugeStyles} pointer={pointer} />
                </div>
                <div className="col-sm-12 col-md-5">
                    <ArcGauge ref={_arcGauge} arcCenterRender={arcCenterRenderer} style={gaugeStyles} value={value} />
                </div>
            </div>
        </div>
    );
};

export default GaugeExportComponent;
