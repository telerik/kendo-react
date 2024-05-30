import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import {
  DragAndDrop,
  useDroppable,
  Droppable,
} from '@progress/kendo-react-common';
import { DraggableRow } from './draggable-row';
import { DragHandleCell } from './drag-handle-cell';
import {
  Scheduler,
  WeekView,
  MonthView,
} from '@progress/kendo-react-scheduler';
import { guid } from '@progress/kendo-react-common';

export const ReorderContext = React.createContext({
  dragStart: () => {},
});
const App = () => {
  const s = [
    {
      taskID: 1,
      ownerId: 1,
      title: 'Fast and furious 6',
    },
    {
      taskID: 2,
      ownerId: 3,
      title: 'The Internship',
    },
    {
      taskID: 3,
      ownerId: 2,
      title: 'The Perks of Being a Wallflower',
    },
    {
      taskID: 4,
      ownerId: 1,
      title: 'The Help',
    },
    {
      taskID: 5,
      ownerId: 2,
      title: 'Now You See Me',
    },
  ];

  const [activeItem, setActiveItem] = React.useState(null);
  const MyScheduler = React.createRef();
  const [data, setData] = React.useState([]);
  const handleDropItem = (e) => {
    if (!activeItem) {
      return;
    }
    const target = document.elementFromPoint(e.event.clientX, e.event.clientY);

    const start = target.getAttribute('data-slot-start');
    const end = target.getAttribute('data-slot-end');
    const startDate = new Date(parseInt(start));
    const endDate = new Date(parseInt(end));
    const newEvent = {
      id: guid(),
      title: activeItem.title,
      StartTimezone: null,
      start: startDate,
      end: endDate,
    };
    setData([newEvent, ...data]);
    setActiveItem(null);
  };

  const dragStart = (dataItem) => {
    setActiveItem(dataItem);
  };

  return (
    <ReorderContext.Provider value={{ dragStart: dragStart }}>
      <DragAndDrop>
        <Droppable onDrop={handleDropItem}>
          <Scheduler
            data={data}
            defaultDate={new Date('2013/6/13')}
            ref={MyScheduler}
          >
            <WeekView showWorkHours={false} />
            <MonthView />
          </Scheduler>
        </Droppable>
        <hr />
        <Grid
          style={{
            height: '400px',
          }}
          data={s}
          dataItemKey={'ProductID'}
          rowRender={(row, rowProps) => (
            <DraggableRow elementProps={row.props} {...rowProps} />
          )}
        >
          <Column title="" width="80px" cell={DragHandleCell} />
          <Column field="taskID" title="ID" />
          <Column field="title" title="Name" />
        </Grid>
      </DragAndDrop>
    </ReorderContext.Provider>
  );
};

export default App;
