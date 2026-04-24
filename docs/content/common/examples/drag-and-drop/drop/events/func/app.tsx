import * as React from 'react';
import { DragAndDrop, Typography } from '@progress/kendo-react-common';
import { DataItem, sampleData } from './data';
import { DroppableList } from './droppable-list';
import { DraggableListItem } from './draggable-list-item';

export const DragContext = React.createContext<[null | { element: React.RefObject<HTMLElement | null>, data: DataItem }, Function]>([null, () => { /* noop */ }]);
export const DropContext = React.createContext<[null | { element: React.RefObject<HTMLElement | null>, data: DataItem }, Function]>([null, () => { /* noop */ }]);
export const DirectionContext = React.createContext<["before" | "after", Function]>(["before", () => { /* noop */ }]);

const inRange = (min, max, index) => {
  return Math.max(min, Math.min(max, index));
};

const App = () => {
    const dropTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const [data, setData] = React.useState<DataItem[]>(sampleData);
    const [drag, setDrag] = React.useState<{ element: React.RefObject<HTMLElement | null>, data: DataItem } | null>(null);
    const [drop, setDrop] = React.useState<{ element: React.RefObject<HTMLElement | null>, data: DataItem } | null>(null);
    const [direction, setDirection] = React.useState<"before" | "after">("before");

    const handleDropChange = (newDrop: { element: React.RefObject<HTMLElement | null>, data: DataItem } | null) => {
      if (!newDrop) {
          dropTimeout.current = setTimeout(() => setDrop(null), 50);
      } else {
          if (dropTimeout.current !== null) {
              clearTimeout(dropTimeout.current);
          }
          setDrop(newDrop);
      }
  };

    const handleDrop = () => {
      if (!drag || !drop) return;

      const newData = [...data];

      const oldIndex = newData.findIndex((d) => d.id === drag.data.id);
      const [draggedItem] = newData.splice(oldIndex, 1);

      draggedItem.type = drop.data.type;

      let dropIndex = newData.findIndex((item) => item.id === drop.data.id);

      const newIndex = inRange(
        0,
        newData.length,
        dropIndex + (direction === 'after' ? 1 : 0)
      );

      newData.splice(newIndex, 0, draggedItem);

      setData(newData);
    };

    const employees = data.filter((i) => i.type === 'employee');
    const developers = data.filter((i) => i.type === 'developer');

    const renderList = (
        listType: 'employee' | 'developer',
        items: DataItem[]
    ) => (
        <DroppableList onDrop={handleDrop} data={{ id: listType, type: listType }}>
            {items.map((item) => (
                <DraggableListItem key={item.id} data={item} onDrop={handleDrop}>
                    {item.name}
                </DraggableListItem>
            ))}
        </DroppableList>
    );

    return (
    <div style={{ height: 300, display: 'flex', justifyContent: 'space-between' }}>
      <DragContext.Provider value={[drag, setDrag]}>
        <DropContext.Provider value={[drop, handleDropChange]}>
          <DirectionContext.Provider value={[direction, setDirection]}>
           <DragAndDrop>
              <div style={{ flexBasis: '45%' }}>
                <Typography.h3>Employees</Typography.h3>
                  {renderList('employee', employees)}
              </div>
              <div style={{ flexBasis: '45%' }}>
                <Typography.h3>Developers</Typography.h3>
                  {renderList('developer', developers)}
              </div>
            </DragAndDrop>
          </DirectionContext.Provider>
        </DropContext.Provider>
      </DragContext.Provider>
    </div>
    );
};

export default App;
