---
title: RecurrenceRule
description: "Learn how to build custom functionality when working with the React Scheduler by Kendo UI with the help of the RecurrenceRule."
api_reference: true
type: inner_api
slug: api_scheduler_recurrencerule
---

# RecurrenceRule
Represents an [iCalendar](https://tools.ietf.org/html/rfc5545#section-3.3.10) recurrence rule.


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


#### byHour?


</td>
<td type class="table-cell-type">


<code>


number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Hours rule modifier, see BYHOUR.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### byMinute?


</td>
<td type class="table-cell-type">


<code>


number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Minutes rule modifier, see BYMINUTE.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### byMonth?


</td>
<td type class="table-cell-type">


<code>


number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Months rule modifier, see BYMONTH.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### byMonthDay?


</td>
<td type class="table-cell-type">


<code>


number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Month days rule modifier, see BYMONTHDAY.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### bySecond?


</td>
<td type class="table-cell-type">


<code>


number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Seconds rule modifier, see BYSECOND.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### bySetPosition?


</td>
<td type class="table-cell-type">


<code>


number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Weeks rule modifier, see BYSETPOS.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### byWeekDay?


</td>
<td type class="table-cell-type">


<code>


WeekDayRule[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Week days rule modifier, see BYDAY.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### byWeekNumber?


</td>
<td type class="table-cell-type">


<code>


number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Weeks rule modifier, see BYWEEKNO.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### byYearDay?


</td>
<td type class="table-cell-type">


<code>


number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Year days rule modifier, see BYYEARDAY.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### count?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An optional limit on the number occurrences.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### end?


</td>
<td type class="table-cell-type">


<code>


ZonedDate


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The end date of the recurrence rule.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### exceptionDates?


</td>
<td type class="table-cell-type">


<code>


ZonedDate[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Exception dates with no occurrences.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### freq?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The recurrence frequency. Possible values include:

* "secondly"
* "minutely"
* "hourly"
* "daily"
* "weekly"
* "monthly"
* "yearly"


</td>
</tr>
<tr>
<td class="table-cell-name">


#### interval?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The recurrence interval.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### start?


</td>
<td type class="table-cell-type">


<code>


ZonedDate


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The start date of the recurrence rule.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### until?


</td>
<td type class="table-cell-type">


<code>


ZonedDate


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An optional limit date on the number occurrences.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### weekStart?


</td>
<td type class="table-cell-type">


<code>


Day


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The first day of week.


</td>
</tr>
</tbody>
</table>



