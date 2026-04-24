---
title: Spanning Columns
description: 'Get started with the KendoKendoReact Data Grid supporting the spanning of columns'
components: ["datagrid"]
slug: spanned_columns_grid
position: 30
subject: Data Grid
tier: free
---

# Spanning Columns

The KendoKendoReact Data Grid supports spanning row content across multiple cells while retaining individual header and footer cells.

<CtaPanelOverview title="Use the React @Subject for Free" message="You can use the free feature set of the @Subject in production, with no sign-up or license required. @Subject is part of KendoReact, an enterprise-grade UI library with 120+ @FreemiumShortLink and premium components. To try out the @Subject premium functionality, @StartTrialLink."></CtaPanelOverview>

This can be achieved by easily by implementing a [`colSpan`](slug:api_grid_gridcolumnprops#colspan) callback to control the visibility of the chosen column. It will make the row content to span over multiple cells.

In the sample below, the `colSpan` prop is configured for the **Product Name** column which will be spanned to the **Category Name** one.

{% meta height:480 %}
{% embed_file colspan/func/app.tsx preview %}
{% embed_file colspan/func/main.tsx %}
{% endmeta %}

## Spanned Column Headers

You can also use the `colSpan` prop to span multiple column headers, as demonstrated in the sample below.

{% meta height:480 %}
{% embed_file colspan-headers/func/app.tsx preview %}
{% embed_file colspan-headers/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [GridColumnProps]({% slug api_grid_gridcolumnprops %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
