import * as React from 'react';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';
import { useDraggable, NormalizedDragEvent } from '@progress/kendo-react-common';

export const DraggableButton = (props) => {
    const button = React.useRef<ButtonHandle | null>(null);
    const element = React.useRef<HTMLDivElement | null>(null);

    const [initial, setInitial] = React.useState<{ x: number; y: number } | null>(null);

    const handleDragStart = React.useCallback((event: NormalizedDragEvent) => {
        setInitial({ x: event.clientX, y: event.clientY });
    }, []);

    const handleDrag = React.useCallback(
        (event: NormalizedDragEvent) => {
            if (!element.current || !initial) {
                return;
            }
            const transform = `translate(${event.clientX - initial.x}px, ${event.clientY - initial.y}px)`;

            element.current.style.transition = 'none';
            element.current.style.transform = transform;
        },
        [initial]
    );

    const handleDragEnd = React.useCallback(() => {
        if (!element.current) {
            return;
        }

        element.current.style.transition = 'transform .3s ease-in-out';
        element.current.style.transform = '';

        setInitial(null);
    }, []);

    useDraggable(
        button,
        {
            onDragStart: handleDragStart,
            onDrag: handleDrag,
            onDragEnd: handleDragEnd
        },
        { hint: element }
    );

    return (
        <div
            ref={element}
            {...props}
            style={{
                zIndex: 10,
                position: 'absolute',
                border: '1px solid lightgray',
                padding: '4px',
                background: '#fff'
            }}
        >
            <Button ref={button} icon="move" fillMode="flat" />
            Drag Me
        </div>
    );
};
