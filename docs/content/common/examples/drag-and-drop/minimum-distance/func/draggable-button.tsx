import * as React from 'react';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';
import { useDraggable, Icon, NormalizedDragEvent } from '@progress/kendo-react-common';

const DRAG_THRESHOLD = 70;

export const DraggableButton = (props) => {
    const button = React.useRef<ButtonHandle | null>(null);

    const [pressed, setPressed] = React.useState<boolean>(false);
    const [dragged, setDragged] = React.useState<boolean>(false);
    const [started, setStarted] = React.useState<boolean>(false);
    const [initial, setInitial] = React.useState<{ x: number; y: number } | null>(null);

    const handlePress = React.useCallback(() => {
        setPressed(true);
    }, []);

    const handleDragStart = React.useCallback((event: NormalizedDragEvent) => {
        setDragged(true);
        setInitial({ x: event.clientX, y: event.clientY });
    }, []);

    const handleDrag = React.useCallback(
        (event: NormalizedDragEvent) => {
            if (!button.current || !button.current.element || !initial) {
                return;
            }

            const translateX = event.clientX - initial.x;
            const translateY = event.clientY - initial.y;

            if (!started && Math.abs(translateX) < DRAG_THRESHOLD && Math.abs(translateY) < DRAG_THRESHOLD) {
                return;
            }

            const transform = `translate(${translateX}px, ${translateY}px)`;

            button.current.element.style.transition = 'none';
            button.current.element.style.transform = transform;

            setStarted(true);
        },
        [initial, started]
    );

    const handleDragEnd = React.useCallback(() => {
        if (!button.current || !button.current.element) {
            return;
        }

        button.current.element.style.transition = 'transform .3s ease-in-out';
        button.current.element.style.transform = '';

        setDragged(false);
        setInitial(null);
        setStarted(false);
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
        <Button {...props} style={{ zIndex: 10, position: 'absolute' }} ref={button} themeColor={'primary'}>
            <Icon name="move" size="medium" />
            {pressed ? (dragged ? 'Drop Me!' : 'Drag Me!') : 'Press Me!'}
        </Button>
    );
};
