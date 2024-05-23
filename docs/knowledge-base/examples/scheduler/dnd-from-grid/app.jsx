import * as React from 'react';
import {
  Scheduler,
  WeekView,
  MonthView,
} from '@progress/kendo-react-scheduler';

import { Grid, GridColumn } from '@progress/kendo-react-grid';

import gridData from './data.js';

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

  const GridRowRender = (tr, props) => {
    const trProps = {
      draggable: true,
      onDragStart: () => {
        refDragItem.current = props.dataItem;
      },
    };
    return React.cloneElement(tr, { ...trProps }, tr.props.children);
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
      <Grid data={gridData} rowRender={GridRowRender}>
        <GridColumn field="taskID" />
        <GridColumn field="title" />
      </Grid>
    </>
  );
};

export default App;
