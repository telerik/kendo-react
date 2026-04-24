---
title: Virtualization
description: 'Get started with the KendoReact TreeList and learn how to enable its column virtualization.'
components: ["treelist"]
slug: virtual_columns_treelist
position: 7
---

# Column Virtualization

The KendoReact TreeList supports column virtualization.

To enable column virtualization, set the [`columnVirtualization`]({% slug api_treelist_treelistprops %}#toc-columnVirtualization) property. As a result, the columns outside the current visible aria of the TreeList will not be rendered and the rendering performance of the component will be improved.

In order for the column virtualization to work properly, configure the following options:

-   (Required) Set [`width`]({% slug api_treelist_treelistcolumnprops %}#toc-width) of each column.
-   (Required) Set `overflow: auto` and `width` in pixels through [`style`]({% slug api_treelist_treelistprops %}#toc-style) of the TreeList.
-   (Required) Set `{ style: { tableLayout: 'fixed' } }` through [`tableProps`]({% slug api_treelist_treelistprops %}#toc-tableprops) of the TreeList.

{% meta height:400 %}
{% embed_file column-virtualization/func/app.tsx preview %}
{% embed_file column-virtualization/func/main.tsx %}
{% endmeta %}

## Known Limitations

-   The column virtualization supports up to 1000 columns as the [colSpan limit is 1000](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td). As a workaround, a frozen(locked) column with no `field` and no `width` can be added after every 1000 columns as it divides the colspan between and after it.

## Suggested Links

-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
-   [API Index of the TreeList]({% slug api_treelist %})
