import * as React from 'react';
import { Tooltip, TooltipPosition } from '@progress/kendo-react-tooltip';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { RadioButton } from '@progress/kendo-react-inputs';

const App = () => {
    const [position, setPosition] = React.useState<TooltipPosition | undefined>('top');
    const [anchor, setAnchor] = React.useState('target');

    const onPositionChange = (event) => {
        if (event.target.element.id !== 'default') {
            setPosition(event.target.element.id);
        } else {
            setPosition(undefined);
        }
    };

    const onAnchorChange = (event) => {
        if (event.target.element.id) {
            setAnchor(event.target.element.id);
        }
    };

    return (
        <Tooltip position={position} anchorElement={anchor} parentTitle={true}>
            <div className="k-form">
                <fieldset className="k-hstack k-gap-4">
                    <legend>Change position</legend>
                    <div className="k-hstack k-gap-2">
                        <RadioButton name="position" id="default" onChange={onPositionChange} />
                        <Label className="k-radio-label" editorId="default">
                            Default
                        </Label>
                    </div>
                    <div className="k-hstack k-gap-2">
                        <RadioButton name="position" id="top" onChange={onPositionChange} />
                        <Label className="k-radio-label" editorId="top">
                            Top
                        </Label>
                    </div>
                    <div className="k-hstack k-gap-2">
                        <RadioButton name="position" id="bottom" onChange={onPositionChange} />
                        <Label className="k-radio-label" editorId="bottom">
                            Bottom
                        </Label>
                    </div>
                    <div className="k-hstack k-gap-2">
                        <RadioButton name="position" id="left" onChange={onPositionChange} />
                        <Label className="k-radio-label" editorId="left">
                            Left
                        </Label>
                    </div>
                    <div className="k-hstack k-gap-2">
                        <RadioButton name="position" id="right" onChange={onPositionChange} />
                        <Label className="k-radio-label" editorId="right">
                            Right
                        </Label>
                    </div>
                </fieldset>

                <fieldset className="k-hstack k-gap-4">
                    <legend>Change anchor</legend>
                    <div className="k-hstack k-gap-2">
                        <RadioButton name="anchor" id="target" onChange={onAnchorChange} />
                        <Label className="k-radio-label" editorId="target">
                            Target
                        </Label>
                    </div>
                    <div className="k-hstack k-gap-2">
                        <RadioButton name="anchor" id="pointer" onChange={onAnchorChange} />
                        <Label className="k-radio-label" editorId="pointer">
                            Pointer
                        </Label>
                    </div>
                </fieldset>
            </div>

            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <Button title="some title" type="button">
                    Hover me
                </Button>
            </div>
        </Tooltip>
    );
};

export default App;
