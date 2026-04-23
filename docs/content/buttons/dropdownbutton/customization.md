---
title: Customization
description: 'Customize the popup and the popup items of the KendoReact DropDownButton in React projects.'
components: ["dropdownbutton"]
slug: customization_dropdownbutton
position: 4
---

# Customization

The DropDownButton provides options for customizing the rendering and behavior of its popup and popup items.

The component enables you to:

-   [Visually enhance the popup](#toc-popup-behavior)
-   [Overriding the default item rendering](#toc-items-rendering)

## Popup Behavior

To configure the behavior of the popup, use the [`animate`]({% slug api_buttons_buttonspopupsettings %}#toc-animate) and [`popupClass`]({% slug api_buttons_buttonspopupsettings %}#toc-popupclass) settings.

{% meta height:250 %}
{% embed_file dropdownbutton/customization/popup/func/app.tsx preview %}
{% embed_file dropdownbutton/customization/popup/func/main.tsx %}
{% embed_file dropdownbutton/customization/popup/func/styles.css %}
{% endmeta %}

## Items Rendering

To override the default rendering of all popup items, use the [`itemRender`]({% slug api_buttons_dropdownbuttonprops %}#toc-itemRender) property of the DropDownButton. You can override the rendering of an individual item through its [`render`]({% slug api_buttons_dropdownbuttonitemprops %}#toc-render) property.

{% meta height:200  %}
{% embed_file dropdownbutton/customization/items/func/app.tsx preview %}
{% embed_file dropdownbutton/customization/items/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DropDownButton]({% slug api_buttons_dropdownbuttonprops %})
