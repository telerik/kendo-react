---
title: Excel Export
description: 'Learn how to export KendoReact Grid data to Excel and choose whether to export the current view, all data, or custom columns.'
components: ['grid']
slug: overview_excel-export_grid
position: 40
tier: premium
subject: Excel Export feature of the Grid
---

# KendoReact Grid Excel Export Overview

The KendoReact Grid provides the option to export its data to Excel by using the KendoReact [Excel Export library](slug:overview_excelexport).

<div data-component="StartKendoReactFreeSection"></div>

The following example demonstrates the basic implementation of the Excel export functionality of the Grid.

{% meta height:490 %}
{% embed_file excel/basic/func/app.tsx preview %}
{% embed_file excel/basic/func/main.tsx %}
{% endmeta %}

## Getting Started with the KendoReact Grid Excel Export

To enable the Excel export:

1. Install the `@progress/kendo-react-excel-export` package.

    ```sh
    npm i @progress/kendo-react-excel-export
    ```

1. Import the `ExcelExport` component in your React application.

    ```jsx
    import { ExcelExport } from '@progress/kendo-react-excel-export';
    ```

1. Wrap the Grid in the `ExcelExport` component and use the `save` function to generate the workbook file.

    ```tsx
    const exportRef = React.useRef<ExcelExport | null>(null);

    const handleExport = () => {
        if (exportRef.current) {
            exportRef.current.save();
        }
    };

    <ExcelExport data={products} ref={exportRef}>
        <Grid data={products}>
            <GridToolbar>
                <Button type="button" onClick={handleExport}>
                    Export to Excel
                </Button>
            </GridToolbar>
            <GridColumn field="ProductName" />
        </Grid>
    </ExcelExport>;
    ```

In the most common setup, you place the export trigger in a [`GridToolbar`](slug:api_grid_gridtoolbar) and keep a ref to the `ExcelExport` instance. This keeps the export action close to other Grid actions while still letting you decide exactly which data and columns are written to the file.

When you call `save()` without additional arguments, the ExcelExport component uses the data and column configuration currently supplied to it. Pass explicit data or columns only when the exported workbook should differ from the Grid content that is currently rendered.

## Configuration

You can entirely control the Excel export configuration through the arguments that are passed to the [`save`](slug:api_excel-export_excelexport#toc-save) function of the KendoReact Excel Export component.

Use the following configuration options to choose how closely the exported workbook should match the rendered Grid.

| Approach                                                      | Use it when                                                                                                             |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [Wrap the Grid in `ExcelExport`](#wrapping-the-grid)          | The exported columns should match the rendered Grid and the data is already available in memory                         |
| [Pass the Grid columns explicitly](#passing-the-grid-columns) | The export is triggered outside the wrapper flow or you need to control the exact Grid instance and column collection   |
| [Export specific data](#exporting-specific-data)              | The workbook should contain more data than the currently visible rows, such as all pages in a paged or virtualized Grid |
| [Export filtered data](#exporting-filtered-data)              | The workbook should contain only the rows that match the active Grid filter                                             |
| [Customize exported columns](#customizing-exported-columns)   | The workbook structure should differ from the on-screen Grid, for example for reporting or grouped headers              |

### Wrapping the Grid

If the Grid is passed as a child to the ExcelExport and its columns are defined declaratively by using the `GridColumn` components, they will be automatically detected. You still need to pass the data of the Grid to the [`save`](slug:api_excel-export_excelexport#toc-save) function or as a [`data`](slug:api_excel-export_excelexportprops#toc-data) property to the ExcelExport component.

This is the simplest setup when the exported columns should match the Grid columns and the data is already available in memory.

The following example demonstrates the wrapped Grid approach, where `GridColumn` components are detected automatically and the Grid is passed as a child to the `ExcelExport` component.

{% meta height:490 %}
{% embed_file excel/wrapped/func/app.tsx preview %}
{% embed_file excel/wrapped/func/main.tsx %}
{% endmeta %}

### Passing the Grid Columns

The Grid exposes its columns through the [`columns`](slug:api_grid_gridhandle#columns) field on its ref handle. Supply both the data and the column collection to the [`save`](slug:api_excel-export_excelexport#toc-save) function of the ExcelExport component.

Use this approach when the export is triggered outside the `ExcelExport` wrapper flow or when you need to be explicit about which Grid instance and column collection are used.

The following example demonstrates how to export Grid columns by explicitly passing the Grid's `columns` reference and data to the `ExcelExport.save()` function.

{% meta height:490 %}
{% embed_file excel/passed-columns/func/app.tsx preview %}
{% embed_file excel/passed-columns/func/main.tsx %}
{% endmeta %}

### Exporting Specific Data

To export specific data, pass the data to the [`save`](slug:api_excel-export_excelexport#toc-save) function of the ExcelExport component.

This is the recommended setup for paged or virtualized Grids when users expect the Excel file to contain the full data set instead of only the currently visible rows.

The following example demonstrates how to export all pages of a paged Grid by passing the full unprocessed data array to the `save` function instead of only the current page.

{% meta height:820 %}
{% embed_file excel/specific-data/func/app.tsx preview %}
{% embed_file excel/specific-data/func/main.tsx %}
{% endmeta %}

### Exporting Filtered Data

When the Grid has filtering enabled, apply the active filter to the data before exporting by using the [`filterBy`]({% slug api_data-tools_filterby %}) function from `@progress/kendo-data-query` and passing the filtered result to the [`save`]({% slug api_excel-export_excelexport %}#toc-save) function. This ensures the exported Excel file contains only the rows that match the current filter.

The following example demonstrates how to export only the rows that match the active Grid filter. Apply the filter, click **Export to Excel**, and the downloaded file will contain only the filtered data.

<demo metaUrl="grid/excel/filtered-data/" height="620"></demo>

### Customizing Exported Columns

You can use the same data as the Grid and customize the exported columns. To export columns that are different from the current Grid columns, include the [`ExcelExportColumn`](slug:api_excel-export_excelexportcolumn) and [`ExcelExportColumnGroup`](slug:api_excel-export_excelexportcolumngroup) components as children to the ExcelExport.

Choose custom export columns when the Excel document needs a different structure than the on-screen Grid, for example when some columns are hidden in the UI or when reporting requires grouped headers.

The following example demonstrates how to define custom export columns using `ExcelExportColumn` components, producing an Excel file with different column definitions than what is displayed in the Grid.

{% meta height:490 %}
{% embed_file excel/customize-columns/func/app.tsx preview %}
{% embed_file excel/customize-columns/func/main.tsx %}
{% endmeta %}

## Known Limitations

-   During the export to Excel, the Grid does not use column formats. Column formats are incompatible with Excel. For more information, refer to the page on the [Excel-supported formats](https://support.office.com/en-us/article/Create-or-delete-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4?ui=en-US&rs=en-US&ad=US).
-   The maximum size of the exported file to Excel has a system-specific limit. For large data sets, it is highly recommended that you use a server-side solution.

## Suggested Links

-   [Exporting the Grid to PDF](slug:overview_pdfexport_grid)
-   [Exporting the Grid to CSV](slug:overview_csvexport_grid)
-   [Printing the Grid](slug:print_grid)
-   [API Reference of the Excel Export Component](slug:api_excel-export_excelexport)
