---
title: Set the focus to an input after opening an item for editing.
description: An example on how to focus an editor after opening an item for editing KendoReact TreeList.
type: how-to
page_title: Focus An Editor When A Row Is Opened For Editing - KendoReact TreeList
slug: treelist-focus-input-on-edit
tags: treelist, kendoreact, editing, focus
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.14.1</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description
I want to focus the first editor when I open a row for editing in the TreeList (after clicking on the "Edit" or "Add new" buttons).

## Solution
Create a state variable that will hold the ID value of the currently edited or created item. Update the value within the addRecord and enterEdit functions. 

Use React Context for passing the ID value from the state to the cellRender of the TreeList. Within the cellRender check if the currently rendered cell is for the dataItem having the same ID as the stored in the state and if the cell is for the first editor (or the editor that you want to focus first), use TD's ref to focus the input within the cell.

Following is an example demonstrating such implementation

{% meta id height:650 %} 
{% embed_file treelist/treelist-focus-input-on-edit/app.jsx preview %}
{% embed_file treelist/treelist-focus-input-on-edit/main.jsx %}
{% embed_file treelist/treelist-focus-input-on-edit/data.js %}
{% embed_file treelist/treelist-focus-input-on-edit/my-command-cell.jsx %}
{% endmeta %}
