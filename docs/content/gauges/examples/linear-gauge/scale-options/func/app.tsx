import * as React from 'react';
import { LinearGauge, LinearGaugeProps } from '@progress/kendo-react-gauges';
import {
    ColorPicker,
    NumericTextBox,
    Switch,
    ColorPickerChangeEvent,
    NumericTextBoxChangeEvent,
    SwitchChangeEvent
} from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const LinearContainer = () => {
    const [linearOptions, setLinearOptions] = React.useState({
        showTicks: true,
        ticksColor: '#008000',
        labelsColor: '#0000ff',
        rangeSize: 4,
        rangeColor: '#ff6358',
        lineWidth: 2,
        lineColor: '#656565',
        reverse: false,
        vertical: true,
        showLabels: false // Add this missing property
    });

    // Force component update for Firefox
    const [updateKey, setUpdateKey] = React.useState<number>(0);

    const onFieldChange = (
        event: ColorPickerChangeEvent | NumericTextBoxChangeEvent | SwitchChangeEvent,
        fieldName: string,
        parse?: boolean
    ) => {
        let value = parse ? Math.round(event.value as number) : event.value;
        setLinearOptions((prev) => ({ ...prev, [fieldName]: value }));
        // Force update for Firefox
        setUpdateKey((prev) => prev + 1);
    };

    const onShowLabelChange = (e: SwitchChangeEvent) => {
        onFieldChange(e, 'showLabels', false);
    };

    const onShowTicksChange = (e: SwitchChangeEvent) => {
        onFieldChange(e, 'showTicks', false);
    };

    const onTicksColorChange = (e: ColorPickerChangeEvent) => {
        onFieldChange(e, 'ticksColor', false);
    };

    const onLabelsColorChange = (e: ColorPickerChangeEvent) => {
        onFieldChange(e, 'labelsColor', false);
    };

    const onRangeSizeChange = (e: NumericTextBoxChangeEvent) => {
        onFieldChange(e, 'rangeSize', true);
    };

    const onRangeColorChange = (e: ColorPickerChangeEvent) => {
        onFieldChange(e, 'rangeColor', false);
    };

    const onReverseChange = (e: SwitchChangeEvent) => {
        onFieldChange(e, 'reverse', false);
    };

    const onVerticalChange = (e: SwitchChangeEvent) => {
        onFieldChange(e, 'vertical', false);
    };

    const onLineWidthChange = (e: NumericTextBoxChangeEvent) => {
        onFieldChange(e, 'lineWidth', false);
    };

    const onLineColorChange = (e: ColorPickerChangeEvent) => {
        onFieldChange(e, 'lineColor', false);
    };

    const {
        showLabels,
        showTicks,
        ticksColor,
        labelsColor,
        rangeSize,
        rangeColor,
        reverse,
        vertical,
        lineWidth,
        lineColor
    } = linearOptions;

    return (
        <div key={updateKey}>
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
                    <div className="col-sm-12 col-md-3">
                        <Label>
                            <NumericTextBox
                                width={80}
                                onChange={onLineWidthChange}
                                value={lineWidth}
                                min={1}
                                max={30}
                            />
                            &nbsp;Line Width
                        </Label>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <Label>
                            <ColorPicker view="gradient" value={lineColor} onChange={onLineColorChange} />
                            &nbsp;Line Color
                        </Label>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <Label>
                            <NumericTextBox
                                width={70}
                                onChange={onRangeSizeChange}
                                value={rangeSize}
                                min={1}
                                max={30}
                            />
                            &nbsp;Range Size
                        </Label>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <Label>
                            <ColorPicker view="gradient" value={rangeColor} onChange={onRangeColorChange} />
                            &nbsp;Range Color
                        </Label>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <Label>
                            <Switch checked={vertical} onChange={onVerticalChange} />
                            &nbsp;Vertical
                        </Label>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <Label>
                            <Switch checked={reverse} onChange={onReverseChange} />
                            &nbsp;Reverse
                        </Label>
                    </div>
                </div>
            </div>
            <LinearGauge
                pointer={{
                    value: 30
                }}
                transitions={false}
                scale={{
                    labels: { format: 'c', color: labelsColor, visible: showLabels },
                    majorTicks: { visible: showTicks, color: ticksColor },
                    minorTicks: { visible: showTicks, color: ticksColor },
                    rangeSize,
                    reverse,
                    vertical,
                    ranges: [
                        {
                            from: 0,
                            to: 30,
                            color: rangeColor
                        }
                    ],
                    line: {
                        color: lineColor,
                        width: lineWidth
                    }
                }}
            />
        </div>
    );
};

export default LinearContainer;
