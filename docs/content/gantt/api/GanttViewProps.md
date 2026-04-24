---
title: GanttViewProps
description: "Learn how to build custom functionality when working with the React Gantt by Kendo UI with the help of the GanttViewProps."
api_reference: true
type: inner_api
slug: api_gantt_ganttviewprops
---

# GanttViewProps
Represents the required props which every [GanttView](https://www.telerik.com/kendo-react-ui/components/gantt/api/ganttview) must accept.


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


#### dateRange?


</td>
<td type class="table-cell-type">


<code>


DateRange | (args: [GanttViewDateRangeArgs]({% slug api_gantt_ganttviewdaterangeargs %})) => DateRange


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the `dateRange` calculated by the `Gantt` component.

If a function is passed, an object of type [GanttViewDateRangeArgs](https://www.telerik.com/kendo-react-ui/components/gantt/api/ganttviewdaterangeargs) will be passed.

```jsx
<GanttView dateRange={{ start: new Date(2023, 0, 1), end: new Date(2023, 0, 31) }} />
<GanttView dateRange={(args) => ({ start: args.tasksStart, end: args.tasksEnd })} />
```



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


The name property is used by the Gantt to match which view is selected. Every view has a default name.

```jsx
<GanttView name="dayView" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### slotWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


100


</code>


</td>
<td class="table-cell-comment">


The width of a single time slot in pixels. Default is 100px.




```jsx
<GanttView slotWidth={120} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### timelineHeaderCell?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[GanttViewTimelineHeaderCellProps]({% slug api_gantt_ganttviewtimelineheadercellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The component to be rendered in header cells of the timeline part of the Gantt.

```jsx
<GanttView timelineHeaderCell={CustomHeaderCell} />
```



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
If a function is passed, it will receive a [LocalizationService](https://www.telerik.com/kendo-react-ui/components/intl/api/localizationservice) as an argument.

```jsx
<GanttView title="Day View" />
<GanttView title={(localization) => localization.toLanguageString('custom.title', 'Custom Title')} />
```



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


Sets the end of the work day.

```jsx
<GanttView workDayEnd="17:00" />
```



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


Sets the start of the work day.

```jsx
<GanttView workDayStart="08:00" />
```



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

```jsx
<GanttView workWeekEnd={Day.Friday} />
```



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

```jsx
<GanttView workWeekStart={Day.Monday} />
```



</td>
</tr>
</tbody>
</table>



