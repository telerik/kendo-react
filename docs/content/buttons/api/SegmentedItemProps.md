---
title: SegmentedItemProps
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the SegmentedItemProps."
api_reference: true
type: inner_api
slug: api_buttons_segmenteditemprops
---

# SegmentedItemProps
Represents the properties of a single item within the SegmentedControl component.


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


Represents the `dir` HTML attribute of the item button, controlling text directionality.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### iconClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


CSS class name applied to the icon element only when the item is selected (`isSelected` is `true`).
Has no effect when `itemTemplate` is provided.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets an SVG icon to render inside the item using an `IconWrap` element.
Only rendered when `itemTemplate` is not provided.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### text?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text label of the SegmentedItem.
Rendered inside a `<span>` element. Only rendered when `itemTemplate` is not provided.


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


Sets the `title` HTML attribute of the item button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The unique identifier for the SegmentedItem. Used to match against the SegmentedControl's `value` to determine selection.


</td>
</tr>
</tbody>
</table>



