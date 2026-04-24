import * as React from 'react';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';
import { useDraggable, Icon, NormalizedDragEvent } from '@progress/kendo-react-common';

const HOLD_DELAY = 500;

export const DraggableButton = (props) => {
    const button = React.useRef<ButtonHandle | null>(null);
    const dragTimeout = React.useRef<number>(undefined);

    const [pressed, setPressed] = React.useState<boolean>(false);
    const [dragged, setDragged] = React.useState<boolean>(false);
    const [initial, setInitial] = React.useState<{ x: number; y: number } | null>(null);

    const handlePress = React.useCallback(() => {
        dragTimeout.current = window.setTimeout(() => {
            setPressed(true);
        }, HOLD_DELAY);
    }, []);

    const handleDragStart = React.useCallback(
        (event: NormalizedDragEvent) => {
            if (pressed) {
                setDragged(true);
                setInitial({ x: event.clientX, y: event.clientY });
            }
        },
        [pressed]
    );

    const handleDrag = React.useCallback(
        (event: NormalizedDragEvent) => {
            if (dragTimeout.current) {
                window.clearTimeout(dragTimeout.current);
            }

            if (!button.current || !button.current.element || !initial) {
                return;
            }
            const transform = `translate(${event.clientX - initial.x}px, ${event.clientY - initial.y}px)`;

            button.current.element.style.transition = 'none';
            button.current.element.style.transform = transform;
        },
        [initial]
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
        if (dragTimeout.current) {
            window.clearTimeout(dragTimeout.current);
        }

        setPressed(false);
    }, []);

    React.useEffect(() => {
        return () => {
            if (dragTimeout.current) {
                window.clearTimeout(dragTimeout.current);
            }
        };
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
            {...props}
            style={{ zIndex: 10, position: 'absolute' }}
            ref={button}
            themeColor={pressed ? 'primary' : undefined}
        >
            <Icon name="move" size="medium" />
            {pressed ? (dragged ? 'Drop Me!' : 'Drag Me!') : 'Press Me!'}
        </Button>
    );
};
