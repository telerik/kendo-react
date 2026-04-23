---
title: Tabs
description: 'Instantiate and set the configuration options for the KendoReact TabStrip tabs in React projects.'
components: ["tabstrip"]
slug: tabs_tabstrip
position: 20
tag: updated
---

# Tabs

You can instantiate the TabStrip tabs by initializing them as `TabStripTab` components and use their corresponding properties.

The TabStrip provides configuration options for:

-   [Setting the titles of its tabs](#toc-titles)
-   [Displaying tabs on initial loading](#toc-tabs-on-initial-loading)
-   [Setting the tabs position](#tab-position)
-   [Setting the tabs alignment](#tab-alignment)
-   [Enabling and disabling its tabs](#toc-disabled-state)
-   [Implementing closable tabs](#toc-closable-tabs)

## Titles

You can handle the title of each TabStrip tab by using the [`title`]({% slug api_layout_tabstriptabprops %}#toc-title) attribute of the tab and render plain text in it.

{% meta height:150 %}
{% embed_file tabstrip/tabs/titles/func/app.tsx preview %}
{% embed_file tabstrip/tabs/titles/func/main.tsx %}
{% endmeta %}

## Tabs on Initial Loading

The TabStrip displays no tabs upon its initial loading. To change this behavior, set the [`selected`]({% slug api_layout_tabstripprops %}#toc-selected) property of the TabStrip component.

{% meta height:180 %}
{% embed_file tabstrip/tabs/initial/func/app.tsx preview %}
{% embed_file tabstrip/tabs/initial/func/main.tsx %}
{% endmeta %}

## Tab Position

The [`tabPosition`]({% slug api_layout_tabstripprops %}#toc-tabposition) property allows placing the `TabStripNavigation` on different positions around the content.

{% meta height:510 %}
{% embed_file tabstrip/position/func/app.tsx preview %}
{% embed_file tabstrip/position/func/main.tsx %}
{% endmeta %}

## Tab Alignment

The [`tabAlignment`]({% slug api_layout_tabstripprops %}#toc-tabalignment) property allows aligning the tabs to `start`, `center`, `end`, `justify`, or `stretched`.

{% meta height:510 %}
{% embed_file tabstrip/alignment/func/app.tsx preview %}
{% embed_file tabstrip/alignment/func/main.tsx %}
{% endmeta %}

## Disabled State

You can disable a specific TabStrip tab by setting the [`disabled`]({% slug api_layout_tabstriptabprops %}#toc-disabled) property to `true`.

{% meta height:200 %}
{% embed_file tabstrip/tabs/disabled/func/app.tsx preview %}
{% embed_file tabstrip/tabs/disabled/func/main.tsx %}
{% endmeta %}

## Closable Tabs

You can enable the user to close specific TabStrip tabs. The implementation of the closable tabs functionality requires you to use a custom component and render a title with a button for closing the tab.

{% meta height:200 %}
{% embed_file tabstrip/closable-tabs/func/app.tsx preview %}
{% embed_file tabstrip/closable-tabs/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TabStripTab Component]({% slug api_layout_tabstriptabprops %})
-   [API Reference of the Tabstrip]({% slug api_layout_tabstripprops %})
