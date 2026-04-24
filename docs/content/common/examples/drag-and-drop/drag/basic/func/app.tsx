import * as React from 'react';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';
import { arrowsMoveIcon } from '@progress/kendo-svg-icons';

import { useDraggable, SvgIcon, NormalizedDragEvent } from '@progress/kendo-react-common';

const App = () => {
    const [position, setPosition] = React.useState({ x: 50, y: 50 });
    const [pressed, setPressed] = React.useState<boolean>(false);
    const [dragged, setDragged] = React.useState<boolean>(false);
    const [initial, setInitial] = React.useState<{ x: number; y: number } | null>(null);
    const button = React.useRef<ButtonHandle | null>(null);

    const handlePress = React.useCallback(() => {
        setPressed(true);
    }, []);

    const handleDragStart = React.useCallback(
        (event: NormalizedDragEvent) => {
            setDragged(true);
            setInitial({
                x: event.clientX - position.x,
                y: event.clientY - position.y
            });
        },
        [position.x, position.y]
    );

    const handleDrag = React.useCallback(
        (event: NormalizedDragEvent) => {
            if (!initial) {
                return;
            }

            setPosition({
                x: event.clientX - initial.x,
                y: event.clientY - initial.y
            });
        },
        [initial]
    );

    const handleDragEnd = React.useCallback(() => {
        setDragged(false);
        setInitial(null);
    }, []);

    const handleRelease = React.useCallback(() => {
        setPressed(false);
    }, []);

    useDraggable(button, {
        onPress: handlePress,
        onDragStart: handleDragStart,
        onDrag: handleDrag,
        onDragEnd: handleDragEnd,
        onRelease: handleRelease
    });

    return (
        <Button
            ref={button}
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y
            }}
            fillMode={pressed ? 'outline' : 'flat'}
            themeColor={dragged ? 'primary' : undefined}
        >
            <SvgIcon icon={arrowsMoveIcon} size="medium" />
            Drag Me!
        </Button>
    );
};

export default App;
