---
title: Programmatic Export
description: 'Learn how to programmatically export CSV data using the Grid ref methods saveAsCsv and getCsvBlob.'
components: ['datagrid']
slug: programmaticexport_csvexport_grid
position: 30
subject: CSV Export feature of the Grid
tier: free
---

# Programmatic CSV Export

The KendoKendoReact Data Grid provides programmatic methods via the Grid ref to export CSV data without using the built-in `GridCsvExportButton` component. This enables custom export workflows such as uploading to a server or previewing the data before download.

<CtaPanelOverview></CtaPanelOverview>

## Grid Ref Methods

The Grid exposes two CSV-related methods through its ref:

| Method         | Returns         | Description                                                                            |
| -------------- | --------------- | -------------------------------------------------------------------------------------- |
| `saveAsCsv()`  | `Promise<void>` | Triggers a CSV file download. Returns a Promise that resolves when export is triggered |
| `getCsvBlob()` | `Blob \| null`  | Returns the CSV data as a Blob for custom handling                                     |

## Usage Example

The following example demonstrates both methods:

-   **Download CSV** - Uses `saveAsCsv()` to trigger an immediate file download with async/await
-   **Upload to Server** - Uses `getCsvBlob()` to get the Blob for custom upload logic
-   **Preview CSV** - Uses `getCsvBlob()` to read and display the CSV content

<demo metaUrl="grid/csv-export/programmatic-export/" height="480"></demo>

## Suggested Links

-   [CSV Export Basics](slug://overview_csvexport_grid)
-   [Exporting Grouped Data]({% slug groupeddata_csvexport_grid %})
-   [Data Transformation]({% slug datatransformation_csvexport_grid %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
