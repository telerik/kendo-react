---
title: Blend the tagRender and tags functionality of Kendo React Multiselect
description: An example on how to blend the tagRender and tags functionality of Kendo React Multiselect
type: how-to
page_title: MultiSelect with tags and tagRender functionality - KendoReact MultiSelect
slug: multiselect-tags-and-tagrender
tags: multiselect, tags, tagrender
res_type: kb
category: knowledge-base
---
 
## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>6.1.1</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description
I want to use both the [tagRender](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/custom-rendering/#toc-tags) and [tags](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/custom-tags/) functionalities together in the MultiSelect component.

## Solution
The below example demonstrates this approach where the `tags` property is used to display the number of selected items, while the `tagRender` property is used to customize the item tags to show icons instead of text.

The tags are stored in the `tags` state variable where the first one stores the count of the selected items. When new items are added, in the `handleChange` event handler, they are pushed to the `tags` state variable. On the other had, when an item is removed by clicking on the item from the popup again, they are removed from the `tags` state variable using the `filter` method. In addition, the `tagRender` event handler renders a font icon depending in the `tagData.text` value.

{% meta id:index height:700 %}
{% embed_file multiselect/multiselect-tags-and-tagrender/main.jsx preview %}
{% endmeta %}