---
title: Items
description: "Learn more about the KendoReact ActionSheet items and how to configure them based on specific project requirements."
components: ["actionsheet"]
slug: items_actionsheet
position: 1
---

# Items

The ActionSheet items are highly customizable elements that allow you to control their look and feel depending on the use case.

To define the ActionSheet options, provide an [`ActionSheetItem`]({% slug api_layout_actionsheetitem %}) collection to the [`items`]({% slug api_layout_actionsheetprops %}#toc-items) property of the component.

{% meta height:250 %}
{% embed_file actionsheet/items/func/app.tsx preview %}
{% embed_file actionsheet/items/func/main.tsx %}
{% endmeta %}

## Setting Title and Description

To configure the item text or any additional details, use the [`title`]({% slug api_layout_actionsheetitemprops %}#toc-title) and [`description`]({% slug api_layout_actionsheetitemprops %}#toc-description) properties of the `ActionSheetItem` object.

{% meta height:250 %}
{% embed_file actionsheet/items/title/app.tsx preview %}
{% embed_file actionsheet/items/title/main.tsx %}
{% endmeta %}

## Defining Groups

To indicate a group of items with similar functionality, set the [`group`]({% slug api_layout_actionsheetitemprops %}#toc-group) property of the `ActionSheetItem` object to `top` or `bottom`. The ActionSheet will visually separate the two groups by rendering a separator line between them.

The following example demonstrates the ActionSheet groups in action.

{% meta height:250 %}
{% embed_file actionsheet/items/groups/app.tsx preview %}
{% embed_file actionsheet/items/groups/main.tsx %}
{% endmeta %}

## Setting Icons

You can enhance the ActionSheet item content by adding icons. Set the [`icon`]({% slug api_layout_actionsheetitemprops %}#toc-icon) property of the `ActionSheetItem` object to take full control over the visibility of the icons.

The following example demonstrates the icon property in action.

{% meta height:350 %}
{% embed_file actionsheet/items/icons/app.tsx preview %}
{% embed_file actionsheet/items/icons/main.tsx %}
{% endmeta %}

## Disabling Items

To disable certain items, set the [`disabled`]({% slug api_layout_actionsheetitemprops %}#toc-disabled) property of the `ActionSheetItem` to `true`.

The following example demonstrates the disabled state of the ActionSheet items.

{% meta height:350 %}
{% embed_file actionsheet/items/disabling/app.tsx preview %}
{% embed_file actionsheet/items/disabling/main.tsx %}
{% endmeta %}


## Styling Items

Some scenarios require further customizations of the items' layout. Use the [`className`]({% slug api_layout_actionsheetitemprops %}#toc-className) and [`style`]({% slug api_layout_actionsheetitemprops %}#toc-style) options of the `ActionSheetItem` object to change the layout of the options.

The following example demonstrates the `className` and `style` properties in action.

{% meta height:290 %}
{% embed_file actionsheet/items/styling/app.tsx preview %}
{% embed_file actionsheet/items/styling/main.tsx %}
{% endmeta %}

## Suggested Links

* [API Reference of the ActionSheet]({% slug api_layout_actionsheet %})
* [API Reference of the ActionSheetItem]({% slug api_layout_actionsheetitem %})
