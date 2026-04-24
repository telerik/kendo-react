---
title: Selection
description: 'Get started with the React TreeList by KendoReact supporting selection of a single row or multiple rows.'
components: ["treelist"]
slug: selection_treelist
position: 60
---

# Selection

The TreeList enables the user to select single or multiple cells and rows. It also provides default selection implementation from the `getSelectedState` utility function.

## Getting Started

The TreeList selection can be enabled by:

1. Set the [`selectable`]({% slug api_treelist_treelistprops %}#toc-selectable) option.
1. Set the[`selectedField`]({% slug api_treelist_treelistprops %}#toc-selectedfield) option.
1. Use the [`onSelectionChange`]({% slug api_treelist_treelistselectionchangeevent %}) event.
1. Optionally use the [`getSelectedState`]({% slug api_data-tools_getselectedstate %}) utility function for default selection behavior.

As a result, the TreeList allows you to:

-   Select single cell or row
-   Select multiple cells or rows
-   Select range of cells or rows by dragging

The `selectedField` option represents a field inside the data collection which determines the rows that will render as selected.

{% meta height:690 %}
{% embed_file selection-basic/func/app.tsx preview %}
{% embed_file selection-basic/func/main.tsx %}
{% endmeta %}

## Customizing the Selection

The TreeList provides both checkbox and row-click selection options which can be applied to single or multiple records.

The checkbox selection enables selection upon a checkbox click and implements a master checkbox in the header that selects and deselects all items.

To configure the checkbox selection:

1. Set a selection column by setting the `field` option and passing the `select` value to `field`.
1. Handle the [`TreeListSelectionChangeEvent`]({% slug api_treelist_treelistselectionchangeevent %}) and the [`onHeaderSelectionChange`]({% slug api_treelist_treelistheaderselectionchangeevent %}) events which will be fired once the user clicks a checkbox.
1. Depending on the selected state of an item, set the [`selectedField`]({% slug api_treelist_treelistprops %}#toc-selectedfield) value.

The following example demonstrates how to implement multiple selection both on row click and with checkboxes.

{% meta height:580 %}
{% embed_file selection/func/app.tsx preview %}
{% embed_file selection/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
