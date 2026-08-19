---
title: RecurrenceButtonTextTemplateProps
description: "Learn how to build custom functionality when working with the React Scheduler by Kendo UI with the help of the RecurrenceButtonTextTemplateProps."
api_reference: true
type: inner_api
slug: api_scheduler_recurrencebuttontexttemplateprops
---

# RecurrenceButtonTextTemplateProps
Represents the props passed to the [`recurrenceButtonTextTemplate`](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulerformeditorprops#toc-recurrenceButtonTextTemplate) component.


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


#### parsedRule


</td>
<td type class="table-cell-type">


<code>


"null" | [RecurrenceRule]({% slug api_scheduler_recurrencerule %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The parsed recurrence rule object, or `null` when no recurrence is set.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### recurrenceRule


</td>
<td type class="table-cell-type">


<code>


"null" | string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current recurrence rule string (RRULE), or `null` when no recurrence is set.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### text


</td>
<td type class="table-cell-type">


<code>


"null" | string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default summary text computed by the Scheduler for the current recurrence rule,
or `null` when no recurrence is set.


</td>
</tr>
</tbody>
</table>



