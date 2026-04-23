---
title: Customization
description: 'Customize the KendoReact Chip in React projects.'
components: ["chip"]
slug: customization_chip
position: 5
---

# Customization

The Chip component provides the following options for customizing its look and feel:

-   [Display avatar, custom classes and icons](#display-avatar-custom-classes-and-icons)
-   [Select icon](#custom-select-icon)
-   [Custom remove icon](#custom-remove-icon)
-   [Custom content](#custom-content)

## Display avatar, custom classes and icons

You can specify a display avatar or custom classes, icons by using the [`icon`]({% slug api_buttons_chipprops %}#toc-icon) property.

{% meta height:180 %}
{% embed_file chip/customization/icon/func/app.tsx preview %}
{% embed_file chip/customization/icon/func/main.tsx %}
{% endmeta %}

## Custom Select Icon

You can specify a select icon by using the [`selectedIcon`]({% slug api_buttons_chipprops %}#toc-selectedIcon) property.

{% meta height:130 %}
{% embed_file chip/customization/select-icon/func/app.tsx preview %}
{% embed_file chip/customization/select-icon/func/main.tsx %}
{% endmeta %}

## Custom Remove Icon

You can specify a custom remove icon by using the [`removeIcon`]({% slug api_buttons_chipprops %}#toc-removeIcon) property. You should also allow the Chip to be removable by setting the [`removable`]({% slug api_buttons_chipprops %}#toc-removable) property to `true` in order to allow the vizualization of the custom `removeIcon`.

{% meta height:130 %}
{% embed_file chip/customization/remove-icon/func/app.tsx preview %}
{% embed_file chip/customization/remove-icon/func/main.tsx %}
{% endmeta %}

## Custom Content

You can also define any custom content as children. For example:

{% meta height:130 %}
{% embed_file chip/customization/custom-content/func/app.tsx preview %}
{% embed_file chip/customization/custom-content/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ChipList]({% slug api_buttons_chiplistprops %})
