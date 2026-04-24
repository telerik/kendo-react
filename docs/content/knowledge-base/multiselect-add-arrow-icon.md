---
title: Add an arrow icon to the MultiSelect
description: Learn how to add an arrow icon to the MultiSelect
type: how-to
page_title: Add an arrow icon to the MultiSelect - KendoReact MultiSelect
slug: multiselect-add-arrow-icon
tags: multiselect, arrow, icon, svg, font
res_type: kb
components: ["multiselect"]
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
			<td>Progress® KendoReact MultiSelect</td>
		</tr>
	</tbody>
</table>

## Description

I want to display a down arrow in the MultiSelect to make it clear that it expands when clicked.

## Solution

The recommended approach is to use the [`suffix`]({% slug api_dropdowns_multiselectprops %}#toc-suffix) prop of the MultiSelect, together with the `InputSuffix` wrapper, to render the desired `SvgIcon`.

The following example demonstrates this approach in action:

{% meta height:340 %}
{% embed_file multiselect/multiselect-add-arrow-icon/svg/app.tsx preview %}
{% embed_file multiselect/multiselect-add-arrow-icon/svg/main.tsx %}
{% endmeta %}

## Alternative Approach: Font Icons

If your project relies on font icons, you can use the following CSS that uses the MultiSelect class names as selectors and adds a font-icon using the content property:

```css
.k-multiselect .k-input-values:after {
	content: "\e006";
	font-family: "WebComponentsIcons";
	outline: 0;
	position: absolute;
	right: 20px;
}
```
Make sure that the `@progress/kendo-font-icons` CDN is loaded:

```html
<link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css" />
```

The following example demonstrates this approach in action:

{% meta height:320 %}
{% embed_file multiselect/multiselect-add-arrow-icon/font-icon/app.tsx preview %}
{% embed_file multiselect/multiselect-add-arrow-icon/font-icon/main.tsx %}
{% embed_file multiselect/multiselect-add-arrow-icon/font-icon/style.css %}
{% endmeta %}


## See Also

-   [KendoReact MultiSelect Overview](slug:overview_multiselect)
-   [Custom Rendering](slug:customrendering_multiselect)

