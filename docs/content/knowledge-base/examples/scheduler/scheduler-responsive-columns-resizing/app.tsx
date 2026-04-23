import * as React from 'react';
import { useState, useEffect } from 'react';
import { Scheduler, TimelineView } from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './kb-events-utc.js';
import { Day } from '@progress/kendo-date-math';

const App = () => {
  const [columnWidth, setColumnWidth] = useState<number>(30);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth =
        document.getElementById('scheduler-container')?.offsetWidth || 0;
      const calculatedWidth = containerWidth / 10;
      setColumnWidth(calculatedWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="scheduler-container" style={{ width: '100%' }}>
      <Scheduler data={sampleData} defaultDate={displayDate}>
        <TimelineView
          title="Hour-By-Hour"
          columnWidth={columnWidth}
          numberOfDays={2}
          slotDuration={60}
          slotDivisions={1}
          startTime="08:00"
          endTime="18:00"
          workDayStart="09:00"
          workDayEnd="17:00"
          workWeekStart={Day.Sunday}
          workWeekEnd={Day.Monday}
          showWorkHours={false}
        />
      </Scheduler>
    </div>
  );
};

export default App;
