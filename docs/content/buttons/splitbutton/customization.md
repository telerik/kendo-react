---
title: Customization
description: 'Customize the popup and the items of the KendoReact SplitButton in React projects.'
components: ["splitbutton"]
slug: customization_splitbutton
position: 4
---

# Customization

The SplitButton provides options for customizing the behavior of the popup and the rendering of the popup items.

The component enables you to:

-   [Visually enhance the popup](#toc-popup-behavior)
-   [Overriding the default item rendering](#toc-items-rendering)

## Popup Behavior

To configure the behavior of the popup, use the [`animate`]({% slug api_buttons_buttonspopupsettings %}#toc-animate) and [`popupClass`]({% slug api_buttons_buttonspopupsettings %}#toc-popupclass) settings.

{% meta height:200 %}
{% embed_file splitbutton/customization/popup/func/app.tsx preview %}
{% embed_file splitbutton/customization/popup/func/main.tsx %}
{% embed_file splitbutton/customization/popup/func/styles.css %}
{% endmeta %}

## Items Rendering

To override the default rendering of all popup items, use the [`itemRender`]({% slug api_buttons_splitbuttonprops %}#toc-itemRender) property of the SplitButton. You can override the rendering of an individual item through its [`render`]({% slug api_buttons_splitbuttonitemprops %}#toc-render) property.

{% meta height:200 %}
{% embed_file splitbutton/customization/items/func/app.tsx preview %}
{% embed_file splitbutton/customization/items/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the SplitButton]({% slug api_buttons_splitbuttonprops %})
