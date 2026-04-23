---
title: Scrollable Tabs
description: 'Use the KendoReact TabStrip for TabStrip scrollable feature.'
components: ["tabstrip"]
slug: scrollable_tabstrip
position: 40
tag: updated
---

# Scrollable Tabs

The TabStrip allows you to scroll through its tabs when the tab list cannot fit in the component boundaries. It provides a rich API for customizing the scroll logic and the TabStrip appearance based on your preference.

## Setup

To enable the scrolling of the tab list, set the [`scrollable`]({% slug api_layout_tabstripprops %}#toc-scrollable) prop to true.

The TabStrip enables you to configure the following options:

-   `scrollButtons`&mdash;Allows specifying the scroll buttons visibility. The default value is `auto`.
-   `scrollButtonsPosition`&mdash;Sets the scroll buttons position according to the tab list. The default value is `split`.
-   `buttonScrollSpeed`&mdash;Sets the tab list scroll speed in pixels when clicking the scroll buttons. The default value is `100px`.
-   `prevButton`&mdash;Allows specifying a custom component for the `previous` scroll button.
-   `nextButton`&mdash;Allows specifying a custom component for the `next` scroll button.

The following example demonstrates a scrollable TabStrip in action.

{% meta height:240 %}
{% embed_file tabstrip/scrollable/func/app.tsx preview %}
{% embed_file tabstrip/scrollable/func/main.tsx %}
{% embed_file tabstrip/scrollable/func/tabs.ts %}
{% embed_file tabstrip/scrollable/func/styles.css %}
{% endmeta %}

## Configuring the Scroll Buttons Position

By default, the TabStrip renders its scroll buttons on both ends of the tab list. To customize this behavior, use the [`scrollButtonsPosition`]({% slug api_layout_tabstripprops %}#toc-scrollButtonsPosition) property of the TabStrip by passing the following values:

-   `split`(Default)&mdash;The scroll buttons will be rendered on both sides of the tab list.
-   `start`&mdash;The scroll buttons will be rendered prior to the tab list.
-   `end`&mdash;The scroll buttons will be rendered after the tab list.

The following example demonstrates this in action.

{% meta height:400 %}
{% embed_file tabstrip/scroll-buttons-position/func/app.tsx preview %}
{% embed_file tabstrip/scroll-buttons-position/func/main.tsx %}
{% embed_file tabstrip/scroll-buttons-position/func/tabs.ts %}
{% embed_file tabstrip/scroll-buttons-position/func/styles.css %}
{% endmeta %}

## Configuring the Scroll Buttons Visibility

You can configure the TabStrip to display scroll buttons in the tab list. To customize this behavior, use the [`scrollButtons`]({% slug api_layout_tabstripprops %}#toc-scrollButtons) property of the TabStrip. This property accepts the following values:

-   `auto`(Default)&mdash;The scroll buttons will be automatically shown if the tabs do not fit inside the TabStrip boundaries, and hidden otherwise.
-   `visible`&mdash;The scroll buttons will be constantly visible. If the tabs fit inside the TabStrip boundaries, the buttons will be disabled.
-   `hidden`&mdash;The scroll buttons won't be displayed but the scroll is still available.

The following example demonstrates this in action.

{% meta height:400 %}
{% embed_file tabstrip/scroll-buttons-visibility/func/app.tsx preview %}
{% embed_file tabstrip/scroll-buttons-visibility/func/main.tsx %}
{% embed_file tabstrip/scroll-buttons-visibility/func/tabs.ts %}
{% embed_file tabstrip/scroll-buttons-visibility/func/styles.css %}
{% endmeta %}

## Right-to-Left Support

The TabStrip allows you to change the direction of the content to right-to-left using its [`dir`]({% slug api_layout_tabstripprops %}#toc-dir) property.

{% meta height:240 %}
{% embed_file tabstrip/rtl/func/app.tsx preview %}
{% embed_file tabstrip/rtl/func/main.tsx %}
{% embed_file tabstrip/rtl/func/tabs.ts %}
{% embed_file tabstrip/rtl/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [API Reference of the TabStripTab Component]({% slug api_layout_tabstriptabprops %})
-   [API Reference of the Tabstrip]({% slug api_layout_tabstripprops %})
