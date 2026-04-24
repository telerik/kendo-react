---
title: Basics
description: 'Get started with the KendoKendoReact Data Grid CSV export feature using the built-in @progress/kendo-csv library.'
components: ['datagrid']
slug: overview_csvexport_grid
position: 0
subject: CSV Export feature of the Grid
tier: free
---

# CSV Export Basics

The [`csv`]({% slug api_grid_gridprops %}#toc-csv) property of the Grid component enables you to export the content of the KendoReact Data Grid to CSV format using the built-in `@progress/kendo-csv` library and `@progress/kendo-file-saver` for file saving.

<CtaPanelOverview></CtaPanelOverview>

## Getting Started

To enable CSV export in the Grid:

1. Set the Grid [`csv`]({% slug api_grid_gridprops %}#toc-csv) prop to `true` or provide a [`GridCSVExportOptions`]({% slug api_grid_gridcsvexportoptions %}) configuration object.
2. Add the [`GridCsvExportButton`]({% slug api_grid_gridcsvexportbutton %}) component to the Grid toolbar or use a custom button.

The following example demonstrates the basic CSV export functionality. The Grid uses `autoProcessData={true}` to handle pagination internally, and with `csv={true}`, clicking the export button exports all data by default:

<demo metaUrl="grid/csv-export/simple-export/" height="560"></demo>

> **Note**: When using `autoProcessData={true}`, the `allPages` option controls pagination behavior during export. By default `allPages` is `true`, which exports all data. Set `allPages: false` to export only the current page. See the [Basic Configuration Example](#basic-configuration-example) below for more details.

## CSV Export Options

The CSV export functionality provides extensive customization through the [`GridCSVExportOptions`]({% slug api_grid_gridcsvexportoptions %}) interface:

-   **allPages** - Exports all pages or only the current page (default: `true` - exports all data)
-   **fileName** - Sets the name of the exported CSV file (default: "grid-export.csv")
-   **data** - Optional custom data to export instead of Grid's data
-   **keys** - Specifies which properties to export from the data objects
-   **names** - Defines custom header names for the exported columns
-   **delimiter** - Sets the character used to separate values (default: ",")
-   **lineSeparator** - Defines the line ending character (default: "\r\n")
-   **preventFormulaInjection** - Protects against formula injection attacks (default: true)
-   **maxCellLength** - Sets the maximum character length per cell (default: 32767)
-   **includeUTF8BOM** - Adds UTF-8 BOM for better Excel compatibility with special characters

### Basic Configuration Example

The following example demonstrates how to export all data while displaying only a paginated view. The Grid shows 10 items per page, but with `allPages: true` (the default), the CSV export includes all products with a custom file name (`products-export.csv`) and Unix-style line endings:

<demo metaUrl="grid/csv-export/all-data-export/" height="560"></demo>

## CSV Export Features

-   [Customizing exported columns]({% slug customcolumns_csvexport_grid %})
-   [Exporting custom data]({% slug customdata_csvexport_grid %})
-   [Exporting grouped data]({% slug groupeddata_csvexport_grid %})
-   [Programmatic export (saveAsCsv & getCsvBlob)]({% slug programmaticexport_csvexport_grid %})
-   [Data transformation with onCsvExport]({% slug datatransformation_csvexport_grid %})
-   [Formula injection protection]({% slug formulainjection_csvexport_grid %})

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
