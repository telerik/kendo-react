---
title: Paging
description: 'Configure the paging options of the Kendo UI ScrollView in React projects.'
components: ["scrollview"]
slug: paging_scrollview
position: 3
---

# Paging

The ScrollView allows you to enable or disable its built-in paging functionality.

To control the paging, use the [`pageable`]({% slug api_scrollview_scrollviewprops %}#toc-pageable) property. By default, `pageable` is set to `true`.

{% meta height:560 %}
{% embed_file paging/func/app.tsx preview %}
{% embed_file paging/func/main.tsx %}
{% endmeta %}

## Pager Overlay

To add an overlay to the pager use the [`pagerOverlay`]({% slug api_scrollview_scrollviewprops %}#toc-pageroverlay) property. By default it is set to `none` and there is no overlay applied to the pager.

{% meta height:590 %}
{% embed_file pager-overlay/func/app.tsx preview %}
{% embed_file pager-overlay/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ScrollView]({% slug api_scrollview_scrollview %})
-   [API Reference of the ScrollViewProps]({% slug api_scrollview_scrollview %})
