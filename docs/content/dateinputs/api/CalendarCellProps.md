---
title: CalendarCellProps
description: "Learn how to build custom functionality when working with the React Date Inputs by Kendo UI with the help of the CalendarCellProps."
api_reference: true
type: inner_api
slug: api_dateinputs_calendarcellprops
---

# CalendarCellProps
The props which will be received by the custom cell of the [Calendar](https://www.telerik.com/kendo-react-ui/components/dateinputs/api/calendarprops#toc-cell) and the [MultiViewCalendar](https://www.telerik.com/kendo-react-ui/components/dateinputs/api/multiviewcalendarprops#toc-cell).


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


#### allowReverse?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Allows range selection to be reversed when interacting with the cell.


</td>
</tr>
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


Sets a custom CSS class to the calendar cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### formattedValue


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The formatted string value displayed in the calendar cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The unique identifier for the calendar cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isDisabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the calendar cell is disabled and non-interactive.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isFocused


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is currently focused.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isInRange


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is within a selected date range.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isOtherMonth?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell belongs to another month in the current view.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isRangeEnd


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is the end of a selected range.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isRangeMid


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is in the middle of a selected range.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isRangeSplitEnd?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is the split end of a multi-range selection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isRangeSplitStart?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is the split start of a multi-range selection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isRangeStart


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is the start of a selected range.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isSelected


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isToday


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell represents today's date.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isWeekend


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell represents a weekend day.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick?


</td>
<td type class="table-cell-type">


<code>


(value: Date, event?: MouseEvent&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the calendar cell is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseEnter?


</td>
<td type class="table-cell-type">


<code>


(value: Date, event?: MouseEvent&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the mouse enters the calendar cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseLeave?


</td>
<td type class="table-cell-type">


<code>


(value: Date, event?: MouseEvent&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the mouse leaves the calendar cell.


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


Sets custom inline styles to the calendar cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The title attribute for the cell, used for accessibility or tooltips.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The date value represented by the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### view?


</td>
<td type class="table-cell-type">


<code>


[CalendarViewEnum]({% slug api_dateinputs_calendarviewenum %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the current calendar view (month, year, decade or century).


</td>
</tr>
</tbody>
</table>



