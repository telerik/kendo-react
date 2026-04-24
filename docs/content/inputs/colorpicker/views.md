---
title: Views
description: 'Customize the view options of the KendoReact ColorPicker in React projects.'
components: ["colorpicker"]
slug: views_colorpicker
position: 4
tag: updated
---

# ColorPicker Views

The ColorPicker enables you to configure its popup view through the [`views`]({% slug api_inputs_colorpickerprops %}#toc-views) property. You can display a gradient view, palette view, or both. By default, both views will be rendered, and the user can toggle between them by using the view toggle buttons rendered in the header of the popup.

The following example demonstrates both ColorPicker views in action.

{% meta height:550 %}
{% embed_file colorpicker/views/app.tsx preview %}
{% embed_file colorpicker/views/main.tsx %}
{% endmeta %}

## Active View

When both the `gradient` and `palette` views are present, the initially active view of the FlatColorPicker can be set through the [`activeView`]({% slug api_inputs_colorpickerprops %}#toc-activeview) property. By default, the `gradient` view is rendered as active.

The following example shows how to specify the initially active view.

{% meta height:470 %}
{% embed_file colorpicker/active-view/app.tsx preview %}
{% embed_file colorpicker/active-view/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ColorPicker]({% slug api_inputs_colorpickerprops %})
-   [Appearance of the ColorPicker]({% slug appearance_colorpicker %})
