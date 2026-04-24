---
title: SchedulerViewTaskProps
description: "Learn how to build custom functionality when working with the React Scheduler by Kendo UI with the help of the SchedulerViewTaskProps."
api_reference: true
type: inner_api
slug: api_scheduler_schedulerviewtaskprops
---

# SchedulerViewTaskProps
Represents the props of the KendoReact [SchedulerViewTask](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulerviewtask) component.


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


Specifies the `children` of the SchedulerTask.

Setting this property will override the default elements rendered by the SchedulerTask.


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


Specifies the `className` attribute of the wrapping element of the SchedulerTask.

The SchedulerSlot applies the following default className:
- `k-task`


</td>
</tr>
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


Represents the original `DataItem` from which the item was created.

For more information about the `data` collection, refer to the [Scheduler Data Binding](https://www.telerik.com/kendo-react-ui/components/scheduler/data-binding) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### description


</td>
<td type class="table-cell-type">


<code>


"null" | string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `description` of the item.


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


Overrides the `editable` prop of the `Scheduler` and the active view.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### end


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `end` date of the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endTimezone


</td>
<td type class="table-cell-type">


<code>


"null" | string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The timezone name for the `end` date.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### group


</td>
<td type class="table-cell-type">


<code>


[Group]({% slug api_scheduler_group %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the current group in which the item is rendered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### head


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents if the `end` of the item is outside the current visual range.


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


Specifies the `id` of the wrapping element of the SchedulerTask.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isAllDay


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents if the item durations is through the whole day.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isException


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents if the item is an exception to a recurrence rule.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isRecurring


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents if the item is a single occurrence of a recurring `DataItem`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemRef


</td>
<td type class="table-cell-type">


<code>


React.RefObject&lt;"null" | [SchedulerItemHandle]({% slug api_scheduler_scheduleritemhandle %}) | [SchedulerTaskHandle]({% slug api_scheduler_schedulertaskhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `ref` of the actual `item`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRemoveClick?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerTaskMouseEvent]({% slug api_scheduler_schedulertaskmouseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when you click the `delete` icon.

The `delete` icon renders only when `props.editable` or `props.editable.remove` is `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### order


</td>
<td type class="table-cell-type">


<code>


"null" | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the order of the item among its siblings.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### originalStart


</td>
<td type class="table-cell-type">


<code>


"null" | Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the original start of the item.

This property is being used when only a single occurrence of a recurring item is being edited.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### range


</td>
<td type class="table-cell-type">


<code>


Range


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the current range in which the item is rendered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### slots


</td>
<td type class="table-cell-type">


<code>


Slot[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A collection of all `slots` in which the current item fits.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### start


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `start` date of the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startTimezone


</td>
<td type class="table-cell-type">


<code>


"null" | string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The timezone name for the `start` date.


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


Specifies the `style` object of the wrapping element of the SchedulerTask.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


"null" | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `tabIndex` attribute of the wrapping element of the SchedulerTask.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### tail


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents if the `start` of the item is outside the current visual range.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### task?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerTaskProps]({% slug api_scheduler_schedulertaskprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component responsible for visualizing a single task.

The default Component is: [SchedulerTask](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulertask).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title


</td>
<td type class="table-cell-type">


<code>


"null" | string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `title` of the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### zonedEnd


</td>
<td type class="table-cell-type">


<code>


ZonedDate


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `end` Date in the provided timezone.

For more information about timezones, refer to the [Scheduler TImezones](https://www.telerik.com/kendo-react-ui/components/scheduler/timezones) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### zonedStart


</td>
<td type class="table-cell-type">


<code>


ZonedDate


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `start` Date in the provided timezone.

For more information about timezones, refer to the [Scheduler TImezones](https://www.telerik.com/kendo-react-ui/components/scheduler/timezones) article.


</td>
</tr>
</tbody>
</table>



