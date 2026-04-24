---
title: Appearance
description: 'Add alternative styling options to the KendoReact ChipList in React projects.'
components: ["chiplist"]
slug: appearance_chiplist
position: 6
---

# Appearance

The ChipList provides a predefined set of appearance options.

Apart from the default vision of the ChipList, these alternative styling options enable you to configure each individual aspect of the appearance of a ChipList.

-   [`size`]({% slug api_buttons_chiplistprops %}#toc-size)

The following example showcases the different sizes in action:

{% meta height:100 %}
{% embed_file chiplist/appearance/func/app.tsx preview %}
{% embed_file chiplist/appearance/func/main.tsx %}
{% embed_file chiplist/appearance/func/styles.css %}
{% endmeta %}

You can also use the [`chip`]({% slug api_buttons_chiplistprops %}#toc-chip) prop to pass a `Chip` component and apply the following options:

-   [Border Radius](#chip-border-radius)
-   [Fill Mode](#chip-fill-mode)
-   [Theme Color](#chip-theme-color)
-   [SVG Icon](#chip-with-svg-icon)
-   [Icon](#chip-with-icon)

## Chip Fill Mode

Fill modes create a certain look-and-feel of the UI and also signify hierarchy between components of the same type. The Chip allows you to set different fill modes by using the [`fillMode`]({% slug api_buttons_chipprops %}#toc-fillmode) property.

{% meta height:100 %}
{% embed_file chiplist/appearance/fill-mode/app.tsx preview %}
{% embed_file chiplist/appearance/fill-mode/main.tsx %}
{% endmeta %}

## Chip Border Radius

The Chip provides the [`rounded`]({% slug api_buttons_chipprops %}#rounded) property that enables you to control how much `border radius` will apply to the rendered Chip.

{% meta height:100 %}
{% embed_file chiplist/appearance/border-radius/app.tsx preview %}
{% embed_file chiplist/appearance/border-radius/main.tsx %}
{% endmeta %}

## Chip with SVG icons

You can render an SVG icon through the [`svgIcon`]({% slug api_buttons_chipprops %}#toc-svgicon) property.

{% meta height:120 %}
{% embed_file chiplist/appearance/svg-icons/app.tsx preview %}
{% embed_file chiplist/appearance/svg-icons/main.tsx %}
{% endmeta %}

## Chip with Avatars

The Chip enables you to render an avatar through the [`avatar`]({% slug api_buttons_chipprops %}#toc-avatar) property.

{% meta height:120 %}
{% embed_file chiplist/appearance/avatar/app.tsx preview %}
{% embed_file chiplist/appearance/avatar/main.tsx %}
{% endmeta %}

## Chip with Icons

Font icons can be rendered through the [`icon`]({% slug api_buttons_chipprops %}#toc-icon) property.

{% meta height:120 %}
{% embed_file chiplist/appearance/icon/app.tsx preview %}
{% embed_file chiplist/appearance/icon/main.tsx %}
{% endmeta %}

## Chip Theme Color

The Chip allows you to set different theme colors by using the [`themeColor`]({% slug api_buttons_chipprops %}#toc-themecolor) property.

{% meta height:100 %}
{% embed_file chiplist/appearance/theme-color/app.tsx preview %}
{% embed_file chiplist/appearance/theme-color/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ChipList]({% slug api_buttons_chiplistprops %})
-   [Creating Custom Styles]({% slug themebuilder %})
