import * as React from 'react';

import { Popup } from '@progress/kendo-react-popup';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import './styles.css';
import { Checkbox, NumericTextBox } from '@progress/kendo-react-inputs';

// Animation options
const animationTypes = [
    { text: 'Slide', value: 'slide' },
    { text: 'Zoom', value: 'zoom' },
    { text: 'Push', value: 'push' },
    { text: 'Expand', value: 'expand' },
    { text: 'Fade', value: 'fade' }
];

const directionsByType = {
    slide: ['left', 'right', 'up', 'down'],
    push: ['left', 'right', 'up', 'down'],
    zoom: ['in', 'out'],
    expand: ['horizontal', 'vertical']
};

const directionLabels = {
    left: 'Left',
    right: 'Right',
    up: 'Up',
    down: 'Down',
    in: 'In',
    out: 'Out',
    horizontal: 'Horizontal',
    vertical: 'Vertical'
};

const AppComponent = () => {
    const anchor = React.useRef<any>(undefined);
    const [show, setShow] = React.useState(false);
    const [animate, setAnimate] = React.useState(true);
    const [openDuration, setOpenDuration] = React.useState(300);
    const [closeDuration, setCloseDuration] = React.useState(300);
    const [animationType, setAnimationType] = React.useState('slide');
    const [direction, setDirection] = React.useState('down');

    // Update direction when animation type changes
    React.useEffect(() => {
        if (directionsByType[animationType]) {
            setDirection(directionsByType[animationType][0]);
        } else {
            setDirection('');
        }
    }, [animationType]);

    // Build animate prop
    const getAnimateProp = () => {
        if (!animate) return false;
        if (animationType === 'slide') {
            return {
                type: 'slide' as const,
                direction: direction as 'left' | 'right' | 'up' | 'down',
                openDuration,
                closeDuration
            };
        }
        if (animationType === 'push') {
            return {
                type: 'push' as const,
                direction: direction as 'left' | 'right' | 'up' | 'down',
                openDuration,
                closeDuration
            };
        }
        if (animationType === 'zoom') {
            return {
                type: 'zoom' as const,
                direction: direction as 'in' | 'out',
                openDuration,
                closeDuration
            };
        }
        if (animationType === 'expand') {
            return {
                type: 'expand' as const,
                direction: direction as 'horizontal' | 'vertical',
                openDuration,
                closeDuration
            };
        }
        // fade
        return {
            type: 'fade' as const,
            openDuration,
            closeDuration
        };
    };

    return (
        <div>
            <div className="example-config">
                <Checkbox id="animate" checked={animate} onChange={() => setAnimate(!animate)} label="Animate" />
                <hr />
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <DropDownList
                        data={animationTypes}
                        textField="text"
                        dataItemKey="value"
                        value={animationTypes.find((a) => a.value === animationType)}
                        onChange={(e) => setAnimationType(e.value.value)}
                        style={{ width: 140 }}
                        label="Animation type"
                    />
                    {directionsByType[animationType] && (
                        <DropDownList
                            data={directionsByType[animationType].map((dir) => ({
                                text: directionLabels[dir],
                                value: dir
                            }))}
                            textField="text"
                            dataItemKey="value"
                            value={{ text: directionLabels[direction], value: direction }}
                            onChange={(e) => setDirection(e.value.value)}
                            style={{ width: 140 }}
                            label="Direction"
                        />
                    )}
                </div>
                <hr />
                <NumericTextBox
                    id="openDuration"
                    min={0}
                    disabled={!animate}
                    value={openDuration}
                    onChange={(event) => setOpenDuration(event.value ? event.value : 0)}
                    style={{ width: '100px' }}
                />
                <Label editorId="openDuration" className="k-label">
                    Opening duration
                </Label>
                <NumericTextBox
                    id="closeDuration"
                    min={0}
                    disabled={!animate}
                    value={closeDuration}
                    onChange={(event) => setCloseDuration(event.value ? event.value : 0)}
                    style={{ width: '100px' }}
                />
                <Label editorId="closeDuration">Closing duration</Label>
                <hr />
            </div>
            <div>
                <Button
                    type="button"
                    onClick={() => setShow(!show)}
                    ref={(e) => {
                        anchor.current = e && e.element;
                    }}
                >
                    {show ? 'Hide' : 'Show'}
                </Button>
                <Popup anchor={anchor.current} show={show} animate={getAnimateProp()} popupClass={'popup-content'}>
                    <p style={{ margin: '15px' }}>Popup content.</p>
                </Popup>
            </div>
        </div>
    );
};

export default AppComponent;
