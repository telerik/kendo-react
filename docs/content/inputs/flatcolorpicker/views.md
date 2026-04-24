---
title: FlatColorPicker Views
description: 'Customize the KendoReact FlatColorPicker header or footer in React projects.'
components: ["flatcolorpicker"]
slug: views_flatcolorpicker
position: 4
tag: new
---

# FlatColorPicker Views

The FlatColorPicker enables you to configure its views through the [`views`]({% slug api_inputs_flatcolorpickerprops %}#toc-views) property. You can display a gradient view, palette view, or both. By default, both views will be rendered and the user can toggle between them by using the view toggle buttons rendered in the header of the component.

The following example demonstrates both FlatColorPicker views in action.

{% meta height:820 %}
{% embed_file flatcolorpicker/views/app.tsx preview %}
{% embed_file flatcolorpicker/views/main.tsx %}
{% endmeta %}

## Active View

When both the `gradient` and `palette` views are present, the initially active view of the FlatColorPicker can be set through the [`activeView`]({% slug api_inputs_flatcolorpickerprops %}#toc-activeview) property. By default, the `gradient` view is rendered as active.

The following example shows how to specify the initially active view.

{% meta height:500 %}
{% embed_file flatcolorpicker/active-view/app.tsx preview %}
{% embed_file flatcolorpicker/active-view/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the FlatColorPicker]({% slug api_inputs_flatcolorpicker %})
-   [Customizing the FlatColorPicker]({% slug customization_flatcolorpicker %})
