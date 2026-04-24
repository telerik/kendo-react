---
title: Reordering
description: 'Get started with the KendoReact Gantt which supports the reordering of columns by dragging the header cells.'
components: ["gantt"]
slug: reordering_columns_gantt
position: 5
---

# Reordering

The KendoReact Gantt enables you to reorder its columns by dragging the header cells.

To enable column reordering, set the [`reorderable`]({% slug api_gantt_ganttprops %}#toc-reorderable) property to `true` and update the Gantt [`columns`]({% slug api_gantt_ganttprops %}#toc-columns) collection using [`onColumnReorder`]({% slug api_gantt_ganttprops %}#toc-oncolumnreorder) event.

{% meta height:660 %}
{% embed_file reordering/func/app.tsx preview %}
{% embed_file reordering/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Gantt](slug://overview_gantt)
-   [API Reference of the Gantt Column]({% slug api_gantt_ganttcolumnprops %})
-   [API Reference of the Gantt]({% slug api_gantt_ganttprops %})
