---
title: Sparkline
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the Sparkline."
api_reference: true
type: inner_api
slug: api_charts_sparkline
---

# Sparkline
The root Sparkline component.




```jsx
import {
    Sparkline,
    ChartValueAxis,
    ChartValueAxisItem
} from '@progress/kendo-react-charts';

const sparklineData = [ 936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007 ];
const bulletData = [ 21, 23 ];
const bulletValueAxis = {
    min: 0,
    max: 30,
    plotBands: [{
        from: 0, to: 15, color: '#787878', opacity: 0.15
    }, {
        from: 15, to: 22, color: '#787878', opacity: 0.3
    }, {
        from: 22, to: 30, color: '#787878', opacity: 0.15
    }]
};

const SparklineContainer = () => (
     <ul>
       <li>
           Base Sparkline chart
           <Sparkline data={sparklineData} />
       </li>
       <li>
           Bar/Column type Sparkline chart
           <Sparkline data={sparklineData} type="column" />
       </li>
       <li>
           Area type Sparkline chart
           <Sparkline data={sparklineData} type="area" />
       </li>
       <li>
           Pie type Sparkline chart
           <Sparkline data={sparklineData} type="pie" />
       </li>
       <li>
           Bullet type Sparkline chart
           <Sparkline data={bulletData} type="bullet">
               <ChartValueAxis>
                   <ChartValueAxisItem {...bulletValueAxis} />
               </ChartValueAxis>
           </Sparkline>
       </li>
     </ul>
);
```



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


#### element


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLDivElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The DOM element of the Sparkline.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


Readonly&lt;[SparklineProps]({% slug api_charts_sparklineprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Sparkline component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### surface


</td>
<td type class="table-cell-type">


<code>


"null" | Surface


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Drawing `Surface` of the Sparkline.


</td>
</tr>
</tbody>
</table>



