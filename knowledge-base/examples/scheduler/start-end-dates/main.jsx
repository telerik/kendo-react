import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Scheduler,
  AgendaView,
  TimelineView,
  DayView,
  WeekView,
  MonthView,
} from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './events-utc';

const App = () => {
  const [start, setStart] = React.useState('');
  const [end, setEnd] = React.useState('');
  const [date, setDate] = React.useState(displayDate);
  const [view, setView] = React.useState('day');

  const handleDateChange = (event) => {
    setDate(event.value);
  };

  const handleViewChange = (event) => {
    setView(event.value);
  };

  React.useEffect(() => {
    if (document) {
      const allSlots = document.querySelectorAll(
        '.k-scheduler-body .k-scheduler-cell.k-slot-cell'
      );
      const firstSlot = allSlots[0];
      const lastSlot = allSlots[allSlots.length - 1];

      setStart(
        new Date(parseInt(firstSlot.getAttribute('data-slot-start'), 10))
      );

      setEnd(new Date(parseInt(lastSlot.getAttribute('data-slot-end'), 10)));
    }
  }, [date, view]);

  return (
    <div>
      <div>start: {start.toString()}</div>
      <div>end: {end.toString()}</div>
      <Scheduler
        data={sampleData}
        date={date}
        onDateChange={handleDateChange}
        view={view}
        onViewChange={handleViewChange}
      >
        <AgendaView />
        <TimelineView />
        <DayView />
        <WeekView />
        <MonthView />
      </Scheduler>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
