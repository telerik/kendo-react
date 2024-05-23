---
title: Persisting The KendoReact Grid's DataState Between Page Reloads
description: An example on how to preserve the state of the KendoReact Grid.
type: how-to
page_title: Save State - KendoReact Grid
slug: grid-save-state-to-localstorage
tags: grid, kendoreact, state, localstorage, refresh
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

I want to preserve the Grid state between page reloads.

## Solution

You can achieve this by saving the DataState to the localStorage. When the dataState changes, store it in the localStore, and when the component loads, set the previously saved dataState from the localStorage.

{% meta id:index height:480 %}
{% embed_file grid/grid-save-datastate-to-localstorage/main.jsx preview %}
{% embed_file shared/products.json %}
{% endmeta %}
