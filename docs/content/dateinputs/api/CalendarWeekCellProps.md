---
title: CalendarWeekCellProps
description: "Learn how to build custom functionality when working with the React Date Inputs by Kendo UI with the help of the CalendarWeekCellProps."
api_reference: true
type: inner_api
slug: api_dateinputs_calendarweekcellprops
---

# CalendarWeekCellProps
The props which will be received by the custom week cell of the [Calendar](https://www.telerik.com/kendo-react-ui/components/dateinputs/api/calendarprops#toc-weekcell) and the [MultiViewCalendar](https://www.telerik.com/kendo-react-ui/components/dateinputs/api/multiviewcalendarprops#toc-weekcell).


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


#### children?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Child elements to render inside the week cell


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


CSS class name for styling the week cell


</td>
</tr>
<tr>
<td class="table-cell-name">


#### firstDate


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


First date of the week represented by this cell


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


Unique identifier for the week cell element


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick?


</td>
<td type class="table-cell-type">


<code>


(firstDate: Date, value: Date[], event: MouseEvent&lt;HTMLTableCellElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Click event handler for the week cell


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


Inline styles applied to the week cell


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


"null" | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Week number value, null if not available


</td>
</tr>
<tr>
<td class="table-cell-name">


#### weekDays?


</td>
<td type class="table-cell-type">


<code>


Date[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Array of dates representing all days in the week


</td>
</tr>
</tbody>
</table>



