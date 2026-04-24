---
title: Overview
description: 'Get started with the KendoKendoReact Data Grid and learn how to configure any of its three layout modes - scrollable, non-scrollable and virtual scrolling.'
components: ["datagrid"]
slug: scrollmodes_grid
position: 1
---

# Scroll Modes Overview

The KendoReact Data Grid provides options for rendering its content in a [scrollable](#scrollable-mode) or [non-scrollable](#non-scrollable-mode) mode by configuring its `scrollable` property.

You can also enable the virtual scroll mode of the Grid by setting [`scrollable`]({% slug api_grid_gridprops %}#toc-scrollable) to `virtual`. For more information, refer to the article on [virtual scrolling]({% slug virtualscrolling_grid %}).

<CtaPanelOverview></CtaPanelOverview>

## Scrollable Mode

When scrolling is enabled, the content of the Grid is rendered as tables&mdash;one for the header area, another one for the scrollable data area, and a third one for the footer area. This behavior ensures that the header and footer areas of the Grid are always visible while the user scrolls vertically.

> Starting with KendoReact 11.0.0, the default `scrollable` mode of the KendoKendoReact Data Grid is set to `virtual` for developers with an active license.

### Getting Started

The scrollable mode of the Grid is enabled by default. You can configure the scrollable behavior through the [`scrollable`]({% slug api_grid_gridprops %}#toc-scrollable) option which also requires you to set the height of the Grid through its [`style`]({% slug api_grid_gridprops %}#toc-style) property.

### Conditional Scrolling

By configuring the `style.maxHeight` property, you can set the Grid in scrollable mode only when its rendered content exceeds certain height limits. If the content does not exceed the set maximum height, the height of the Grid will be the same as the height of its content.

### Infinite Scrolling

After the user scrolls to the end of the page, the Grid enables you to load more records by appending additional pages of data on demand. To implement the infinite scrolling feature, use the [`onScroll`]({% slug api_grid_gridprops %}#toc-onScroll) event and add more data once the user is near to the bottom of the Grid.

The following example demonstrates how to dynamically add data to the Grid while the user is scrolling.

{% meta height:510 %}
{% embed_file infinite-scrolling/func/app.tsx preview %}
{% embed_file infinite-scrolling/func/main.tsx %}
{% endmeta %}

## Non-Scrollable Mode

When the non-scrollable mode is enabled, the Grid renders its data as a single table and the scrollbar is not displayed. To configure the non-scrollable mode, set [`scrollable`]({% slug api_grid_gridprops %}#toc-scrollable) to `none`.

## Suggested Links

-   [Virtual Scrolling]({% slug virtualscrolling_grid %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
-   [API of the HTML Drag-and-Drop Functionality](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
