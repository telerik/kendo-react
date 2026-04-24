---
title: Customization
description: 'Customize the appearance of the KendoReact SvgIcon component in React projects.'
components: ["svgicon"]
slug: customization_svgicon
position: 3
---

# Custom SVG Icons

The SvgIcon component allows you to display custom SVG icons (not available in the KendoReact default icons set). You can provide the inner SVG elements as [`children`]({% slug api_common_svgiconprops %}#toc-children) to the SvgIcon. SVG element has default viewBox set to `0 0 24 24`. This can be customized with the [`viewBox`]({% slug api_common_svgiconprops %}#viewBox) property.

> Custom SVG icons also allow setting all predefined appearance options such as different sizes, theme colors and flipping.

{% meta height:170 %}
{% embed_file svg-icon/custom/func/app.tsx preview %}
{% embed_file svg-icon/custom/func/main.tsx %}
{% endmeta %}

## Built-in SVG Icons customization

Using the `IconsContext.Provider` you can also customize the SVG icons which are already embedded into the components. In the example below you can see how to replace the arrow icon of the SplitButton component with:

-   an icon from the _@progress/kendo-svg-icons_ package
-   a custom SVG object
-   a FontAwesome icon

{% meta height:170 %}
{% embed_file svg-icon/built-in-icons/app.tsx preview %}
{% embed_file svg-icon/built-in-icons/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the SvgIcon]({% slug api_common_svgicon %})
-   [API Reference of the SvgIconProps]({% slug api_common_svgiconprops %})
