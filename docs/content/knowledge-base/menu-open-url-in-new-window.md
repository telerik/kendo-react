---
title:  Open URL in a new window when clicking on a KendoReact Menu item
description: Learn how to open an URL in a new window when clicking on a KendoReact Menu item
type: how-to
page_title: How to open an URL in a new window when clicking on a KendoReact Menu item
slug: menu-open-url-in-new-window
tags: menu,url,open,window
res_type: kb
category: knowledge-base
components: ["menu"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>12.0.2</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Menu</td>
		</tr>
	</tbody>
</table>

## Description

I want to open the URL from a Menu item in a new window.

## Solution

To customize the default behavior of the Menu and how it handles URL set in the `MenuItem`, define a custom [linkRender]({% slug api_layout_menuprops %}#toc-linkrender) for the Menu. Within the custom `linkRender`, conditionally render either an anchor element or a `SPAN`, based on the `props.url` value. In the custom anchor element, set the `href` and add `onClick` handler, where you can stop the propagation of the click event and manually open the URL from the `href` in new window.

The following example demonstrates this approach in action:

{% meta height:150 %}
{% embed_file menu/menu-open-url-in-new-window/app.tsx preview %}
{% embed_file menu/menu-open-url-in-new-window/main.tsx %}
{% endmeta %}

## See Also

-   [KendoReact Menu Overview](slug:overview_menu)
-   [Custom Rendering](slug:rendering_menu)
