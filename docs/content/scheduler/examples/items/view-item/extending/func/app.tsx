import * as React from "react";;
import {
    Scheduler,
    AgendaView,
    TimelineView,
    DayView,
    WeekView,
    MonthView,
    SchedulerProportionalViewItem
} from "@progress/kendo-react-scheduler";

const displayDate = new Date("2011-06-09T09:00:00.000Z");
export const data = [{
    id: 0,
    title: "Room 1, Person 1",
    start: new Date("2011-06-09T06:15:00.000Z"),
    end: new Date("2011-06-09T11:45:00.000Z"),
    roomId: 1,
    personId: 1
}, {
    id: 1,
    title: "Room 1, Person 2",
    start: new Date("2011-06-09T08:55:00.000Z"),
    end: new Date("2011-06-09T11:00:00.000Z"),
    roomId: 1,
    personId: 2
}, {
    id: 2,
    title: "Room 2, Person 1",
    start: new Date("2011-06-09T09:15:00.000Z"),
    end: new Date("2011-06-09T11:45:00.000Z"),
    roomId: 2,
    personId: 1
}, {
    id: 3,
    title: "Room 2, Person 2",
    start: new Date("2011-06-09T09:25:00.000Z"),
    end: new Date("2011-06-09T11:35:00.000Z"),
    roomId: 2,
    personId: 2
}];

const App = () => {
    return (<Scheduler data={data} defaultDate={displayDate} editable={false} defaultView={"day"} timezone={"Etc/UTC"} height={"800px"}>
    <AgendaView />
    <TimelineView slotDuration={30} slotDivisions={1} viewItem={SchedulerProportionalViewItem} />
    <DayView slotDuration={30} slotDivisions={1} viewItem={SchedulerProportionalViewItem} />
    <WeekView slotDuration={30} slotDivisions={1} viewItem={SchedulerProportionalViewItem} />
    <MonthView slotDuration={30} slotDivisions={1} />
  </Scheduler>);
};

export default App;
