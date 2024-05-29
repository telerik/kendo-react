import * as React from 'react';
import {
  Scheduler,
  WeekView,
  MonthView,
} from '@progress/kendo-react-scheduler';
import { ListView } from '@progress/kendo-react-listview';

import gridData from './shared-data';

const handleDragOver = (e) => {
  e.preventDefault();
};

const App = () => {
  const MyScheduler = React.useRef();
  const refData = React.useRef();
  const refDragItem = React.useRef();
  const [data, setData] = React.useState([]);

  refData.current = data;
  refDragItem.current = null;

  const handleDropItem = React.useCallback((e) => {
    let start = e.target.getAttribute('data-slot-start');
    let end = e.target.getAttribute('data-slot-end');
    let startDate = new Date(parseInt(start));
    let endDate = new Date(parseInt(end));

    let newEvent = {
      id: refDragItem.current.taskID,
      title: refDragItem.current.title,
      StartTimezone: null,
      start: startDate,
      end: endDate,
    };
    const newData = [newEvent, ...refData.current];
    refData.current = newData;
    setData(newData);
  }, []);

  React.useEffect(() => {
    let schedulerElement = MyScheduler.current.element;
    schedulerElement.addEventListener('drop', handleDropItem);
    schedulerElement.addEventListener('dragover', handleDragOver);
    return () => {
      schedulerElement.removeEventListener('drop', handleDropItem);
      schedulerElement.removeEventListener('dragover', handleDragOver);
    };
  }, []);

  const MyItemRender = (props) => {
    let item = props.dataItem;
    return (
      <div
        draggable={true}
        className="k-listview-item"
        onDragStart={() => {
          refDragItem.current = props.dataItem;
        }}
        style={{ padding: 10, borderBottom: '1px solid lightgrey' }}
      >
        {item.title}
      </div>
    );
  };
  return (
    <>
      <Scheduler
        data={data}
        defaultDate={new Date('2013/6/13')}
        ref={MyScheduler}
      >
        <WeekView showWorkHours={false} />
        <MonthView />
      </Scheduler>
      <hr />
      <ListView
        data={gridData}
        item={MyItemRender}
        style={{ width: '100%', height: 600 }}
      />
    </>
  );
};

export default App;
