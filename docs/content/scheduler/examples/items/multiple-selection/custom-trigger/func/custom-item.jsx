import * as React from 'react';
import { 
    SchedulerEditItem,
    ITEMS_SELECT_ACTION,
    DRAG_ITEM_ACTION,
    RESIZE_ITEM_ACTION
} from '@progress/kendo-react-scheduler';

export const CustomEditItem = (props) => {
    const handleClickAction =  (event) => [
        { type: event.syntheticEvent.shiftKey
            ? ITEMS_SELECT_ACTION.add
            : ITEMS_SELECT_ACTION.select
        }]

    const handleDragAction = (event) => ({ 
        type: event.dragEvent.originalEvent.shiftKey 
            ? DRAG_ITEM_ACTION.dragSelected
            : DRAG_ITEM_ACTION.drag,
        payload: {x: event.dragEvent.clientX, y: event.dragEvent.clientY }
    })

    const handleResizeStartDragACtion =(event) => ({
        type: event.dragEvent.originalEvent.shiftKey 
            ? RESIZE_ITEM_ACTION.startDragSelected
            : RESIZE_ITEM_ACTION.startDrag,
        payload: {x: event.dragEvent.clientX, y: event.dragEvent.clientY} 
    })

    const handleResizeEndDragAction =(event) => ({
        type: event.dragEvent.originalEvent.shiftKey 
            ? RESIZE_ITEM_ACTION.endDragSelected
            : RESIZE_ITEM_ACTION.endDrag,
        payload: {x: event.dragEvent.clientX, y: event.dragEvent.clientY} 
    })

    return (
      <SchedulerEditItem 
        {...props} 
        onClickAction={handleClickAction} 
        onDragAction={handleDragAction}
        onResizeStartDragAction={handleResizeStartDragACtion}
        onResizeEndDragAction={handleResizeEndDragAction}
      />
    )
}
