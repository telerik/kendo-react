---
title: Setting The Title Of The KendoReact RangeSlider Dots
description: An example on how to set the title of the KendoReact RangeSlider dots to their dragged value.
type: how-to
page_title: Dots Title - KendoReact RangeSlider
slug: rangeslider-set-dots-title
tags: rangeslider, title, dots, range
res_type: kb
category: knowledge-base
---

## Environment

<table>
<tbody>
<tr>
<td>Product Version</td>
<td>v5.12.1</td>
</tr>
<tr>
<td>Product</td>
<td>Progress® KendoReact</td>
</tr>
</tbody>
</table>


## Description

I want to set the title of the RangeSlider to its dragged value.

## Solution

You can achieve this by passing a ref to the RangeSlider component. Use this ref to get the reference of the slider's dots, and set their title to the start and end values each time they are changed.

{% meta id:index height:400 %}
{% embed_file inputs/rangeslider-slider-dots-title/main.jsx preview %}
{% endmeta %}