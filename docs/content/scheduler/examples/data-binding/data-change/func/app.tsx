import * as React from 'react';
import { Scheduler, DayView, SchedulerDataChangeEvent } from '@progress/kendo-react-scheduler';

const displayDate: Date = new Date("2019-08-26T21:00:00.000Z")

const defaultData: any[] = [{
    id: 0,
    title: 'Move me to 10:30 AM',
    start: new Date("2019-08-27T06:00:00.000Z"),
    end: new Date("2019-08-27T06:30:00.000Z")
}]

const App = () => {
    const [data, setData] = React.useState<any[]>(defaultData);

    const handleDataChange = React.useCallback(
        ({ updated }: SchedulerDataChangeEvent) => {
            setData(old => old
                .map((item) => updated.find(current => current.id === item.id) || item))
        },
        [setData]
    )
    return (
      <Scheduler
        data={data}
        onDataChange={handleDataChange}
        defaultDate={displayDate}
        editable={{ 
          remove: false,
          resize: false,
          add: false,
          edit: false,
          select: false,
          drag: true
         }}
        >
        <DayView />
      </Scheduler>
    )
}

export default App;
