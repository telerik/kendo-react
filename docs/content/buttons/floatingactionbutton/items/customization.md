---
title: Customization
description: 'Customize the popup and the popup items of the KendoReact FloatingActionButton in React projects.'
components: ["floatingactionbutton"]
slug: customization_floatingactionbutton
position: 4
---

# Customization

The FloatingActionButton provides options for customizing the rendering and behavior of its popup and popup items.

The component enables you to:

-   [Visually enhance the popup](#toc-popup-behavior)
-   [Override the default items rendering](#toc-items-rendering)

## Popup Behavior

To configure the behavior of the popup, use the [`popupSettings`]({% slug api_buttons_floatingactionbuttonprops %}#toc-popupSettings) FloatingActionButton property. It exposes [`animate`]({% slug api_buttons_floatingactionbuttonpopupsettings %}#toc-animate) and [`popupClass`]({% slug api_buttons_floatingactionbuttonpopupsettings %}#toc-popupClass) settings.

{% meta height:270 %}
{% embed_file floatingactionbutton/items/popup-settings/func/app.tsx preview %}
{% embed_file floatingactionbutton/items/popup-settings/func/main.tsx %}
{% endmeta %}

## Items Rendering

To override the default rendering of all popup items, use the [`item`]({% slug api_buttons_floatingactionbuttonprops %}#toc-item) property of the FloatingActionButton.

{% meta height:270 %}
{% embed_file floatingactionbutton/items/custom-rendering/func/app.tsx preview %}
{% embed_file floatingactionbutton/items/custom-rendering/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the FloatingActionButton]({% slug api_buttons_floatingactionbutton %})
-   [API Reference of the FloatingActionButtonProps]({% slug api_buttons_floatingactionbuttonprops %})
-   [API Reference of the FloatingActionButtonItem]({% slug api_buttons_floatingactionbuttonitem %})
-   [API Reference of the FloatingActionButtonItemProps]({% slug api_buttons_floatingactionbuttonitemprops %})
