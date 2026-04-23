---
title: Column Virtualization
description: 'Get started with the KendoKendoReact Data Grid and learn how to enable column virtualization'
components: ["datagrid"]
slug: virtual_columns_grid
position: 30
---

# Column Virtualization

The KendoReact Data Grid supports column virtualization.

To enable it, set the [`columnVirtualization`]({% slug api_grid_gridprops %}#toc-columnVirtualization) property. As a result, the columns outside the current visible aria of the Grid will not be rendered and will improve the rendering performance.

To work properly, the column virtualization requires you to set the following configuration options:

-   (Required) [`width`]({% slug api_grid_gridcolumnprops %}#toc-width)&mdash;for each of the columns.
-   (Required) `width` through [`style`]({% slug api_grid_gridprops %}#toc-style) for the grid.

{% meta height:470 %}
{% embed_file column-virtualization/func/app.tsx preview %}
{% embed_file column-virtualization/func/main.tsx %}
{% endmeta %}

# Multi-Column Headers

The KendoReact Data Grid column virtualization supports multi-column headers.

{% meta height:460 %}
{% embed_file column-virtualization-headers/func/app.tsx preview %}
{% embed_file column-virtualization-headers/func/main.tsx %}
{% endmeta %}

## Known Limitations

-   The column virtualization supports up to 1000 columns as the [colSpan limit is 1000](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td). As a workaround, a frozen(locked) column with no `field` and no `width` can be added after every 1000 columns as it divides the colspan between and after it.

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
