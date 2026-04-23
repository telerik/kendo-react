---
title: Customizing Exported Columns
description: 'Learn how to customize which columns are exported and their header names in CSV exports from the KendoKendoReact Data Grid.'
components: ['datagrid']
slug: customcolumns_csvexport_grid
position: 10
subject: CSV Export feature of the Grid
tier: free
---

# Customizing Exported Columns

The [`csv`]({% slug api_grid_gridprops %}#toc-csv) property allows you to control which columns are exported and customize their header names using the `keys` and `names` options.

<CtaPanelOverview></CtaPanelOverview>

## Selecting Specific Columns

Use the `keys` option to specify which data properties to include in the export. This allows you to export only a subset of columns, even if more columns are visible in the Grid.

The `names` option defines the header row text for each exported column.

<demo metaUrl="grid/csv-export/custom-columns/" height="520"></demo>

In this example, only the Product ID, Product Name, and Unit Price columns are exported, even though the Grid displays additional columns like Category, Units in Stock, and Discontinued.

## Working with Nested Properties

The CSV export supports nested object properties using dot notation. This is useful when your data contains complex nested structures:

```jsx
const csvOptions = {
    keys: ['ProductID', 'ProductName', 'Category.CategoryName', 'UnitPrice'],
    names: ['ID', 'Product', 'Category', 'Price']
};

<Grid data={products} csv={csvOptions}>
    <GridToolbar>
        <GridCsvExportButton />
    </GridToolbar>
    <Column field="ProductID" title="ID" />
    <Column field="ProductName" title="Product Name" />
    <Column field="Category.CategoryName" title="Category" />
    <Column field="UnitPrice" title="Unit Price" />
</Grid>;
```

## Automatic Column Detection

When `keys` and `names` are not specified, the CSV export automatically:

1. Detects visible Grid columns and their `field` properties
2. Uses column `title` properties as header names
3. Excludes hidden columns from the export
4. Supports nested field paths (e.g., "Category.CategoryName")

Example:

```jsx
// Automatically exports all visible columns with their titles
<Grid data={products} csv={true}>
    <Column field="ProductID" title="ID" />
    <Column field="ProductName" title="Product Name" />
    <Column field="UnitPrice" title="Price" />
    {/* Hidden columns are automatically excluded */}
    <Column field="SecretData" title="Secret" hidden />
</Grid>
```

## Column Order

The order of properties in the `keys` array determines the column order in the exported CSV file:

```jsx
const csvOptions = {
    // Export in this specific order
    keys: ['UnitPrice', 'ProductName', 'ProductID'],
    names: ['Price', 'Product', 'ID']
};
```

## Suggested Links

-   [CSV Export Basics]({% slug overview_csvexport_grid %})
-   [Exporting Custom Data]({% slug customdata_csvexport_grid %})
-   [Data Transformation]({% slug datatransformation_csvexport_grid %})
-   [React Data Grid](slug://overview_grid)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
