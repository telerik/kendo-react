---
title: Scheduler
description: "Learn how to build custom functionality when working with the React Scheduler by Kendo UI with the help of the Scheduler."
api_reference: true
type: inner_api
slug: api_scheduler_scheduler
---

# Scheduler
Represents the [KendoReact Scheduler component](https://www.telerik.com/kendo-react-ui/components/scheduler)

A [Functional Component](https://react.dev/reference/react/Component).




```jsx
  const currentYear = new Date().getFullYear();
  const parseAdjust = (eventDate) => {
  const date = new Date(eventDate);
  date.setFullYear(currentYear);
  return date;
  };

  const baseData = [
  {
  TaskID: 4,
  OwnerID: 2,
  Title: 'Bowling tournament',
  Description: '',
  StartTimezone: null,
  Start: '2013-06-09T21:00:00.000Z',
  End: '2013-06-10T00:00:00.000Z',
  EndTimezone: null,
  RecurrenceRule: null,
  RecurrenceID: null,
  RecurrenceException: null,
  isAllDay: false,
  },
  {
  TaskID: 5,
  OwnerID: 2,
  Title: 'Take the dog to the vet',
  Description: '',
  StartTimezone: null,
  Start: '2013-06-10T07:00:00.000Z',
  End: '2013-06-10T08:00:00.000Z',
  EndTimezone: null,
  RecurrenceRule: null,
  RecurrenceID: null,
  RecurrenceException: null,
  isAllDay: false,
   },
 ];

  const sampleData = baseData.map((dataItem) => ({
  id: dataItem.TaskID,
  start: parseAdjust(dataItem.Start),
  startTimezone: dataItem.startTimezone,
  end: parseAdjust(dataItem.End),
  endTimezone: dataItem.endTimezone,
  isAllDay: dataItem.isAllDay,
  title: dataItem.Title,
  description: dataItem.Description,
  recurrenceRule: dataItem.RecurrenceRule,
  recurrenceExceptions: dataItem.RecurrenceException,
  roomId: dataItem.RoomID,
  ownerID: dataItem.OwnerID,
  personId: dataItem.OwnerID,
  }));

  const App = () => {
  return (
  <Scheduler data={sampleData}>
  <AgendaView />
  <DayView />
  <WeekView />
  <MonthView />
  </Scheduler>
   );
  };
```



<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


[SchedulerProps]({% slug api_scheduler_schedulerprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [SchedulerHandle]({% slug api_scheduler_schedulerhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Scheduler component.


</td>
</tr>
</tbody>
</table>



