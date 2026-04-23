---
title: StackLayoutProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the StackLayoutProps."
api_reference: true
type: inner_api
slug: api_layout_stacklayoutprops
---

# StackLayoutProps
Represents the props of the [KendoReact StackLayout component](https://www.telerik.com/kendo-react-ui/components/layout/stacklayout).


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


#### align?


</td>
<td type class="table-cell-type">


<code>


[StackLayoutAlign]({% slug api_layout_stacklayoutalign %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the horizontal and vertical alignment of the inner StackLayout elements.
Demo ([here](https://www.telerik.com/kendo-react-ui/components/layout/stacklayout/layout#toc-horizontal-alignment)) and ([here](https://www.telerik.com/kendo-react-ui/components/layout/stacklayout/layout#toc-vertical-alignment)).

The possible keys are:
* `horizontal`&mdash;Defines the possible horizontal alignment of the inner StackLayout elements.
  * `start`&mdash;Uses the start point of the container.
  * `center`&mdash;Uses the central point of the container.
  * `end`&mdash;Uses the end point of the container.
  * (Default)`stretch`&mdash;Stretches the items to fill the width of the container.
* `vertical`&mdash;Defines the possible vertical alignment of the inner StackLayout elements.
  * `top`&mdash;Uses the top point of the container.
  * `middle`&mdash;Uses the middle point of the container.
  * `bottom`&mdash;Uses the bottom point of the container.
  * (Default)`stretch`&mdash;Stretches the items to fill the height of the container.


</td>
</tr>
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


The React elements that will be rendered inside the StackLayout.


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


Sets additional CSS classes to the StackLayout.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### gap?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the gap between the inner elements ([see example](https://www.telerik.com/kendo-react-ui/components/layout/stacklayout/layout#toc-gaps)).


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


Sets the `id` property of the root StackLayout element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### orientation?


</td>
<td type class="table-cell-type">


<code>


[StackLayoutOrientation]({% slug api_layout_stacklayoutorientation %})


</code>


</td>
<td class="table-cell-default">


<code>


horizontal


</code>


</td>
<td class="table-cell-comment">


Specifies the StackLayout orientation.
([see example](https://www.telerik.com/kendo-react-ui/components/layout/stacklayout/layout#toc-orientation)).

The possible values are:
* (Default)`horizontal`
* `vertical`





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


Sets additional CSS styles to the StackLayout.


</td>
</tr>
</tbody>
</table>



