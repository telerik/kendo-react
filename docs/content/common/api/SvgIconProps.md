---
title: SvgIconProps
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the SvgIconProps."
api_reference: true
type: inner_api
slug: api_common_svgiconprops
---

# SvgIconProps
Represents the props of the [KendoReact SvgIcon component](https://www.telerik.com/kendo-react-ui/components/common/svgicon).


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


#### icon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the SVG icon.

* The possible keys are:
* `name`&mdash;The unique name of the icon.
* `content`&mdash;The entire SVG content of the icon.
* `viewBox`&mdash;The viewBox definition that should be used for the icon.


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


#### svgClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a list of CSS classes that will be added to the svg element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgStyle?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional CSS styles to the svg element.


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
<tr>
<td class="table-cell-name">


#### viewBox?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the viewBox of the custom SVG icon.


</td>
</tr>
</tbody>
</table>



