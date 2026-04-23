import * as React from 'react';
import {
    Scheduler,
    WeekView,

    SchedulerEditItem,
    SchedulerEditItemProps
} from '@progress/kendo-react-scheduler';

const sampleData = [{
    id: 0,
    title: 'Team Meeting',
    start: new Date("2020-01-23T09:30:00.000Z"),
    end: new Date("2020-01-23T10:30:00.000Z")
}]
const displayDate = new Date("2020-01-23T09:30:00.000Z");

const CustomEditItem = (props: SchedulerEditItemProps) => {
    const [dragItem, setDragItem] = React.useState(null);

    const handleDragItemChange = (event) => {
        const minWorkHour = new Date("2020-01-23T08:00:00.000Z").getUTCHours();
        const maxWorkHour = new Date("2020-01-23T17:00:00.000Z").getUTCHours();
        const minWorkDate = new Date("2020-01-20T00:00:00.000Z").getUTCDate();
        const maxWorkDate = new Date("2020-01-24T00:00:00.000Z").getUTCDate();

        if (!event.value
            || (minWorkHour <= event.value.start.getUTCHours()
                && event.value.end.getUTCHours() < maxWorkHour
                && minWorkDate <= event.value.start.getUTCDate()
                && event.value.start.getUTCDate() <= maxWorkDate)
        ) {
            setDragItem(event.value)
        }
    }

    return (
      <SchedulerEditItem
        {...props}
        dragItem={dragItem}
        onDragItemChange={handleDragItemChange}
    />)
}

const App = () => {
    return (
      <Scheduler
        timezone="Etc/UTC"
        data={sampleData}
        defaultDate={displayDate}
        editItem={CustomEditItem}
        editable={{ drag: true, remove: false, resize: false, add: false, edit: false, select: false }}
      >
        <WeekView showWorkHours={false} startTime="06:00" />
      </Scheduler>
    );
};

export default App;
