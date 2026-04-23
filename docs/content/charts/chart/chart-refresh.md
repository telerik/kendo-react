---
title: Chart Refresh
description: 'Refresh KendoReact Chart only when needed.'
components: ["chart"]
slug: refresh_chart
position: 13
---

# KendoReact Chart Refresh

The KendoReact Chart will refresh each time the React state is updated. We can control this during the [onRefresh]({% slug api_charts_chartprops %}#toc-onrefresh) event and refresh it only when someting in the Chart has changed.

The following example demonstrates how to refresh the Chart only when its data has changed.

{% meta height:600 %}
{% embed_file chart/refresh/func/app.tsx preview %}
{% embed_file chart/refresh/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
