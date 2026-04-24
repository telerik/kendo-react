---
title: TimelineViewProps
description: "Learn how to build custom functionality when working with the React Scheduler by Kendo UI with the help of the TimelineViewProps."
api_reference: true
type: inner_api
slug: api_scheduler_timelineviewprops
---

# TimelineViewProps
Represents the properties of the KendoReact [TimelineView](https://www.telerik.com/kendo-react-ui/components/scheduler/api/timelineview) Component.


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


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a custom `className` to the wrapping element of the `TimelineView`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The width of a single time slot in pixels. Default is 100px.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### currentTimeMarker?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `false` the "current time" marker of the scheduler would not be displayed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dateHeaderCell?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[DateHeaderCellProps]({% slug api_scheduler_dateheadercellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents component based on the DateHeaderCellProps.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dateRange?


</td>
<td type class="table-cell-type">


<code>


DateRange | (args: [SchedulerViewDateRangeArgs]({% slug api_scheduler_schedulerviewdaterangeargs %})) => DateRange


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the `dateRange` calculated by the `Scheduler` component.

If a function is passed, an object of type [SchedulerViewDateRangeArgs](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulerviewdaterangeargs) will be passed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultShowWorkHours?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the initial business-hour mode. Default `true`.

This option applies only the initial `showWorkHours` state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editable?


</td>
<td type class="table-cell-type">


<code>


boolean | [EditableProp]({% slug api_scheduler_editableprop %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the general `editable` prop of the Scheduler for the specified view only.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editItem?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the `editableItem` prop of the Scheduler for the specified view only.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editSlot?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerEditSlotProps]({% slug api_scheduler_schedulereditslotprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the `editSlot` prop of the Scheduler for the specified view only.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endTime?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The end time of the view. The TimelineView displays events which are visible before the end time.
Accepts string values in the `HH:mm` format.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### form?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerFormProps]({% slug api_scheduler_schedulerformprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the `form` prop of the Scheduler for the specified view only.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a custom `id` to the wrapping element of the `TimelineView`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerItemProps]({% slug api_scheduler_scheduleritemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the `item` prop of the Scheduler for the specified view only.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### name?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name property is used by the Scheduler to match which view is selected. Every view has a default name.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### numberOfDays?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the number of days that the view will render.
Defaults to `1`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDataAction?


</td>
<td type class="table-cell-type">


<code>


(action: [DataAction]({% slug api_scheduler_dataaction %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called every time any of the SchedulerView Slots or Items trigger a data action, through editing, deleting or creating new `DataItem`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectedDateFormat?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The long-date format for displaying the
selected date in the Scheduler toolbar.
Defaults to `{0:D} - {1:D}`
([more information](https://www.github.com/telerik/kendo-intl/blob/develop/docs/date-formatting/index.md))


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectedShortDateFormat?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The short-date format for displaying the
selected date in the Scheduler toolbar.
Defaults to `{0:d} - {1-d}`
([more information](https://www.github.com/telerik/kendo-intl/blob/develop/docs/date-formatting/index.md))


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showWorkHours?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the view will be shown in the business-hours mode only.

This will always override the internal `showWorkHours` state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### slot?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerSlotProps]({% slug api_scheduler_schedulerslotprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the `slot` prop of the Scheduler for the specified view only.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### slotDivisions?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of divisions of the time slots.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### slotDuration?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The duration (in minutes) of the time slots.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startTime?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The start time of the view. The TimelineView displays events which are visible after the start time.
Accepts string values in the `HH:mm` format.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### step?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the step by which the currently rendered days will be changed, when using the back and forwards buttons in the toolbar navigation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a custom `style` property to the wrapping element of the `TimelineView`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### timeHeaderCell?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TimeHeaderCellProps]({% slug api_scheduler_timeheadercellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents component based on the TimeHeaderCellProps.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string | (localization: LocalizationService) => string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The title to be displayed in the view selection list in the Toolbar.
If a function is passed, it will receive a [LocalizationService](https://www.telerik.com/kendo-react-ui/components/intl/api/localizationservice) as an argument


</td>
</tr>
<tr>
<td class="table-cell-name">


#### viewItem?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerViewItemProps]({% slug api_scheduler_schedulerviewitemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the `viewItem` prop of the Scheduler for the specified view only.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### viewSlot?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerViewSlotProps]({% slug api_scheduler_schedulerviewslotprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the `viewSlot` prop of the Scheduler for the specified view only.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### workDayEnd?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The end time of the view when `showWorkHours` is set to `true`.
Accepts string values in the `HH:mm` format.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### workDayStart?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The start time of the view when `showWorkHours` is set to `true`.
Accepts string values in the `HH:mm` format.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### workWeekEnd?


</td>
<td type class="table-cell-type">


<code>


Day


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The end of the work week.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### workWeekStart?


</td>
<td type class="table-cell-type">


<code>


Day


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The start of the work week.


</td>
</tr>
</tbody>
</table>



