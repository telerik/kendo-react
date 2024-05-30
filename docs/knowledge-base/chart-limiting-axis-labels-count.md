---
title: Limit the number of axis labels in the KendoReact Chart
description: An example on how to limit the number of axis labels in the Chart so they don't overlap 
type: how-to
page_title: Setting the axis labels step to make the labels readable - KendoReact Chart
slug: chart-limiting-axis-labels-count
tags: chart, chartcategoryaxisitem, labels
ticketid: 
res_type: kb
category: knowledge-base
---
 
## Environment
<table>
    <tbody>
	    <tr> 
	    	<td>Product Version</td>
	    	<td>5.12.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
I have a Chart with many points and rendering the axis labels for each point makes them unreadable. Can I limit the number of labels and render every n-th label?


## Solution
Limiting the number of the axis labels can be achieved by setting the "ChartCategoryAxisItem.labels.step" property. For example, setting the "step" property to "10" will render every 10th label.

Here is an example with the described approach:

{% meta id height:340 %}
{% embed_file charts/limiting-axis-labels-count/app.jsx preview %}
{% embed_file charts/limiting-axis-labels-count/main.jsx %}
{% endmeta %}

