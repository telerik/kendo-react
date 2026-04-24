---
title: RadialGaugeProps
description: "Learn how to build custom functionality when working with the React Gauges by Kendo UI with the help of the RadialGaugeProps."
api_reference: true
type: inner_api
slug: api_gauges_radialgaugeprops
---

# RadialGaugeProps
Represents the props of the [KendoReact RadialGauge component](https://www.telerik.com/kendo-react-ui/components/gauges/radialgauge).


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


Sets additional CSS classes to the component.


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


Represents the `dir` HTML attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pointer


</td>
<td type class="table-cell-type">


<code>


[RadialPointer]({% slug api_gauges_radialpointer %}) | [RadialPointer]({% slug api_gauges_radialpointer %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the pointers ([see example](https://www.telerik.com/kendo-react-ui/components/gauges/radialgauge/multiple-pointers)).

Example:
```jsx
<RadialGauge pointer={{ value: 50 }} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### renderAs?


</td>
<td type class="table-cell-type">


<code>


"canvas" | "svg"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the preferred rendering engine. If not supported by the browser, the Gauge switches to the first available mode.

The supported values are:
- `"svg"`&mdash;If available, renders the component as an inline `.svg` file.
- `"canvas"`&mdash;If available, renders the component as a `canvas` element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### scale?


</td>
<td type class="table-cell-type">


<code>


[RadialScale]({% slug api_gauges_radialscale %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the scale.

Example:
```jsx
<RadialGauge scale={{ startAngle: -90, endAngle: 180 }} />
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


The styles that are applied to the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### transitions?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the Gauge plays animations when it displays the series. By default, animations are enabled.


</td>
</tr>
</tbody>
</table>



