---
title: Expand only one detail row at a time
description: An example on how to expand only one detail row at a time
type: how-to
page_title: Learn how to expand only one detail row at a time
slug: grid-expand-one-detail-row
tags: grid, detailrow, detail, expand, row
res_type: kb
category: knowledge-base
components: ["grid"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>8.1.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Grid</td>
	    </tr>
    </tbody>
</table>

## Description

How can I expand only one detail row at a time?

## Solution

This can be achieved by setting the `expanded` field to `false` for all other rows when one row is expanded in the [`onExpandChage`]({% slug api_grid_gridprops %}#toc-onexpandchange) event handler:

```jsx
const expandChange = (event) => {
    const updatedData = data.map((item) => ({
        ...item,
        expanded: item.ProductID === event.dataItem.ProductID ? !event.dataItem.expanded : false
    }));
    setData(updatedData);
};
```

The following example showcases this approach in action:

{% meta height:480 %}
{% embed_file grid/grid-expand-one-detail-row/app.jsx preview %}
{% embed_file grid/grid-expand-one-detail-row/main.jsx %}
{% endmeta %}
