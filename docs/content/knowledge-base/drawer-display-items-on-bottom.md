---
title: Display Items at the Bottom of the Drawer
description: Learn how to position Drawer items at the bottom of the component using absolute positioning.
type: how-to
page_title: Display Items at Bottom - KendoReact Drawer
slug: drawer-display-items-on-bottom
tags: drawer, kendoreact, layout, position, bottom, absolute, css
res_type: kb
category: knowledge-base
components: ['layout']
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>13.2.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Layout</td>
		</tr>
	</tbody>
</table>

## Description

How can I display certain items at the bottom of the Drawer component while keeping other items at the top? I want to create a layout where navigation items are at the top and settings or user profile items are positioned at the bottom.

## Solution

Use the `style` property on individual Drawer items to position them at the bottom. By applying `position: 'absolute'` along with a `bottom` value and setting the `width: '100%'`, you can anchor specific items to the bottom of the Drawer.

The key steps are:

1. Add a `style` property to the items you want to position at the bottom
2. Set `position: 'absolute'` to take the item out of the normal flow
3. Use `bottom` to specify the distance from the bottom of the Drawer
4. Set `width: '100%'` to ensure the item spans the full width

Following is an example demonstrating this approach:

<demo metaUrl="knowledge-base/layout/drawer-display-items-on-bottom/" height="600"></demo>
