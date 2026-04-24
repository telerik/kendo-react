import * as React from 'react';
import { useDroppable } from '@progress/kendo-react-common';

interface DroppableBoxProps {
    children?: React.ReactNode;
    selected: boolean;
    id: string | number;
    accent: string;
    context: React.Context<any>;
    onDrop: (id: string | number) => void;
}

export const DroppableBox = (props: DroppableBoxProps) => {
    const element = React.useRef<HTMLDivElement>(null);
    const [isInside, setIsInside] = React.useState(false);

    const handleDragEnter = React.useCallback(() => {
        setIsInside(true);
    }, []);

    const handleDragLeave = React.useCallback(() => {
        setIsInside(false);
    }, []);

    const handleDrop = React.useCallback(() => {
        props.onDrop(props.id);
    }, [props.onDrop, props.id]);

    useDroppable(
        element,
        {
            onDragEnter: handleDragEnter,
            onDragLeave: handleDragLeave,
            onDrop: handleDrop
        },
        {
            context: props.context
        }
    );

    return (
        <div
            ref={element}
            style={{
                padding: 10,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                borderWidth: '3px',
                borderStyle: 'solid',
                borderRadius: '5px',
                borderColor: !props.selected && isInside ? 'orange' : props.accent,
                transition: 'border-color .2s ease-in-out'
            }}
        >
            {props.children || 'Dropbox №' + props.id}
        </div>
    );
};
