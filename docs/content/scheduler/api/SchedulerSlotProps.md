---
title: SchedulerSlotProps
description: "Learn how to build custom functionality when working with the React Scheduler by Kendo UI with the help of the SchedulerSlotProps."
api_reference: true
type: inner_api
slug: api_scheduler_schedulerslotprops
---

# SchedulerSlotProps
Represents the props of the KendoReact [SchedulerSlot](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulerslot) component.


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


Specifies the `children` of the SchedulerSlot. By default, no child elements are rendered.


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


Specifies the `className` attribute of the wrapping element of the SchedulerSlot.

The SchedulerSlot applies the following default className:
- `k-scheduler-cell`
- `k-slot-cell`
- `k-nonwork-hour` - if either `props.isWorkHour` or `props.isWorkDay` is `false`
- `k-selected` - if `props.selected` is set to `true`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### col


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `col` in the context of the current active view.
This property provides keyboard navigation between the SchedulerSlot components.


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


The `end` date of the slot.


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


Represents the current group in which the slot is rendered.


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


Specifies the `id` of the wrapping element of the SchedulerSlot.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### index


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the consecutive number of the slot in the current range.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isAllDay?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents if the slot is an `All-day` slot.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isWorkDay?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the `day` of the SchedulerSlot (in the current timezone) is between the `workDayStart` and `workDayEnd` of the active view.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isWorkHour?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the `time` of the SchedulerSlot (in the current timezone) is between the `workDayStart` and `workDayEnd` of the active view.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### items


</td>
<td type class="table-cell-type">


<code>


Item[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A collection of all `items` which fits in the current slot.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerSlotFocusEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the element, or any of its child elements, lose focus.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerSlotMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the element, or any of its child elements, is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDoubleClick?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerSlotMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the element, or any of its child elements, is double-clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerSlotFocusEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the element, or any of its child elements, receive focus.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDown?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerSlotKeyboardEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time a `keydown` event propagates to the wrapping element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyPress?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerSlotKeyboardEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time a `keypress` event propagates to the wrapping element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyUp?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerSlotKeyboardEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time a `keyup` event propagates to the wrapping element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseEnter?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerSlotMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the element, or any of its child elements, receives a `mouseenter` event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseLeave?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerSlotMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the element, or any of its child elements, receives a `mouseleave` event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseOut?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerSlotMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the element, or any of its child elements, receives a `mouseout` event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseOver?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerSlotMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the element, or any of its child elements, receives a `mouseover` event.


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


Represents the current range in which the slot is rendered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### row


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `row` in the context of the current active view.
This property provides keyboard navigation between the SchedulerSlot components.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selected?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the selected state of the SchedulerSlot. By default, the `k-selected` className is added if `props.selected` is `true`.


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


The `end` date of the slot.


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


Specifies the `style` object of the wrapping element of the SchedulerSlot.

The SchedulerSlot applies the following default styles:
 - `userSelect`: `none`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `tabIndex` attribute of the wrapping element of the SchedulerSlot.

Providing `null` does not apply any `tabIndex` to the element.


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



