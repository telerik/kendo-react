import * as React from 'react';
import { ReorderContext, DragHintContext, GridContext, ReorderDragDropContext } from './app';
import { NormalizedDragEvent, useDraggable, useDroppable, classNames } from '@progress/kendo-react-common';
import { GridCustomRowProps } from '@progress/kendo-react-grid';

export const DraggableRow = React.forwardRef<HTMLTableRowElement, GridCustomRowProps>((props, ref) => {
    const scrollableContainer = React.useRef<HTMLElement | null>(null);

    const [dropped, setDropped] = React.useState(false);
    const [dragged, setDragged] = React.useState(false);
    const [direction, setDirection] = React.useState<'before' | 'after' | null>(null);

    const dragHint = React.useContext(DragHintContext);
    const grid = React.useContext(GridContext);
    const { dragStart, dragEnd, reorder } = React.useContext(ReorderContext);

    const element = React.useRef<HTMLTableRowElement>(null);

    const handlePress = () => {
        /** No operation on press */
    };

    const handleDragStart = () => {
        if (!props.isSelected) {
            return;
        }
        setDragged(true);
        dragStart(props.dataItem);
    };

    const handleDrag = (event: NormalizedDragEvent) => {
        if (!dragHint || !dragHint.current || !grid || !grid.current || !grid.current.element) {
            return;
        }

        const gridRect = grid.current.element.getBoundingClientRect();
        const dragHintRect = dragHint.current.getBoundingClientRect();

        dragHint.current.style.top = `${event.clientY - gridRect.top - dragHintRect.height / 2}px`;
        dragHint.current.style.left = `${event.clientX - gridRect.left - dragHintRect.width / 2}px`;
    };

    const handleDragEnd = () => {
        setDragged(false);
        setDropped(false);
        dragEnd(props.dataItem);
    };

    const handleRelease = () => {
        if (!dragHint || !dragHint.current) {
            return;
        }
        dragHint.current.style.top = '';
    };

    const handleDragEnter = () => {
        setDropped(true);
        setDirection(null);
    };

    const handleDragOver = (event: NormalizedDragEvent) => {
        if (!element || !element.current) {
            return;
        }
        const rect = element.current.getBoundingClientRect();
        setDirection(rect.top + rect.height / 2 <= event.clientY ? 'after' : 'before');
    };

    const handleDragLeave = () => {
        setDropped(false);
        setDirection(null);
    };

    const handleDrop = () => {
        reorder(props.dataItem, direction);
        setDropped(false);
        setDirection(null);
    };

    React.useEffect(() => {
        const virtualContent = document.querySelector('.k-grid-content.k-virtual-content') as HTMLElement;
        scrollableContainer.current = virtualContent;
    }, []);

    useDraggable(
        element,
        {
            onPress: handlePress,
            onDragStart: handleDragStart,
            onDrag: handleDrag,
            onDragEnd: handleDragEnd,
            onRelease: handleRelease
        },
        {
            context: ReorderDragDropContext,
            autoScroll: dragged,
            hint: dragHint,
            scrollContainer: scrollableContainer
        }
    );

    useDroppable(
        element,
        {
            onDragEnter: handleDragEnter,
            onDragOver: handleDragOver,
            onDragLeave: handleDragLeave,
            onDrop: handleDrop
        },
        {
            context: ReorderDragDropContext
        }
    );

    return (
        <>
            {dropped && direction === 'before' && (
                <tr
                    style={{
                        outlineStyle: 'solid',
                        outlineWidth: 1,
                        outlineColor: 'red'
                    }}
                />
            )}
            <tr
                {...props.trProps}
                ref={element}
                className={classNames(
                    {
                        'k-selected': props.isSelected
                    },
                    props.trProps?.className
                )}
                style={{
                    userSelect: 'none',
                    pointerEvents: dragged ? 'none' : 'auto'
                }}
            >
                {props.children}
            </tr>
            {dropped && direction === 'after' && (
                <tr
                    style={{
                        outlineStyle: 'solid',
                        outlineWidth: 1,
                        outlineColor: 'red'
                    }}
                />
            )}
        </>
    );
});
