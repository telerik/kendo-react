import * as React from 'react';
import { createPortal } from 'react-dom';
import { ReorderContext } from './app';
import { useDraggable } from '@progress/kendo-react-common';

export const DraggableRow = (props) => {
  const [position, setPosition] = React.useState({ x: 50, y: 50 });
  const [dragged, setDragged] = React.useState(false);
  const { dragStart } = React.useContext(ReorderContext);
  const element = React.useRef(null);
  const hint = React.useRef(null);

  const handlePress = React.useCallback(() => {}, []);

  const handleDragStart = React.useCallback(
    (event) => {
      setDragged(true);
      dragStart(props.dataItem);
    },
    [position.x, position.y]
  );

  const handleDrag = React.useCallback((event) => {
    setPosition({
      x: event.clientX + 50,
      y: event.clientY - 50,
    });
  }, []);

  const handleDragEnd = React.useCallback(() => {
    setDragged(false);
  }, []);

  const handleRelease = React.useCallback(() => {
    setPosition({ x: 50, y: 50 });
  }, []);

  useDraggable(
    element,
    {
      onPress: handlePress,
      onDragStart: handleDragStart,
      onDrag: handleDrag,
      onDragEnd: handleDragEnd,
      onRelease: handleRelease,
    },
    { hint: hint }
  );

  return (
    <React.Fragment>
      {createPortal(
        dragged ? (
          <table>
            <tbody>
              <tr
                {...props.elementProps}
                className={
                  'k-alt k-table-alt-row k-master-row k-table-row rowHint'
                }
                ref={hint}
                style={{
                  position: 'absolute',
                  zIndex: 1000,
                  userSelect: 'none',
                  left: position.x,
                  top: position.y,
                }}
              />
            </tbody>
          </table>
        ) : null,
        document.body
      )}
      <tr
        {...props.elementProps}
        ref={element}
        style={{
          backgroundColor: '#fff',
          userSelect: 'none',
          pointerEvents: dragged ? 'none' : undefined,
          opacity: dragged ? '0.8' : undefined,
        }}
      />
    </React.Fragment>
  );
};
