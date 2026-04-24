import * as React from 'react';
import { RadialGauge } from '@progress/kendo-react-gauges';
import { ColorPicker, NumericTextBox, Slider, Switch } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const RadialContainer = () => {
    const [radialOptions, setRadialOptions] = React.useState<any>({
        showLabels: true,
        showTicks: true,
        ticksColor: '#008000',
        labelsColor: '#0000ff',
        rangeSize: 10,
        rangeLineCap: 'round',
        rangeColor: '#ffcccc',
        startAngle: 0,
        endAngle: 180,
        reverse: false
    });

    const onFieldChange = (event, fieldName, parse) => {
        let value = parse ? Math.round(event.value) : event.value;
        setRadialOptions({ ...radialOptions, [fieldName]: value });
    };
    const onShowLabelChange = (e) => {
        onFieldChange(e, 'showLabels', false);
    };

    const onShowTicksChange = (e) => {
        onFieldChange(e, 'showTicks', false);
    };

    const onTicksColorChange = (e) => {
        onFieldChange(e, 'ticksColor', false);
    };

    const onLabelsColorChange = (e) => {
        onFieldChange(e, 'labelsColor', false);
    };

    const onRangeSizeChange = (e) => {
        onFieldChange(e, 'rangeSize', true);
    };

    const onRangeColorChange = (e) => {
        onFieldChange(e, 'rangeColor', false);
    };

    const onStartAngleChange = (e) => {
        onFieldChange(e, 'startAngle', true);
    };

    const onEndAngleChange = (e) => {
        onFieldChange(e, 'endAngle', true);
    };

    const onReverseChange = (e) => {
        onFieldChange(e, 'reverse', false);
    };
    const { showLabels, showTicks, ticksColor, labelsColor, rangeSize, rangeColor, startAngle, endAngle, reverse } =
        radialOptions;

    return (
        <div>
            <div className="example-config">
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <Label>
                            <Switch checked={showLabels} onChange={onShowLabelChange} />
                            &nbsp;Show Labels
                        </Label>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <Label>
                            <Switch checked={showTicks} onChange={onShowTicksChange} />
                            &nbsp;Show Ticks
                        </Label>
                    </div>

                    <div className="col-sm-12 col-md-3">
                        <Label>
                            <ColorPicker view="gradient" value={ticksColor} onChange={onTicksColorChange} />
                            &nbsp;Ticks Color
                        </Label>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <Label>
                            <ColorPicker view="gradient" value={labelsColor} onChange={onLabelsColorChange} />
                            &nbsp;Labels Color
                        </Label>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <Label>
                            <NumericTextBox
                                width={80}
                                onChange={onRangeSizeChange}
                                value={rangeSize}
                                min={1}
                                max={30}
                            />
                            &nbsp;Range Size
                        </Label>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <Label>
                            <ColorPicker view="gradient" value={rangeColor} onChange={onRangeColorChange} />
                            &nbsp;Range Color
                        </Label>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <Label>
                            <Slider
                                min={-90}
                                max={90}
                                value={startAngle}
                                style={{ verticalAlign: 'middle' }}
                                onChange={onStartAngleChange}
                            />
                            &nbsp;Start angle
                        </Label>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <Label>
                            <Slider
                                min={90}
                                max={270}
                                value={endAngle}
                                style={{ verticalAlign: 'middle' }}
                                onChange={onEndAngleChange}
                            />
                            &nbsp;End angle
                        </Label>
                    </div>
                </div>
                <hr />
                <Label>
                    <Switch checked={reverse} onChange={onReverseChange} />
                    &nbsp;Reverse
                </Label>
            </div>
            <RadialGauge
                pointer={{
                    value: 30
                }}
                transitions={false}
                scale={{
                    labels: { format: 'c', color: labelsColor, visible: showLabels },
                    majorTicks: { visible: showTicks, color: ticksColor },
                    minorTicks: { visible: showTicks, color: ticksColor },
                    rangeSize,
                    startAngle,
                    endAngle,
                    reverse,
                    ranges: [
                        {
                            from: 0,
                            to: 50,
                            color: rangeColor
                        }
                    ]
                }}
            />
        </div>
    );
};

export default RadialContainer;
