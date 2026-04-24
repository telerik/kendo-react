import * as React from 'react';
import { CircularGauge, LineCap } from '@progress/kendo-react-gauges';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { ColorPicker, NumericTextBox, Slider, Switch } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const initialRangeLineCap: LineCap = 'round';

const CircularContainer = () => {
    const [state, setState] = React.useState({
        showLabels: true,
        showTicks: true,
        ticksColor: '#f44ad2',
        labelsColor: '#0000ff',
        rangeSize: 15,
        rangeLineCap: initialRangeLineCap,
        rangePlaceholderColor: '#e6e5e5',
        reverse: false,
        startAngle: 0,
        value: 30
    });

    const onFieldChange = (event, fieldName, parse) => {
        setState({
            ...state,
            [fieldName]: parse ? Math.round(event.value) : event.value
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

    const onReverseChange = (e) => {
        onFieldChange(e, 'reverse', false);
    };

    const onStartAngleChange = (e) => {
        onFieldChange(e, 'startAngle', true);
    };

    const onValueChange = (e) => {
        onFieldChange(e, 'value', true);
    };

    const {
        showLabels,
        showTicks,
        ticksColor,
        labelsColor,
        rangeSize,
        rangeLineCap,
        rangePlaceholderColor,
        reverse,
        startAngle,
        value
    } = state;

    return (
        <div>
            <div className="example-config">
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <Switch checked={showLabels} onChange={onShowLabelChange} />
                        &nbsp;Show Labels
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <Switch checked={showTicks} onChange={onShowTicksChange} />
                        &nbsp;Show Ticks
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
                                min={0}
                                max={360}
                                step={45}
                                value={startAngle}
                                style={{ verticalAlign: 'middle' }}
                                onChange={onStartAngleChange}
                            />
                            &nbsp;Start angle ({startAngle})
                        </Label>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <Label>
                            <Slider
                                min={0}
                                max={100}
                                value={value}
                                style={{ verticalAlign: 'middle' }}
                                onChange={onValueChange}
                            />
                            &nbsp;Value ({value})
                        </Label>
                    </div>
                </div>
                <hr />
                <Switch checked={reverse} onChange={onReverseChange} />
                &nbsp;Reverse
            </div>
            <CircularGauge
                value={value}
                transitions={false}
                style={{ display: 'block', height: 300 }}
                scale={{
                    labels: { format: 'c', color: labelsColor, visible: showLabels },
                    majorTicks: { visible: showTicks, color: ticksColor },
                    minorTicks: { visible: showTicks, color: ticksColor },
                    rangeSize,
                    rangeLineCap,
                    rangePlaceholderColor,
                    reverse,
                    startAngle
                }}
            />
        </div>
    );
};
export default CircularContainer;
