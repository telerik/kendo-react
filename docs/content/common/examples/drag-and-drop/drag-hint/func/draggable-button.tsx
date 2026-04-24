import * as React from 'react';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';
import { useDraggable, Icon, NormalizedDragEvent } from '@progress/kendo-react-common';

export const DraggableButton = (props) => {
    const hint = React.useRef<ButtonHandle | null>(null);
    const button = React.useRef<ButtonHandle | null>(null);

    const [dragged, setDragged] = React.useState<boolean>(false);
    const [initial, setInitial] = React.useState<{ x: number; y: number } | null>(null);

    const handleDragStart = React.useCallback((event: NormalizedDragEvent) => {
        setDragged(true);
        setInitial({ x: event.clientX, y: event.clientY });
    }, []);

    const handleDrag = React.useCallback(
        (event: NormalizedDragEvent) => {
            if (!hint.current || !hint.current.element || !initial) {
                return;
            }
            const transform = `translate(${event.clientX - initial.x}px, ${event.clientY - initial.y}px)`;

            hint.current.element.style.transition = 'none';
            hint.current.element.style.transform = transform;
        },
        [initial]
    );

    const handleDragEnd = React.useCallback(() => {
        if (!hint.current || !hint.current.element) {
            return;
        }

        hint.current.element.style.transition = 'transform .3s ease-in-out';
        hint.current.element.style.transform = '';

        setDragged(false);
        setInitial(null);
    }, []);

    useDraggable(
        button,
        {
            onDragStart: handleDragStart,
            onDrag: handleDrag,
            onDragEnd: handleDragEnd
        },
        { hint: hint }
    );

    return (
        <React.Fragment>
            <Button
                ref={button}
                {...props}
                style={{ zIndex: 10, position: 'absolute', opacity: dragged ? '0.7' : undefined }}
                themeColor={'primary'}
            >
                <Icon name="move" size="medium" />
                Drag Me!
            </Button>
            {dragged && (
                <Button ref={hint} {...props} style={{ zIndex: 10, position: 'absolute' }} themeColor={'primary'}>
                    <Icon name="move" size="medium" />
                    Drag Me!
                </Button>
            )}
        </React.Fragment>
    );
};
