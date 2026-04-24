---
title: MonthViewProps
description: "Learn how to build custom functionality when working with the React Scheduler by Kendo UI with the help of the MonthViewProps."
api_reference: true
type: inner_api
slug: api_scheduler_monthviewprops
---

# MonthViewProps
Represents the props of the KendoReact [MonthView](https://www.telerik.com/kendo-react-ui/components/scheduler/api/monthview) Component.


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


Sets a custom `className` to the wrapping element of the `DayView`.


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


#### editable?


</td>
<td type class="table-cell-type">


<code>


boolean


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


Sets a custom `id` to the wrapping element of the `DayView`.


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


#### itemsPerSlot?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the maximum number of `items` to be rendered in a single `slot`, before adding the `show-more` button.


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
Defaults to `{0:Y}`
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
Defaults to `{0:Y}`
([more information](https://www.github.com/telerik/kendo-intl/blob/develop/docs/date-formatting/index.md))


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


Sets a custom `style` property to the wrapping element of the `DayView`.


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
</tbody>
</table>



