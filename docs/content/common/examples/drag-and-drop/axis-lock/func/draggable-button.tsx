import * as React from 'react';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';
import { useDraggable, Icon, NormalizedDragEvent } from '@progress/kendo-react-common';
import { AxisContext } from './app';

export const DraggableButton = (props) => {
    const button = React.useRef<ButtonHandle | null>(null);

    const [axis] = React.useContext(AxisContext);

    const [pressed, setPressed] = React.useState<boolean>(false);
    const [dragged, setDragged] = React.useState<boolean>(false);
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

            const transform = axis === 'horizontal' ? `translateX(${translateX}px)` : `translateY(${translateY}px)`;

            button.current.element.style.transition = 'none';
            button.current.element.style.transform = transform;
        },
        [axis, initial]
    );

    const handleDragEnd = React.useCallback(() => {
        if (!button.current || !button.current.element) {
            return;
        }

        button.current.element.style.transition = 'transform .3s ease-in-out';
        button.current.element.style.transform = '';

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
        <Button {...props} style={{ zIndex: 10, position: 'absolute' }} ref={button} themeColor={'primary'}>
            <Icon name="move" size="medium" />
            {pressed ? (dragged ? 'Drop Me!' : 'Drag Me!') : 'Press Me!'}
        </Button>
    );
};
