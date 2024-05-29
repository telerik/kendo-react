---
title: TreeList Data Validation
description: An example on how to validate the data of the KendoReact TreeList with inline editing.
type: how-to
page_title: Data Validation - KendoReact TreeList
slug: treelist-data-validation
tags: treelist, data validation, validation, treelist data validation
res_type: kb
category: knowledge-base
---

## Environment

<table>
<tbody>
<tr>
<td>Product Version</td>
<td>v7.2.3</td>
</tr>
<tr>
<td>Product</td>
<td>Progress® KendoReact</td>
</tr>
</tbody>
</table>


## Description

I want to validate that data entered through the TreeList, whether it is newly added or modified through editing.

## Solution

In order to add validation to the cell that is being edited, render a custom edit cell component (using the `editCell` prop) and handle the validation based on your requirement.

The example below demonstrates this approach where the variable `isValid` is set to `false` when the input length is less or equal to 4. Based on its value, the `valid` prop of the KendoReact Input component is set and shows a validation message. In addition, in the `save` function, the state is set only when `isValid` is set to true:

{% meta id:index height:500 %}
{% embed_file treelist/treelist-inline-editing-validation/app.jsx preview %}
{% embed_file treelist/treelist-inline-editing-validation/main.jsx %}
{% embed_file treelist/treelist-inline-editing-validation/my-command-cell.jsx %}
{% embed_file treelist/treelist-inline-editing-validation/data.js %}
{% endmeta %}

The above demo uses inline-editing that is explained in the below article. However, you can use any other editing approach.
- https://www.telerik.com/kendo-react-ui/components/treelist/editing/editing-inline/