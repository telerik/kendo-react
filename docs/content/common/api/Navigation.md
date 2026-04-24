---
title: Navigation
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the Navigation."
api_reference: true
type: inner_api
slug: api_common_navigation
---

# Navigation
Represents the [KendoReact Navigation functionality](https://www.telerik.com/kendo-react-ui/components/common/navigation).
It handles the navigation through a collection of DOM elements.


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


#### current


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns the focused DOM element from the navigation collection of DOM elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### elements


</td>
<td type class="table-cell-type">


<code>


HTMLElement[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns the collection of DOM elements which the module will navigate in.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### first


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns the first navigation DOM element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### last


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns the last navigation DOM element.


</td>
</tr>
</tbody>
</table>



## Constructors

### Navigation
<code>


(options: [NavigationOptions]({% slug api_common_navigationoptions %}))


</code>


#### Parameters
##### options
<code>


[NavigationOptions]({% slug api_common_navigationoptions %})


</code>




## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### focusElement


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Focuses the passed element from the navigation collection of DOM elements.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


element


</td>
<td type>


<code>


"null" | HTMLElement


</code>


</td>
<td>





</td>
</tr>
<tr>
<td>


previous?


</td>
<td type>


<code>


"null" | HTMLElement


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### focusNext


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Focuses the next element from the navigation collection of DOM elements.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


target


</td>
<td type>


<code>


HTMLElement


</code>


</td>
<td>





</td>
</tr>
<tr>
<td>


selectors?


</td>
<td type>


<code>


string[] | string[][]


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


HTMLElement


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### focusPrevious


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Focuses the previous element from the navigation collection of DOM elements.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


target


</td>
<td type>


<code>


HTMLElement


</code>


</td>
<td>





</td>
</tr>
<tr>
<td>


selectors?


</td>
<td type>


<code>


string[] | string[][]


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


HTMLElement


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### initializeRovingTab


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Set the first element tabIndex to `1` and `-1` for the rest.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


itemIndex?


</td>
<td type>


<code>


number


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### next


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the next DOM element from the navigation collection of DOM elements.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


target


</td>
<td type>


<code>


HTMLElement


</code>


</td>
<td>





</td>
</tr>
<tr>
<td>


selectors?


</td>
<td type>


<code>


string[] | string[][]


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


HTMLElement


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### previous


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the previous DOM element from the navigation collection of DOM elements.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


target


</td>
<td type>


<code>


HTMLElement


</code>


</td>
<td>





</td>
</tr>
<tr>
<td>


selectors?


</td>
<td type>


<code>


string[] | string[][]


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


HTMLElement


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### removeFocusClass


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Remove a focus class.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


target


</td>
<td type>


<code>


HTMLElement


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### removeFocusListener


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Remove a focus listener.


</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### triggerKeyboardEvent


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


The keyboard events handler.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


ev


</td>
<td type>


<code>


KeyboardEvent&lt;HTMLElement&gt;


</code>


</td>
<td>





</td>
</tr>
<tr>
<td>


options?


</td>
<td type>


<code>


any


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### triggerMouseEvent


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


The mouse events handler.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


ev


</td>
<td type>


<code>


MouseEvent&lt;HTMLElement&gt;


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

</tbody>
</table>



