---
title: SkeletonProps
description: "Learn how to build custom functionality when working with the React Indicators by Kendo UI with the help of the SkeletonProps."
api_reference: true
type: inner_api
slug: api_indicators_skeletonprops
---

# SkeletonProps
Represents the props of the [KendoReact Skeleton component](https://www.telerik.com/kendo-react-ui/components/indicators/skeleton).


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


#### animation?


</td>
<td type class="table-cell-type">


<code>


boolean | [SkeletonAnimation]({% slug api_indicators_skeletonanimation %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the animation settings of the Skeleton.

The possible keys are:
* `type`&mdash;Defines the type of the Skeleton animation.
  * `wave`&mdash;Shows wave animation effect.
  * `pulse`(Default)&mdash;Shows pulse animation effect.

To disable the animation, set the property to `false`.

```jsx
<Skeleton animation={{ type: 'wave' }} />
```



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


Specifies a list of CSS classes that will be added to the Skeleton.

```jsx
<Skeleton className="custom-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### shape?


</td>
<td type class="table-cell-type">


<code>


[SkeletonShape]({% slug api_indicators_skeletonshape %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the shape of the Skeleton.

The possible values are:
* `circle`&mdash;Renders a circular Skeleton.
* `text`(Default)&mdash;Renders a line Skeleton.
* `rectangle`&mdash;Renders a rectangular Skeleton.

```jsx
<Skeleton shape="circle" />
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


Sets additional CSS styles to the Skeleton.

```jsx
<Skeleton style={{ backgroundColor: 'red' }} />
```



</td>
</tr>
</tbody>
</table>



