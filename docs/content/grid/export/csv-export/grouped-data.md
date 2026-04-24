---
title: Exporting Grouped Data
description: 'Learn how to export grouped data with aggregates to CSV from the KendoKendoReact Data Grid.'
components: ['datagrid']
slug: groupeddata_csvexport_grid
position: 25
subject: CSV Export feature of the Grid
tier: free
---

# Exporting Grouped Data

The KendoKendoReact Data Grid CSV export feature supports exporting grouped data with group headers and aggregate footers. When the Grid data is grouped, the export automatically includes group information in a flattened format suitable for CSV.

<CtaPanelOverview></CtaPanelOverview>

## Basic Grouped Data Export

The following example demonstrates exporting grouped data to CSV. The Grid uses `autoProcessData` for built-in data processing and groups products by category and discontinued status. When exported, the CSV includes group headers and aggregate values (sum of unit prices per group):

<demo metaUrl="grid/csv-export/grouped-data-export/" height="620"></demo>

## Export Format

The exported CSV represents the grouped hierarchy in a flat format:

| ProductID                                   | ProductName                                 | UnitPrice  | ... |
| ------------------------------------------- | ------------------------------------------- | ---------- | --- |
| Group: Category.CategoryName > Discontinued | Beverages: Beverages \| Discontinued: false |            |     |
| 1                                           | Chai                                        | 18.00      | ... |
| 2                                           | Chang                                       | 19.00      | ... |
|                                             |                                             | sum: 37.00 |     |

## Nested Groups

The export handles multiple levels of grouping. In the example above, products are first grouped by `Category.CategoryName` and then by `Discontinued` status, creating a nested group structure in the exported CSV.

## Aggregates

To include aggregates in the export, define them in your `GroupDescriptor`:

```tsx
const aggregates: AggregateDescriptor[] = [{ field: 'UnitPrice', aggregate: 'sum' }];

const group: GroupDescriptor[] = [
    {
        field: 'Category.CategoryName',
        aggregates
    }
];
```

The supported aggregate functions are:

-   `sum` - Sum of values
-   `average` - Average of values
-   `count` - Count of items
-   `min` - Minimum value
-   `max` - Maximum value

## Suggested Links

-   [CSV Export Basics](slug://overview_csvexport_grid)
-   [Customizing Exported Columns]({% slug customcolumns_csvexport_grid %})
-   [Data Transformation]({% slug datatransformation_csvexport_grid %})
-   [Grid Grouping](slug://groupingbasics_grid)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
