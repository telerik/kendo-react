---
title: TypographyProps
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the TypographyProps."
api_reference: true
type: inner_api
slug: api_common_typographyprops
---

# TypographyProps
Represents the props of the [KendoReact Typography component](https://www.telerik.com/kendo-react-ui/components/common/typography).


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


Specifies a list of CSS classes that will be added to the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fontSize?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large" | "xsmall" | "xlarge"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the font size applied by the theme typography styles
[see example](https://www.telerik.com/kendo-react-ui/components/common/typography/appearance#toc-font-size).

The possible values are:
* `xsmall`
* `small`
* `medium`
* `large`
* `xlarge`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fontWeight?


</td>
<td type class="table-cell-type">


<code>


"bold" | "normal" | "light"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the font weight applied by the theme typography styles
[see example](https://www.telerik.com/kendo-react-ui/components/common/typography/appearance#toc-font-weight).

The possible values are:
* `light`&mdash;font-weight: 300
* `normal`&mdash;font-weight: 400
* `bold`&mdash;For Default and Bootstrap themes&mdash;font-weight: 700. For Material theme&mdash;font-weight: 500.


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


Sets the `id` property of the top div element of the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### margin?


</td>
<td type class="table-cell-type">


<code>


[MarginEnum]({% slug api_common_marginenum %}) | { bottom?: [MarginEnum]({% slug api_common_marginenum %}); left?: [MarginEnum]({% slug api_common_marginenum %}); right?: [MarginEnum]({% slug api_common_marginenum %}); top?: [MarginEnum]({% slug api_common_marginenum %}); }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the applied margin to the element
[see example](https://www.telerik.com/kendo-react-ui/components/common/typography/appearance#toc-margin).

The possible values for the Default and Material themes are:
* `xsmall` &mdash;Applies 4px margin.
* `small` &mdash;Applies 8px margin.
* `medium` &mdash;Applies 12px margin.
* `large` &mdash;Applies 16px margin.
* `xlarge` &mdash;Applies 24px margin.
* `thin` &mdash;Applies 2px margin.
* `hair` &mdash;Applies 1px margin.
* `number` &mdash;Passing a number will apply a margin of 4 times the passed number in pixels. The minimum number value is 0 and the maximum is 24.
* `object` &smdash;Passing an object allows setting the margins for each side.

The possible values for the Bootstrap theme are:
* `xsmall` &mdash;Applies 0.25rem margin.
* `small` &mdash;Applies 0.5rem margin.
* `medium` &mdash;Applies 0.75rem margin.
* `large` &mdash;Applies 1rem margin.
* `xlarge` &mdash;Applies 1.25rem margin.
* `thin` &mdash;Applies 0.125rem margin.
* `hair` &mdash;Applies 0.0625rem margin.
* `number` &mdash;Passing a number will apply a margin equal to the passed number divided by 4 in rem units.
The minimum number value is 0 and the maximum is 24.
* `object` &smdash;Passing an object allows setting the margins for each side.


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


Sets additional CSS styles to the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### textAlign?


</td>
<td type class="table-cell-type">


<code>


"center" | "left" | "right" | "justify"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text align
[see example](https://www.telerik.com/kendo-react-ui/components/common/typography/appearance#toc-text-alignment).

The possible values are:
* `left`&mdash;Applies text-align: left
* `right`&mdash;Applies text-align: right
* `center`&mdash;Applies text-align: center
* `justify`&mdash;Applies text-align: justify


</td>
</tr>
<tr>
<td class="table-cell-name">


#### textTransform?


</td>
<td type class="table-cell-type">


<code>


"capitalize" | "lowercase" | "uppercase"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text transform
[see example](https://www.telerik.com/kendo-react-ui/components/common/typography/appearance#toc-text-transformation).

The possible values are:
* `lowercase`&mdash;Applies text-transform: lowercase
* `uppercase`&mdash;Applies text-transform: uppercase
* `capitalize`&mdash;Applies text-transform: capitalize


</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


"inherit" | "error" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "dark" | "light" | "inverse"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the theme color of the Typography
[see example](https://www.telerik.com/kendo-react-ui/components/common/typography/appearance#toc-theme-color).

The possible values are:
* `inherit`&mdash;Applies coloring based on the current color.
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

You can use the `style` property to apply custom color related properties to the element.


</td>
</tr>
</tbody>
</table>



