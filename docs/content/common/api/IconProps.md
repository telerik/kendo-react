---
title: IconProps
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the IconProps."
api_reference: true
type: inner_api
slug: api_common_iconprops
---

# IconProps
Represents the props of the [KendoReact Icon component](https://www.telerik.com/kendo-react-ui/components/common/icon).


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


Specifies a list of CSS classes that will be added to the root DOM element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### flip?


</td>
<td type class="table-cell-type">


<code>


[IconFlip]({% slug api_common_iconflip %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the icon flip direction.

The possible values are:
* `default` (Default)&mdash;No flipping applied.
* `horizontal`&mdash;Flips the icon in horizontal direction.
* `vertical`&mdash;Flips the icon in vertical direction.
* `both`&mdash;Flips the icon in both horizontal and vertical directions.


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


Sets the `id` of the icon element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### name?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the name of the icon.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick?


</td>
<td type class="table-cell-type">


<code>


(args: [KendoMouseEvent]({% slug api_common_kendomouseevent %})&lt;IconHandle&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the element is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDoubleClick?


</td>
<td type class="table-cell-type">


<code>


(args: [KendoMouseEvent]({% slug api_common_kendomouseevent %})&lt;IconHandle&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the element is double-clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseDown?


</td>
<td type class="table-cell-type">


<code>


(args: [KendoMouseEvent]({% slug api_common_kendomouseevent %})&lt;IconHandle&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the mouse button is pressed down on the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseEnter?


</td>
<td type class="table-cell-type">


<code>


(args: [KendoMouseEvent]({% slug api_common_kendomouseevent %})&lt;IconHandle&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the mouse pointer enters the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseLeave?


</td>
<td type class="table-cell-type">


<code>


(args: [KendoMouseEvent]({% slug api_common_kendomouseevent %})&lt;IconHandle&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the mouse pointer leaves the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseMove?


</td>
<td type class="table-cell-type">


<code>


(args: [KendoMouseEvent]({% slug api_common_kendomouseevent %})&lt;IconHandle&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the mouse pointer moves over the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseOut?


</td>
<td type class="table-cell-type">


<code>


(args: [KendoMouseEvent]({% slug api_common_kendomouseevent %})&lt;IconHandle&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the mouse pointer leaves the element or any of its child elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseOver?


</td>
<td type class="table-cell-type">


<code>


(args: [KendoMouseEvent]({% slug api_common_kendomouseevent %})&lt;IconHandle&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the mouse pointer moves over the element or any of its child elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseUp?


</td>
<td type class="table-cell-type">


<code>


(args: [KendoMouseEvent]({% slug api_common_kendomouseevent %})&lt;IconHandle&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the mouse button is released over the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


[IconSize]({% slug api_common_iconsize %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the size of the icon.

The possible values are:
* `default` (Default)&mdash;Font-size: 16px; Width: 16px; Height: 16px.
* `xsmall`&mdash;Font-size: 12px; Width: 12px; Height: 12px.
* `small`&mdash;Font-size: 14px; Width: 14px; Height: 14px.
* `medium`&mdash;Font-size: 16px; Width: 16px; Height: 16px.
* `large`&mdash;Font-size: 20px; Width: 20px; Height: 20px.
* `xlarge`&mdash;Font-size: 24px; Width: 24px; Height: 24px.
* `xxlarge`&mdash;Font-size: 32px; Width: 32px; Height: 32px.
* `xxxlarge`&mdash;Font-size: 48px; Width: 48px; Height: 48px.

You can use the `style` prop to apply custom font size to the icon.


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


Sets additional CSS styles to the icon.


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


Sets the `tabIndex` of the icon element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


[IconThemeColor]({% slug api_common_iconthemecolor %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the theme color of the Icon.

The possible values are:
* `inherit` (Default)&mdash;Applies coloring based on the current color.
* `primary` &mdash;Applies coloring based on primary theme color.
* `secondary`&mdash;Applies coloring based on secondary theme color.
* `tertiary`&mdash; Applies coloring based on tertiary theme color.
* `info`&mdash;Applies coloring based on info theme color.
* `success`&mdash; Applies coloring based on success theme color.
* `warning`&mdash; Applies coloring based on warning theme color.
* `error`&mdash; Applies coloring based on error theme color.
* `dark`&mdash; Applies coloring based on dark theme color.
* `light`&mdash; Applies coloring based on light theme color.
* `inverse`&mdash; Applies coloring based on inverse theme color.

If the property is not set, the icon inherits the color from its parent.

You can use the `style` prop to apply custom color related properties to the icon.


</td>
</tr>
</tbody>
</table>



