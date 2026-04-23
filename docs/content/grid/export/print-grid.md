---
title: Printing the Grid
description: 'Learn how to print the KendoKendoReact Data Grid in different use case scenarios.'
components: ["datagrid"]
slug: print_grid
position: 10
tier: free
---

# Printing the KendoKendoReact Data Grid

This article shows how to print the Grid in multiple use-case scenarios using the browser's print window.

The scenarios discussed below are:

-   [Printing a Scrollable Grid](#toc-printing-a-scrollable-grid)
-   [Printing a Pageable Grid](#toc-printing-a-pageable-grid)
-   [Controlling the Print Output](#toc-control-the-print-output)

> To ensure the Grid is ready for printing, you may need to manipulate its dimensions using the approaches discussed in this article or by applying custom CSS. The printing requires the retrieving of the correct dataset in advance. Due to various use cases, such adjustments should be implemented by the developer.

## Printing a Scrollable Grid

The following example shows how to print a scrollable Grid by:

-   Changing Grid's dimensions before the printing
-   Setting component's **scrollable** property to `none` for the time of printing
-   Restoring the original Grid configuration after printing

{% meta height:690 %}
{% embed_file print/scrollable/app.tsx preview %}
{% embed_file print/scrollable/main.tsx %}
{% embed_file print/scrollable/style.css %}
{% endmeta %}

## Printing a Pageable Grid

The example shows how to prepare the pageable Grid for printing by:

-   Changing Grid's dimensions before the printing
-   Passing to the component all the data that needs to be printed
-   Setting the **scrollable** property to `none` for the time of printing
-   Restoring the original configuration after printing

{% meta height:580 %}
{% embed_file print/pageable/app.tsx preview %}
{% embed_file print/pageable/main.tsx %}
{% embed_file print/pageable/style.css %}
{% endmeta %}

## Control the Print Output

When the Grid has many columns or columns with large content, you still need to print the data. Below you will find how to handle such scenarios by:

-   [Controlling the list of printable columns](#toc-control-the-list-of-printable-columns)
-   [Dynamically change the width of Grid's columns in a way they fit the printing size](#toc-change-the-width-of-the-printable-columns)

### Control the List of Printable Columns

The following example demonstrates how to control which Grid columns to print.

This approach is useful when you have many columns that cannot all fit in the print window. Another option you can use the following implementation for is when only essential data should be printed. To test the example, deselect some of the checkboxes and print the Grid.

{% meta height:770 %}
{% embed_file print/scrollable-controlled/app.tsx preview %}
{% embed_file print/scrollable-controlled/main.tsx %}
{% embed_file print/scrollable-controlled/style.css %}
{% endmeta %}

### Change the Width of the Printable Columns

The below example shows how we can resize the Grid's columns just before printing and then restore the original width when the printing is done. Using this approach, each column can have a specific width that is applied only during printing.

{% meta height:660 %}
{% embed_file print/contol-column-widths/app.tsx preview %}
{% embed_file print/contol-column-widths/main.tsx %}
{% embed_file print/contol-column-widths/style.css %}
{% endmeta %}

## Known Limitations

It is recommended to use the above printing techniques with smaller sets of data. While it is possible to print larger data sets, doing so will result in the generation of many DOM elements that could slow the browser down or make it unresponsive.

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
