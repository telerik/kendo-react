---
title: Sheet Resizing
description: 'Get started with the KendoReact Spreadsheet and learn how to change the size of the sheet.'
components: ["spreadsheet"]
slug: resize_spreadsheet
position: 40
---

# Sheet Resizing

The Spreadsheet [Sheet]({% slug api_spreadsheet_spreadsheetoptions %}) exposes a `resize` method that allows you to change the number of the rows and columns in the current sheet.

By default, the sheet automatically resizes after the user pastes more data than the current sheet size allows for and exposes flexible behavior when the user adds or deletes columns and rows from the toolbar.

> If you delete rows or columns within a sheet, the sheet may lose data. If a row or column is deleted either by using the `resize` method or by using the **Delete Row** or **Delete Column** tool, it will be removed even if it contains data.

## Using the resize Method

If the count of the rows or columns is programmatically set through the `resize` method, the user cannot revert the applied changes through the **Undo** or **Redo** tools. In this case, **Undo** and **Redo** will take effect only if the user changes the number of the rows or columns with the **Insert New Row** or **Insert New Column**, or with **Delete Row** or **Delete Column** options.

The example below demonstrates how to set the count of the rows and columns in the active sheet by using its `resize` method.

{% meta height:690 %}
{% embed_file resizing/func/app.tsx preview %}
{% embed_file resizing/func/main.tsx %}
{% embed_file resizing/func/sheets.ts %}
{% endmeta %}

## Suggested Links

-   [API Reference of the KendoReact Spreadsheet]({% slug api_spreadsheet %})
