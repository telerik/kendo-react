---
title: SeriesTrendline
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SeriesTrendline."
api_reference: true
type: inner_api
slug: api_charts_seriestrendline
---

# SeriesTrendline
The configuration options of the series trendlines.


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


#### forecast?


</td>
<td type class="table-cell-type">


<code>


[TrendlineForecast]({% slug api_charts_trendlineforecast %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The trendline forecast settings. By default, the trendline does not display a forecast.

The forecast setting is supported for Linear Trendlines on date and scatter series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### order?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The order (degree) of the Polynomial trendline. The default value is 2.

Accepted values are from 2 to 6:
* 2: a Quadratic polynomial trendline with a single extreme point (minimum or maximum) point.
* 3: a Cubic polynomial trendline with up to 2 extreme points.
* 4: a polynomial trendline of 4th degree with up to 3 extreme points.
* 5: a polynomial trendline of 5th degree with up to 4 extreme points.
* 6: a polynomial trendline of 6th degree with up to 5 extreme points.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### period?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of intervals to take when calculating averages. The value should be an integer greater than 2.

The period setting is supported only for Moving Average trendlines.


</td>
</tr>
</tbody>
</table>



