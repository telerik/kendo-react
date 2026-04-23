---
title: ButtonItemProps
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the ButtonItemProps."
api_reference: true
type: inner_api
slug: api_buttons_buttonitemprops
---

# ButtonItemProps
The props of the ButtonItem component.
The ButtonItem component renders each list item in the dropdown buttons list.


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


One or more CSS classes that will be added to the item element.


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


The data item represented by this button item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### focused?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether the item is focused.


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


The id attribute of the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### index?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index of the item in the items list.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


"null" | ComponentType&lt;{ item: any; itemIndex: number; }&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A React component for rendering the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLLIElement&gt;, index?: number) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function that is fired when the item is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDown?


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLLIElement&gt; | PointerEvent&lt;HTMLLIElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function that is fired when the mouse or pointer is pressed down on the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### render?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;{ item: any; itemIndex: number; }&gt; | (li: ReactElement&lt;HTMLLIElement&gt;, props: [ButtonItemProps]({% slug api_buttons_buttonitemprops %})) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function or React component for rendering the item. The default rendering includes an icon, an image, and text.


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


The field of the data item that provides the text content of the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### unstyled?


</td>
<td type class="table-cell-type">


<code>


ButtonsClassStructure


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Internal property for the unstyled rendering variant of the component.


</td>
</tr>
</tbody>
</table>



