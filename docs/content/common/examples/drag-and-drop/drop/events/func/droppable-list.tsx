import * as React from 'react';
import { useDroppable } from '@progress/kendo-react-common';
import { DataItem } from './data';
import { ListItem } from './list-item';
import { List, ListProps } from './list';
import { DropContext, DragContext } from './app';

export interface DroppableListProps extends ListProps {
    data: DataItem;
    onDrop?: Function;
}

export const DroppableList = (props: DroppableListProps) => {
    const listRef = React.useRef<HTMLUListElement>(null);

    const [drag] = React.useContext(DragContext);
    const [drop, setDrop] = React.useContext(DropContext);

    const dropInstance = {
        element: listRef,
        data: props.data,
    };

    const handleDragEnter = () => {
        if (!props.children || React.Children.count(props.children) === 0) {
            setDrop(dropInstance);
        }
    };

    const handleDragLeave = () => {
        if (!props.children || React.Children.count(props.children) === 0) {
            setDrop(null);
        }
    };

    const handleDrop = () => {
        if (props.onDrop) {
            props.onDrop();
        }
    };

    useDroppable(listRef, {
        onDragEnter: handleDragEnter,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
    });

    return (
      <List ref={listRef} {...props}>
        {props.children && React.Children.count(props.children)
            ? props.children
            : (drag && drop && drop.data.id === props.data.id) && <ListItem style={{ opacity: '0.7' }}>{drag.data.name}</ListItem>
        }
      </List>
    );
};
