---
title: Clipboard
description: 'Get started with the clipboard functionality of the KendoReact Data Grid and use it to copy, cut and paste cell data from and to the Data Grid.'
components: ["datagrid"]
slug: clipboard_grid
position: 20
tier: premium
subject: Grid Clipboard feature
---

# KendoReact Data Grid Clipboard

You can perform all standard clipboard operations from and to the Data Grid by using the system clipboard.

<CtaPanelOverview></CtaPanelOverview>

The Data Grid clipboard supports the following keyboard shortcuts:

| SHORTCUT                 | DESCRIPTION                       |
| :----------------------- | :-------------------------------- |
| `Ctrl/Cmd (for Mac) + C` | Copy selected or focused content. |
| `Ctrl/Cmd (for Mac) + X` | Cut selected or focused content.  |
| `Ctrl/Cmd (for Mac) + V` | Paste the clipboard content.      |

To enable the built-in clipboard feature:

1. Enable the [selection](slug:selection_grid) feature of the Data Grid and handle its built in `select` state.
1. Enable the [`clipboard`](slug:api_grid_gridprops#toc-clipboad) property to enable the clipboard copy, cut and paste operations.
1. Handle the [`onClipboard`](slug:api_grid_gridprops#toc-clipboad#onclipboard) function and use the [`populateClipboardData`](slug:api_data-tools_populateclipboarddata) function to update the Data Grid data as necessary by using the available copied cells.

As a result, the Grid allows you to:

-   Copy/paste/cut a single cell or row
-   Copy/paste/cut multiple cells or rows
-   Copy/paste/cut a range of cells or rows by dragging

The [`populateClipboardData`](slug:api_data-tools_populateclipboarddata) function populates the clipboard data. It takes the [`ClipboardDataEvent`](slug:api_data-tools_clipboarddataevent) event arguments, the current data loaded in the Data Grid and the selection state, and returns the [ClipboardData](slug:api_data-tools_clipboarddata) containing the collection of copied and pasted items.

In case you want to disable any of the copy/paste/cut operations, you can determine the current action type based on the `event.type` value of the `ClipboardDataEvent` object.

The following example demonstrates how to cut or copy selected row(s) and paste the copied content in the same Data Grid or in Microsoft Excel.

{% meta height:720 %}
{% embed_file clipboard/clipboard-basic/app.tsx preview %}
{% embed_file clipboard/clipboard-basic/main.tsx %}
{% endmeta %}

## Clipboard Settings

The content of the Data Grid is copied in an Excel compatible format where the cells are separated by a tab character (`\t`) and the rows are separated by new line (`\n`) character. You can customize the default clipboard behavior by using the following clipboard settings:

-   [`cellDelimitter`](slug:api_data-tools_clipboardsettings#toc-celldelimiter)&mdash;Determines what is the delimiter used to separate the cells. Defaults to `'\t'`.
-   [`copyHeaders`](slug:api_data-tools_clipboardsettings#toc-copyheaders)&mdash;Determines whether column titles or field names will be included in the generated data during the `copy` and `cut` actions. Defaults to `false`.
-   [`newLineDelimiter`](slug:api_data-tools_clipboardsettings#toc-newlinedelimiter)&mdash;Determines what is the delimiter used to separate the rows. Defaults to `'\r\n'`.

The following example illustrates how by activating the `copyHeaders` prop you gain the ability to copy the headers of the selected cells, regardless of whether the headers are included in the current selection. To test this functionality copy a range of cells from the Data Grid below and paste them in Microsoft Excel:

{% meta height:550 %}
{% embed_file clipboard/clipboard-headers/app.tsx preview %}
{% embed_file clipboard/clipboard-headers/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_grid %})
-   [API Index of the Grid]({% slug api_grid %})
-   [PopulateClipboard]({% slug api_data-tools_populateclipboardargs %})
