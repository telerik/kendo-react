---
title: BadgeProps
description: "Learn how to build custom functionality when working with the React Indicators by Kendo UI with the help of the BadgeProps."
api_reference: true
type: inner_api
slug: api_indicators_badgeprops
---

# BadgeProps
Represents the props of the [KendoReact Badge component](https://www.telerik.com/kendo-react-ui/components/indicators/badge).


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


{ horizontal: "start" | "end"; vertical: "top" | "bottom"; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the alignment of the Badge.

The possible keys are:
* `horizontal`&mdash; Defines the possible horizontal alignment of the Badge.
  * `'start'`&mdash;Uses the start point of the parent element.
  * `'end'`(Default)&mdash;Uses the end point of the parent element.
  *  `null` No horizontal alignment.
* `vertical`&mdash; Defines the possible vertical alignment of the Badge.
  * `'top'`(Default)&mdash;Uses the top point of the parent element.
  * `'bottom'`&mdash;Uses the bottom point of the parent element.
  *  `null` No horizontal alignment.


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


The React elements that will be rendered inside the Badge.


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


Specifies a list of CSS classes that will be added to the Badge.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cutoutBorder?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies wether or not to render additional "cutout" border around the Badge.

The possible values are:
* `true`
* `false` (Default)


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


Represents the `dir` HTML attribute. This is used to switch from LTR to RTL.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"solid" | "outline"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Specifies the appearance fill style of the Badge.

The possible values are:
* `solid`
* `outline`




```tsx
<Badge fillMode="outline" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


"edge" | "outside" | "inside"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the position of the Badge relative to the edge of the container element.

The possible values are:
* `'edge'`&mdash;The center of the Badge is positioned on the edge of the container element.
* `'outside'`&mdash;The Badge is entirely positioned outside the edge of the container element.
* `'inside'`&mdash;The Badge is entirely positioned inside the edge of the the container element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rounded?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large" | "full" | "none"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Specifies the roundness of the Badge.

The possible values are:
- small
- medium
- large
- full
- none




```tsx
<Badge rounded="full" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Specifies the size of the Badge.

The possible values are:
* `small`
* `medium`
* `large`




```tsx
<Badge size="large" />
```



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


Sets additional CSS styles to the Badge.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


"base" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "error" | "dark" | "light" | "inverse" | "inherit"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the theme color of the Badge.

The possible values are:
* `base` &mdash;Applies coloring based on the `base` theme color.
* `primary`&mdash;Applies coloring based on primary theme color.
* `secondary`&mdash;Applies coloring based on secondary theme color.
* `tertiary`&mdash; Applies coloring based on tertiary theme color.
* `inherit`&mdash; Applies inherited coloring value.
* `info`&mdash;Applies coloring based on info theme color.
* `success`&mdash; Applies coloring based on success theme color.
* `warning`&mdash; Applies coloring based on warning theme color.
* `error`&mdash; Applies coloring based on error theme color.
* `dark`&mdash; Applies coloring based on dark theme color.
* `light`&mdash; Applies coloring based on light theme color.
* `inverse`&mdash; Applies coloring based on inverse theme color.


</td>
</tr>
</tbody>
</table>



