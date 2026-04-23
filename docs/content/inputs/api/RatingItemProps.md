---
title: RatingItemProps
description: "Learn how to build custom functionality when working with the React Inputs by Kendo UI with the help of the RatingItemProps."
api_reference: true
type: inner_api
slug: api_inputs_ratingitemprops
---

# RatingItemProps
Represents the properties of [RatingItem](https://www.telerik.com/kendo-react-ui/components/inputs/api/ratingitem) component.


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


Determines the children nodes.


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


Sets additional classes to the RatingItem.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the RatingItem direction `ltr` - by default, or `rtl`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### half?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if icon is partly selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hovered?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if current RatingItem is hovered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### icon?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the icon of current RatingItem component. [See example](https://www.telerik.com/kendo-react-ui/components/inputs/rating/label)


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


Sets the `id` property of the top div element of the RatingItem.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [RatingItemFocusEvent]({% slug api_inputs_ratingitemfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered after `onBlur` event. Gets outside access to the target element and the event type.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick?


</td>
<td type class="table-cell-type">


<code>


(event: [RatingItemMouseEvent]({% slug api_inputs_ratingitemmouseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered after `onClick` event. Gets outside access to the target element, the new value and the event type.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [RatingItemFocusEvent]({% slug api_inputs_ratingitemfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered after `onFocus` event. Gets outside access to the target element and the event type.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDown?


</td>
<td type class="table-cell-type">


<code>


(event: [RatingItemKeyboardEvent]({% slug api_inputs_ratingitemkeyboardevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered after `onKeyDown` event. Gets outside access to the target element, the new value and the event type.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseEnter?


</td>
<td type class="table-cell-type">


<code>


(event: [RatingItemMouseEvent]({% slug api_inputs_ratingitemmouseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered after `onMouseEnter` event. Gets outside access to the target element and the event type.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseLeave?


</td>
<td type class="table-cell-type">


<code>


(event: [RatingItemMouseEvent]({% slug api_inputs_ratingitemmouseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered after `onMouseLeave` event. Gets outside access to the target element and the event type.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseMove?


</td>
<td type class="table-cell-type">


<code>


(event: [RatingItemMouseEvent]({% slug api_inputs_ratingitemmouseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered after `onMouseMove` event. Gets outside access to the target element and the event type.


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


Determines if current RatingItem is selected. [See example](https://www.telerik.com/kendo-react-ui/components/inputs/rating/customization)


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


Sets additional CSS styles to the RatingItem.


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


Sets the `tabIndex` attribute.


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


Sets the title of current RatingItem component. [See example](https://www.telerik.com/kendo-react-ui/components/inputs/rating/controlled)


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the current value of the RatingItem, used in controlled mode.


</td>
</tr>
</tbody>
</table>



