---
title: Rendering modes
description: 'Learn about the rendering modes available in the TabStrip component and how to use them'
components: ["tabstrip"]
slug: rendering_modes_tabstrip
position: 45
---

# Rendering Modes

The TabStrip supports three types of rendering scenarios for its Tabs:

-   `on-demand`(default)&mdash;in this mode, only the content of the currently selected Tab is rendered in the DOM; if a new selection is made, the available content is destroyed.
-   `hybrid`&mdash;in this mode, the Tabs' content is handled similarly to the `on-demand` mode but the already rendered content is not removed from the DOM.
-   `pre-rendered`&mdash;in this mode, the content of all Tabs is rendered on TabStrip's initialization and persisted in the DOM no matter the current selection.

To configure the different rendering options, we should use the [renderAllContent]({% slug api_layout_tabstripprops %}#toc-renderallcontent) and [keepTabsMounted]({% slug api_layout_tabstripprops %}#toc-keeptabsmounted) properties. Below you can test each of the rendering scenarios:

-   [On-Demand Tabs Rendering](#toc-on-demand-tabs-rendering)
-   [Hybrid Tabs Rendering](#toc-hybrid-tabs-rendering)
-   [Pre-rendering Tabs](#toc-pre-rendering-tabs)

> To see the difference between the rendering modes, inspect the DOM in each of the following examples and compare the available content.

## On-Demand Tabs Rendering

By default, the TabStrip works in `on-demand` mode, meaning that only the content of the currently selected Tab is available in the DOM tree.

The following example doesn't have specific rendering configuration and demonstrates the default on-demand mode in action.

{% meta height:300 %}
{% embed_file tabstrip/overview/basic/func/app.tsx preview %}
{% embed_file tabstrip/overview/basic/func/main.tsx %}
{% endmeta %}

## Hybrid Tabs Rendering

To enable the persistence of the content of the already rendered Tabs, we need to use the [keepTabsMounted]({% slug api_layout_tabstripprops %}#toc-keeptabsmounted) property.

Below you will find an example in which the `keepTabsMounted` prop is set to `true`. In this example, once a Tab is activated, its content remains in the DOM, no matter the further interaction with the component.

{% meta height:300 %}
{% embed_file tabstrip/hybrid-rendering/func/app.tsx preview %}
{% embed_file tabstrip/hybrid-rendering/func/main.tsx %}
{% endmeta %}

## Pre-rendering Tabs

If your scenario requires the default rendering of all TabStrip Tabs by default, you need to set the [renderAllContent]({% slug api_layout_tabstripprops %}#toc-renderallcontent) property to `true` as demonstrated in the following example.

{% meta height:300 %}
{% embed_file tabstrip/pre-rendering/func/app.tsx preview %}
{% embed_file tabstrip/pre-rendering/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TabStripTab Component]({% slug api_layout_tabstriptabprops %})
-   [API Reference of the Tabstrip]({% slug api_layout_tabstripprops %})
