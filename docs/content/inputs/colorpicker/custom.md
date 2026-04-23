---
title: Custom ColorPicker
description: 'Customize the rendering, columns, tile sizes, and color palettes of the KendoReact ColorPicker in React projects.'
components: ["colorpicker"]
slug: customizecolorpicker_colorpicker
position: 8
---

# Custom ColorPicker

The ColorPicker enables you to customize its appearance.

The component supports the following options:

-   [Customizing the palette popup](#toc-customizing-the-palette-popup)
-   [Customizing the gradient popup](#toc-customizing-the-gradient-popup)
-   [Displaying KendoReact icons in the button](#toc-displaying-kendoreact-icons)
-   [Displaying custom icons in the button](#toc-displaying-custom-icons)

## Customizing the Palette Popup

To specify the rendering, columns, and tile sizes of the ColorPicker, and to customize the color formats of its palette, use the [`paletteSettings`]({% slug api_inputs_colorpickerpalettesettings %}) option.

{% meta height:300 %}
{% embed_file colorpicker/custom/palette/func/app.tsx preview %}
{% embed_file colorpicker/custom/palette/func/main.tsx %}
{% endmeta %}

## Customizing the Gradient Popup

To customize the gradient options of the ColorPicker, use the [`gradientSettings`]({% slug api_inputs_colorpickergradientsettings %}) configuration.

The following example demonstrates how to specify if the opacity slider of the ColorGradient will be displayed.

{% meta height:400 %}
{% embed_file colorpicker/custom/gradient/func/app.tsx preview %}
{% embed_file colorpicker/custom/gradient/func/main.tsx %}
{% endmeta %}

## Displaying KendoReact Icons

To display an [existing KendoReact icon]({% slug icons %}) in the ColorPicker button, provide the name of that icon without the `k-icon` class and the `k-i-` prefix to the `icon` property of the component. For example, instead of `k-icon k-i-edit-tools`, add `edit-tools`.

{% meta height:400 %}
{% embed_file colorpicker/custom/kendo-icons/func/app.tsx preview %}
{% embed_file colorpicker/custom/kendo-icons/func/main.tsx %}
{% endmeta %}

## Displaying Custom Icons

To display a custom icon in the ColorPicker button, provide the full CSS class name of the icon to the [`iconClassName`]({% slug api_inputs_colorpickerprops %}#toc-iconclassname) property of the component.

{% meta height:400 %}
{% embed_file colorpicker/custom/custom-icons/func/app.tsx preview %}
{% embed_file colorpicker/custom/custom-icons/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ColorPicker]({% slug api_inputs_colorpickerprops %})
