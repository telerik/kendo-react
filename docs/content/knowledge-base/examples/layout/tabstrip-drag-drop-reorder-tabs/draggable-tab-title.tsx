import * as React from 'react';
import { useDraggable, useDroppable, SvgIcon, type NormalizedDragEvent } from '@progress/kendo-react-common';
import { reorderIcon } from '@progress/kendo-svg-icons';

export type DropPosition = 'before' | 'after';

export interface DragState {
    fromIndex: number | null;
    didDrag: boolean;
}

export interface DraggableTabTitleProps {
    title: string;
    index: number;
    dragState: React.RefObject<DragState>;
    onReorder: (fromIndex: number, toIndex: number, position: DropPosition) => void;
}

export const DraggableTabTitle = (props: Readonly<DraggableTabTitleProps>) => {
    const { title, index, dragState, onReorder } = props;
    const element = React.useRef<HTMLSpanElement>(null);

    const [isDragging, setIsDragging] = React.useState<boolean>(false);
    const [dropDirection, setDropDirection] = React.useState<DropPosition | null>(null);
    const indexRef = React.useRef<number>(index);
    indexRef.current = index;

    const handleDragStart = (event: NormalizedDragEvent) => {
        dragState.current.fromIndex = indexRef.current;
        dragState.current.didDrag = true;
        setIsDragging(true);
        event.originalEvent.stopPropagation?.();
    };

    const handleDrag = (event: NormalizedDragEvent) => {
        event.originalEvent.stopPropagation?.();
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        setDropDirection(null);
        // Reset asynchronously so the tab click handler (firing right after pointerup)
        // can still detect that a drag just happened.
        setTimeout(() => {
            if (dragState.current) {
                dragState.current.fromIndex = null;
                dragState.current.didDrag = false;
            }
        });
    };

    const handleDragOver = (event: NormalizedDragEvent) => {
        if (!element.current || dragState.current.fromIndex === null) {
            return;
        }
        const rect = element.current.getBoundingClientRect();
        setDropDirection(event.clientX >= rect.left + rect.width / 2 ? 'after' : 'before');
    };

    const handleDragLeave = () => {
        setDropDirection(null);
    };

    const handleDrop = () => {
        const fromIndex = dragState.current.fromIndex;
        if (fromIndex !== null && fromIndex !== indexRef.current && dropDirection) {
            onReorder(fromIndex, indexRef.current, dropDirection);
        }
        setDropDirection(null);
    };

    const handleClickCapture = (event: React.MouseEvent) => {
        // Suppress the tab selection click that fires at the end of a drag.
        if (dragState.current.didDrag) {
            event.stopPropagation();
            event.preventDefault();
        }
    };

    useDraggable(element, {
        onDragStart: handleDragStart,
        onDrag: handleDrag,
        onDragEnd: handleDragEnd
    });

    useDroppable(element, {
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop
    });

    const classes = ['tab-title-wrapper'];
    if (isDragging) {
        classes.push('dragging');
    }
    if (dropDirection) {
        classes.push(`drop-${dropDirection}`);
    }

    return (
        <span ref={element} className={classes.join(' ')} onClickCapture={handleClickCapture}>
            <SvgIcon className="reorder-icon" icon={reorderIcon} />
            <span>{title}</span>
        </span>
    );
};
