---
title: NavigationOptions
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the NavigationOptions."
api_reference: true
type: inner_api
slug: api_common_navigationoptions
---

# NavigationOptions
Represents the [Navigation](https://www.telerik.com/kendo-react-ui/components/common/api/navigation) options object.


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


#### focusClass?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a class to the current focused element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### focusOptions?


</td>
<td type class="table-cell-type">


<code>


FocusOptions


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the options of the focus methods that is used. Defaults to `{ preventScroll: true }`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### keyboardEvents?


</td>
<td type class="table-cell-type">


<code>


{[type: string]: {[key: string]: (target: HTMLElement, nav: [Navigation]({% slug api_common_navigation %}), ev: React.KeyboardEvent&lt;HTMLElement&gt;) => void}}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the keyboard events handlers.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mouseEvents?


</td>
<td type class="table-cell-type">


<code>


{[type: string]: (target: HTMLElement, nav: [Navigation]({% slug api_common_navigation %}), ev: React.MouseEvent&lt;HTMLElement&gt;) => void}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the mouse events handlers.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### root


</td>
<td type class="table-cell-type">


<code>


RefObject&lt;"null" | HTMLElement&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the root DOM element used by the [Navigation](https://www.telerik.com/kendo-react-ui/components/common/api/navigation).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rovingTabIndex?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures if the roving tabIndex technique will be used in the [Navigation](https://www.telerik.com/kendo-react-ui/components/common/api/navigation). Defaults to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectors


</td>
<td type class="table-cell-type">


<code>


string[] | string[][]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the CSS selectors used by the [Navigation](https://www.telerik.com/kendo-react-ui/components/common/api/navigation). The navigation DOM elements will be queried using the selectors.
Make sure their order matches the navigating order.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the tabIndex used by the [Navigation](https://www.telerik.com/kendo-react-ui/components/common/api/navigation).


</td>
</tr>
</tbody>
</table>



