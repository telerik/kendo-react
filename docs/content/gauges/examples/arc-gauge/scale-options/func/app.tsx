import * as React from 'react';
import { ArcGauge } from '@progress/kendo-react-gauges';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { ColorPicker, NumericTextBox, Slider, Switch } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const ArcContainer = () => {
    const [arcOptions, setArcOptions] = React.useState<any>({
        showLabels: true,
        showTicks: true,
        ticksColor: '#f44ad2',
        labelsColor: '#0000ff',
        rangeSize: 15,
        rangeLineCap: 'round',
        rangePlaceholderColor: '#e6e5e5',
        startAngle: 0,
        endAngle: 180,
        reverse: false
    });

    const onFieldChange = (event, fieldName, parse) => {
        let value = parse ? Math.floor(event.value) : event.value;
        setArcOptions({
            ...arcOptions,
            [fieldName]: value
        });
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

    const onRangeLineCapChange = (e) => {
        onFieldChange(e, 'rangeLineCap', false);
    };

    const onRangePlaceholderColorChange = (e) => {
        onFieldChange(e, 'rangePlaceholderColor', false);
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

    const {
        showLabels,
        showTicks,
        ticksColor,
        labelsColor,
        rangeSize,
        rangeLineCap,
        rangePlaceholderColor,
        startAngle,
        endAngle,
        reverse
    } = arcOptions;

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
                    <div className="col-sm-12 col-md-4">
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
                    <div className="col-sm-12 col-md-4">
                        <Label>
                            <DropDownList
                                style={{ width: 90 }}
                                data={['round', 'butt']}
                                onChange={onRangeLineCapChange}
                                value={rangeLineCap}
                            />
                            &nbsp;Range Line Cap
                        </Label>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Label>
                            <ColorPicker
                                view="gradient"
                                value={rangePlaceholderColor}
                                onChange={onRangePlaceholderColorChange}
                            />
                            &nbsp;Range Placeholder Color
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
            <ArcGauge
                value={30}
                transitions={false}
                scale={{
                    labels: { format: 'c', color: labelsColor, visible: showLabels },
                    majorTicks: { visible: showTicks, color: ticksColor },
                    minorTicks: { visible: showTicks, color: ticksColor },
                    rangeSize,
                    rangeLineCap,
                    rangePlaceholderColor,
                    startAngle,
                    endAngle,
                    reverse
                }}
            />
        </div>
    );
};
export default ArcContainer;
