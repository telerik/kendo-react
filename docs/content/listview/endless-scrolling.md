---
title: Endless Scrolling
description: 'Get started with the endless scrolling functionality of the KendoReact ListView and learn how to load more items dynamically.'
components: ["listview"]
slug: endless_scrolling_listview
position: 3
---

# Endless Scrolling

The KendoReact ListView can achieve `endless scrolling` allowing to dynamically display large collection of items.

## Basic Usage

The following example demonstrates the ListView that dynamically adds more items while the user scrolls, using the [onScroll event]({% slug api_listview_listviewprops %}#toc-onScroll).

{% meta height:600 %}
{% embed_file endless-scrolling/func/app.tsx preview %}
{% embed_file endless-scrolling/func/main.tsx %}
{% embed_file endless-scrolling/func/destinations.json %}
{% endmeta %}

## Suggested Links

-   [ListView Paging]({% slug paging_listview %})
-   [API Reference of the ListView]({% slug api_listview_listviewprops %})
