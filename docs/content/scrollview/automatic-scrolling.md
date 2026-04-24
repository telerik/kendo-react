---
title: Automatic Scrolling
description: "Enable or disable the built-in automatic scroll or configure it's default interval of the Kendo UI ScrollView in React projects."
components: ["scrollview"]
slug: automatic_scrolling_scrollview
position: 5
---

# Automatic Scrolling

To implement an automatic scrolling, use the [`automaticViewChange`]({% slug api_scrollview_scrollviewprops %}#toc-automaticviewchange) property of the ScrollView. By default, `automaticViewChange` is set to `true`.

{% meta height:460 %}
{% embed_file automatic-scrolling/func/app.tsx preview %}
{% embed_file automatic-scrolling/func/main.tsx %}
{% endmeta %}

## Configure Automatic Scrolling Interval

The ScrollView allows you to configure the view change interval via [`automaticViewChangeInterval`]({% slug api_scrollview_scrollviewprops %}#toc-automaticviewchangeinterval). By default, the interval is `5000` milliseconds.

{% meta height:460 %}
{% embed_file automatic-interval/func/app.tsx preview %}
{% embed_file automatic-interval/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ScrollView]({% slug api_scrollview_scrollview %})
-   [API Reference of the ScrollViewProps]({% slug api_scrollview_scrollview %})
