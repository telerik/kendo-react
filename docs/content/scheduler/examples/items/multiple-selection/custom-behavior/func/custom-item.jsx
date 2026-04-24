import * as React from 'react';
import { 
    SchedulerEditItem,
    ITEMS_SELECT_ACTION,
    DRAG_ITEM_ACTION,
    RESIZE_ITEM_ACTION,
    ITEMS_FOCUS_ACTION
} from '@progress/kendo-react-scheduler';

import { Keys, useAsyncFocusBlur } from '@progress/kendo-react-common';

export const CustomEditItem = (props) => {
    const [focused, setFocused] = React.useState(false);

    const handleKeyDownAction = (...args) => {
        const [event] = args;
        switch(event.syntheticEvent.keyCode) {
            case Keys.enter:
                return [
                    { type: ITEMS_SELECT_ACTION.add }
                ];
            case Keys.tab:
                return [
                    { type: event.syntheticEvent.shiftKey ? ITEMS_FOCUS_ACTION.prev : ITEMS_FOCUS_ACTION.next }
                ];
            case Keys.esc:
                return [
                    { type: ITEMS_SELECT_ACTION.reset }
                ];
            default:
                return SchedulerEditItem.defaultProps.onKeyDownAction(...args);
        }
    };

    const handleDragAction = (event) => ({type: DRAG_ITEM_ACTION.dragSelected, payload: {x: event.dragEvent.clientX, y: event.dragEvent.clientY} });
    const handleResizeStartDragAction = (event) => ({type: RESIZE_ITEM_ACTION.startDragSelected, payload: {x: event.dragEvent.clientX, y: event.dragEvent.clientY} });
    const handleResizeEndDragAction = (event) => ({type: RESIZE_ITEM_ACTION.endDragSelected, payload: {x: event.dragEvent.clientX, y: event.dragEvent.clientY} });

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };
  
    const {onFocus, onBlur} = useAsyncFocusBlur({ onFocus: handleFocus, onBlur: handleBlur });

    return (
      <SchedulerEditItem 
        {...props}
        style={{boxShadow: focused ? 'rgb(4 20 43 / 75%) 0px 5px 20px' : undefined}}
        onFocus={onFocus}
        onBlur={onBlur}
        onClickAction={null}
        onDragAction={handleDragAction}
        onResizeStartDragAction={handleResizeStartDragAction}
        onResizeEndDragAction={handleResizeEndDragAction}
        onKeyDownAction={handleKeyDownAction}
    />);
};
