---
title: Appearance
description: 'Change the appearance of KendoReact Toolbar in a React project.'
components: ['toolbar']
slug: appearance_toolbar
position: 3
tag: updated
---

# Appearance

The KendoReact Toolbar allows selecting a predefined size and fill mode options that changes its appearance.

-   [Size](#size)
-   [Fill Mode](#fill-mode)

## Size

To change the default size of the Toolbar, set its [`size`]({% slug api_buttons_toolbarprops %}#toc-size) property which will change the padding of the Toolbar element. The available size options are:

-   `small`&mdash;Sets the padding of the component to 4px 4px.
-   `medium` (default)&mdash;Sets the padding of the component to 8px 8px.
-   `large`&mdash;Sets the padding of the component to 10px 10px.

The following example demonstrates how to define the Toolbar size:

{% meta height:210 %}
{% embed_file toolbar/size/app.tsx preview %}
{% embed_file toolbar/size/main.tsx %}
{% endmeta %}

## Fill Mode

To change the default fill mode of the Toolbar, set its [`fillMode`]({% slug api_buttons_toolbarprops %}#toc-fillMode) property. It accepts the following values:

-   `solid` (default)&mdash;Applies a `background` color and `solid borders`.
-   `flat`&mdash;Sets a `transparent background` and `solid bottom border`.
-   `outline`&mdash;Sets a `transparent background` and `solid borders`.

> The `fillMode` property only affects the appearance of the ToolBar component and does not propagate to the [`ToolBar tools`]({% slug content_toolbar %}). Each ToolBar tool has a dedicated `fillMode` property that can be defined individually.

The following example demonstrates how to define a fill mode only for the ToolBar and including the ToolBar tools.

{% meta height:610 %}
{% embed_file toolbar/fill-mode/app.tsx preview %}
{% embed_file toolbar/fill-mode/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ToolbarProps]({% slug api_buttons_toolbarprops %})
