---
title: Reordering Columns
description: 'Get started with the KendoReact Grid which supports the reordering of columns by dragging the header cells.'
components: ['grid']
slug: reordering_columns_grid
position: 40
subject: Grid
tier: free
---

# Reordering Columns

The KendoReact Grid enables you to reorder its columns by dragging the header cells.

<CtaPanelOverview title="Use the React @Subject for Free" message="You can use the free feature set of the @Subject in production, with no sign-up or license required. @Subject is part of KendoReact, an enterprise-grade UI library with 120+ @FreemiumShortLink and premium components. To try out the @Subject premium functionality, @StartTrialLink."></CtaPanelOverview>

To enable column reordering, set the [`reorderable`]({% slug api_grid_gridprops %}#toc-reorderable) property of the Grid to `true`.

> By default, the column-reordering feature is disabled.

The following example demonstrates column reordering, where users can drag and drop header cells to change the column order.

{% meta height:480 %}
{% embed_file reordering/func/app.tsx preview %}
{% embed_file reordering/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
