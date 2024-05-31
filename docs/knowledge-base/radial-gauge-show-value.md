---
title: Show RadialGauge Value
description: Example on how to show the value of the RadialGauge
type: how-to
page_title: Show RadialGauge Value - KendoReact RadialGauge
slug: radial-gauge-show-value
position:
tags: radialgauge, gauge, value
ticketid: 1645522
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>7.3.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>

## Description

How can I show the value of the RadialGauge in the center?

## Solution

This can be achieved by rendering a custom label element with the value inside that is relatively positioned:

{% meta id height:480 %}
{% embed_file radialgauge/app.tsx preview %}
{% embed_file radialgauge/main.tsx %}
{% endmeta %}
