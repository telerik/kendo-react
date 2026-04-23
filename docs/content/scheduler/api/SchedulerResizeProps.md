---
title: SchedulerResizeProps
description: "Learn how to build custom functionality when working with the React Scheduler by Kendo UI with the help of the SchedulerResizeProps."
api_reference: true
type: inner_api
slug: api_scheduler_schedulerresizeprops
---

# SchedulerResizeProps
Represents the props of the KendoReact [SchedulerResize]() component.


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


#### dataItem


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `DataItem` to be visualized as a Resize item.


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


Overrides the default component responsible for visualizing a single item.

The default Component is: [SchedulerItem].


</td>
</tr>
<tr>
<td class="table-cell-name">


#### vertical?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the orientation of the SchedulerItem inside the Drag.


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


Overrides the default component responsible for positioning the item inside the view.

The default Component is: [SchedulerViewItem]().


</td>
</tr>
</tbody>
</table>



