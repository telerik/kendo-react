---
title: Customization
description: 'Customize the PanelBar and the PanelBarItem components by using the utilities function, declaratively render something or change the add a custom property'
components: ["panelbar"]
slug: customization_panelbar
position: 7
---

# Customization

You can customize the behavior of the PanelBar depending on the specific requirements of your React project.

The PanelBar enables you to render:

-   [Collections](#toc-collections) by using the `PanelBarUtils` utility functions.
-   [Custom elements](#toc-declaratively-initialized-items) which are passed to the `PanelBarItem` as a `children` property.
-   [PanelBar items with custom properties](#toc-custom-properties) and identify them when the user interact with it.

## Collections

You can map a collection to the `PanelBarItem` components by using the [`mapItemsToComponents`]({% slug api_layout_panelbarutils %}#toc-mapitemstocomponents) utility function.

> -   If you present a `children` property, the PanelBar will render a recursive map until it reaches an object that contains neither a content, nor a `children` property.
> -   If you present a content property, the property will be prioritized and directly rendered inside the `PanelBarItem` component.

{% meta height:300 %}
{% embed_file panelbar/custom/collections/func/app.tsx preview %}
{% embed_file panelbar/custom/collections/func/main.tsx %}
{% embed_file panelbar/custom/collections/func/styles.css %}
{% endmeta %}

## Declaratively Initialized Items

The following example demonstrates how to instantiate PanelBar items by using the declarative approach.

{% meta height:210 %}
{% embed_file panelbar/custom/declarative/func/app.tsx preview %}
{% embed_file panelbar/custom/declarative/func/main.tsx %}
{% endmeta %}

## Custom Properties

The PanelBarItem allows you to pass custom properties to better identify item interaction.

{% meta height:300 %}
{% embed_file panelbar/custom/custom/func/app.tsx preview %}
{% embed_file panelbar/custom/custom/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
-   [API Reference of the PanelBarItem]({% slug api_layout_panelbaritemprops %})
