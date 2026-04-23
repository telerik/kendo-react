---
title: Widths
description: 'Get started with the KendoReact TreeList and set up the widths of its columns.'
components: ["treelist"]
slug: width_treelist
position: 1
---

# Column Widths

By default, the KendoReact TreeList is responsive and has no fix width&mdash;the component behaves like an HTML table and expands to the width of the parent element.

## Getting Started

By default, the TreeList will equally divide its width between its columns and it will responsively expand or shrink them when the width of its parent container is changed.

-   To set the column widths of the TreeList, use the [`width`]({% slug api_treelist_treelistcolumnprops %}#toc-width) property of the `TreeListColumnProps`. The width values will be passed to the HTML `col` elements of the underlying table element as they are.
-   To set the `width` of the TreeList `wrapper` element, use the TreeList `style` property.
-   To set the width and any other property of the underlying HTML table, use the `tableProps` property of the TreeList which allows you to quickly resize the TreeList in the desired units.

## Setting Column Widths in Percentage

To set the TreeList column widths in percentage, set the width values through the [`width`]({% slug api_treelist_treelistcolumnprops %}#toc-width) property of the `TreeListColumnProps`. The width of the `wrapper` and `table` HTML block elements of the TreeList defaults to `auto` and the browser will expand them according to the available space. If your project requires you to limit the TreeList width, set the wrapper width through the TreeList [`style`]({% slug api_treelist_treelistprops %}#toc-style) property.

{% meta height:580 %}
{% embed_file column-width-percentage/func/app.tsx preview %}
{% embed_file column-width-percentage/func/main.tsx %}
{% endmeta %}

## Setting Fixed Column Width

To set the TreeList column widths in pixels, set the width values through the [`width`]({% slug api_treelist_treelistcolumnprops %}#toc-width) property of the `TreeListColumnProps`, and the `wrapper` and `table` HTML widths which will be the sum of the widths of all columns.

{% meta height:580 %}
{% embed_file column-width-fixed/func/app.tsx preview %}
{% embed_file column-width-fixed/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the width TreeList Column Prop]({% slug api_treelist_treelistcolumnprops %}#toc-width)
-   [API Reference of the style TreeList Prop]({% slug api_treelist_treelistprops %}#toc-style)
-   [API Reference of the tableProps TreeList Prop]({% slug api_treelist_treelistprops %}#toc-tableprops)
-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
