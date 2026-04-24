import * as React from 'react';
import { Popover } from '@progress/kendo-react-tooltip';
import { Label } from '@progress/kendo-react-labels';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';
import { Checkbox, NumericTextBox } from '@progress/kendo-react-inputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';

const animationTypes = [
    { text: 'Slide', value: 'slide' },
    { text: 'Zoom', value: 'zoom' },
    { text: 'Push', value: 'push' },
    { text: 'Expand', value: 'expand' },
    { text: 'Fade', value: 'fade' }
];

const directionsByType = {
    slide: ['down', 'up', 'left', 'right'],
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

const App = () => {
    const anchor = React.useRef<ButtonHandle>(null);
    const [show, setShow] = React.useState(false);
    const [animate, setAnimate] = React.useState(true);
    const [openDuration, setOpenDuration] = React.useState<number>(300);
    const [closeDuration, setCloseDuration] = React.useState<number>(300);
    const [animationType, setAnimationType] = React.useState('slide');
    const [direction, setDirection] = React.useState('down');

    React.useEffect(() => {
        if (directionsByType[animationType]) {
            setDirection(directionsByType[animationType][0]);
        } else {
            setDirection('');
        }
    }, [animationType]);

    // Memoized animate prop
    const animateProp = React.useMemo(() => {
        if (!animate) {
            return false;
        }
        if (animationType === 'slide') {
            return {
                type: 'slide' as const,
                direction: direction as 'down' | 'left' | 'right' | 'up',
                openDuration,
                closeDuration
            };
        }
        if (animationType === 'push') {
            return {
                type: 'push' as const,
                direction: direction as 'down' | 'left' | 'right' | 'up',
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
        return {
            type: 'fade' as const,
            openDuration,
            closeDuration
        };
    }, [animate, animationType, direction, openDuration, closeDuration]);

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
                            data={directionsByType[animationType].map((dir: string) => ({
                                text: directionLabels[dir],
                                value: dir
                            }))}
                            textField="text"
                            dataItemKey="value"
                            value={{
                                text: directionLabels[direction as keyof typeof directionLabels],
                                value: direction
                            }}
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
            <Button style={{ left: 100 }} onClick={() => setShow(!show)} ref={anchor}>
                {show ? 'Hide' : 'Show'}
            </Button>
            <Popover
                show={show}
                anchor={anchor.current && anchor.current.element}
                position={'bottom'}
                animate={animateProp}
            >
                Popover content.
            </Popover>
        </div>
    );
};

export default App;
