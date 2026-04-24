import * as React from 'react';
import { useDraggable, useDroppable, NormalizedDragEvent } from '@progress/kendo-react-common';
import { ListItem, ListItemProps } from './list-item';
import { DragContext, DirectionContext, DropContext } from './app';

export interface DraggableListItemProps extends ListItemProps {
    onDrop: Function;
}

const calculateDirection = (dragElement: HTMLElement, dropElement: HTMLElement) => {
    const dragRect = dragElement.getBoundingClientRect();
    const dropRect = dropElement.getBoundingClientRect();

    const dragCenterY = dragRect.top + dragRect.height / 2;
    const dropCenterY = dropRect.top + dropRect.height / 2;

    return dragCenterY < dropCenterY ? 'before' : 'after';
};

export const DraggableListItem = (props: DraggableListItemProps) => {
    const { data, onDrop, style } = props;

    const itemRef = React.useRef<HTMLLIElement>(null);
    const hintRef = React.useRef<HTMLLIElement>(null);

    const [drag, setDrag] = React.useContext(DragContext)!;
    const [drop, setDrop] = React.useContext(DropContext)!;
    const [direction, setDirection] = React.useContext(DirectionContext)!;

    const [offset, setOffset] = React.useState({ x: 0, y: 0 });
    const [position, setPosition] = React.useState<{ x: number; y: number } | null>(null);

    const dragInstance = { element: hintRef, data };
    const dropInstance = { element: itemRef, data };

    const handlePress = (event: NormalizedDragEvent) => {
        setOffset({ x: event.offsetX, y: event.offsetY });
    };

    const handleDragStart = () => {
        setDrag(dragInstance);
    };

    const handleDrag = (event: NormalizedDragEvent) => {
        if (drag?.element.current && drop?.element.current) {
            const newDirection = calculateDirection(drag.element.current, drop.element.current);
            setDirection(newDirection);
        }
        setPosition({
            x: event.clientX - offset.x,
            y: event.clientY - offset.y,
        });
    };

    const handleDragEnd = () => {
        setOffset({ x: 0, y: 0 });
        setPosition(null);
        setDrag(null);
        setDrop(null);
    };

    const handleDragEnter = () => {
        setDrop(dropInstance);
    };

    const handleDrop = () => {
        onDrop?.({ drag, drop, direction });
        setDrop(null);
    };

    useDraggable(
        itemRef,
        {
            onPress: handlePress,
            onDragStart: handleDragStart,
            onDrag: handleDrag,
            onDragEnd: handleDragEnd,
        },
        {
            hint: hintRef,
            autoScroll: false,
        }
    );

    useDroppable(itemRef, {
        onDragEnter: handleDragEnter,
        onDrop: handleDrop,
    });

    const shouldRenderDropHint = drag && drop && drop.data.id === data.id && drag.data.name && direction;
    const isDragging = drag && drag.data.id === data.id;

    return (
        <>
            {shouldRenderDropHint && direction === 'before' && (
                <ListItem style={{ opacity: 0.7 }}>{drag.data.name}</ListItem>
            )}
            <ListItem
                ref={itemRef}
                {...props}
                data={{ type: '' }}
                style={{ ...style, display: isDragging ? 'none' : undefined }}
            />
            {shouldRenderDropHint && direction === 'after' && (
                <ListItem style={{ opacity: 0.7 }}>{drag.data.name}</ListItem>
            )}
            {isDragging && position && (
                <ListItem
                    ref={hintRef}
                    {...props}
                    style={{
                        position: 'absolute',
                        left: position.x,
                        top: position.y,
                    } as React.CSSProperties}
                />
            )}
        </>
    );
};
