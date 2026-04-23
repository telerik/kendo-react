---
title: ListItemProps
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the ListItemProps."
api_reference: true
type: inner_api
slug: api_dropdowns_listitemprops
---

# ListItemProps
Represents the props of the ListItem component.


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


Represents the data item of the list item element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates the disabled/enabled state of the list item element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### focused


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates the focused state of the list item element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### group?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The group that will be rendered.


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


Specifies the id that will be added to the list item element.


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


Represents the index of the list item element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick


</td>
<td type class="table-cell-type">


<code>


(index: number, event: MouseEvent&lt;HTMLLIElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `onClick` event handler of the list item element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### render?


</td>
<td type class="table-cell-type">


<code>


(li: ReactElement&lt;HTMLLIElement&gt;, itemProps: [ListItemProps]({% slug api_dropdowns_listitemprops %})) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the list item is about to be rendered. Used to override the default appearance of the list item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selected


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates the selected state of the list item element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### textField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data item field that represents the item text. If the data contains only primitive values, do not define it.


</td>
</tr>
</tbody>
</table>



