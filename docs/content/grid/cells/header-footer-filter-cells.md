---
title: Custom Header, Footer, Filter, and Group Cells
description: 'Learn how to customize the header, footer, filter, group header, and group footer cells of the KendoReact Grid using the cells configuration API.'
components: ['grid']
slug: header_footer_filter_cells_grid
position: 20
subject: Cells customization feature of the Grid
---

# Custom Header, Footer, Filter, and Group Cells

The KendoReact Grid lets you replace the cells in the header row, filter row, footer row, and group header and footer rows with custom cell components. Column header cells render as `<th>` elements and carry ARIA attributes for sorting and keyboard navigation. Filter, footer, and group cells render as `<td>` elements and use a separate set of attribute props.

You can replace any of these cell types by providing a custom cell component through the [`cells`](slug:api_grid_gridprops#cells) prop on `Grid` or `GridColumn`. The available cell types are:

-   [`headerCell`](slug:api_grid_gridcellssettings#headerCell)&mdash;the column title cell in the header row.
-   [`filterCell`](slug:api_grid_gridcellssettings#filterCell)&mdash;the cell in the filter row below the header.
-   [`footerCell`](slug:api_grid_gridcellssettings#footerCell)&mdash;the cell in the optional footer row at the bottom.
-   [`groupHeader`](slug:api_grid_gridcellssettings#groupHeader)&mdash;the cell that labels each group row when grouping is enabled.
-   [`groupFooter`](slug:api_grid_gridcellssettings#groupFooter)&mdash;the cell that appears at the bottom of each group when group footers are enabled.

<CtaPanelOverview></CtaPanelOverview>

The following example shows all cell types customized at once. Each type receives a different custom component that applies custom colors and renders the default `children` content so the Grid's built-in sort icon, column menu, and grouping labels are preserved.

{% meta height:700 %}
{% embed_file grid-custom-cell/other/func/app.tsx preview %}
{% embed_file grid-custom-cell/other/func/main.tsx %}
{% endmeta %}

## Custom Header Cells

A custom header cell component receives [`GridCustomHeaderCellProps`](slug:api_grid_gridcustomheadercellprops). The most important props are:

-   `thProps`&mdash;The full set of HTML and ARIA attributes the Grid would apply to the `<th>` element by default. This includes `aria-sort`, the column identity needed for keyboard navigation, and `colSpan` for spanned headers.
-   `children`&mdash;The default cell content rendered by the Grid, including the column title, sort indicator, column menu trigger, and column resize handle.

When implementing a custom header cell, you must render the outer element as [`HeaderThElement`](https://www.telerik.com/kendo-react-ui/components/datatools/api/headerthelement) from `@progress/kendo-react-data-tools` and forward `thProps` to it. Rendering a plain `<th>` instead, or omitting `thProps`, will disconnect the column from the Grid's sort state, ARIA attributes, and keyboard focus management.

The following snippets show a custom header cell component and how to bind it to the Grid:

```tsx Component
import * as React from 'react';
import { HeaderThElement } from '@progress/kendo-react-data-tools';
import { GridCustomHeaderCellProps } from '@progress/kendo-react-grid';

const CustomHeaderCell = (props: GridCustomHeaderCellProps) => (
    <HeaderThElement columnId={props.thProps?.columnId || ''} {...props.thProps} style={{ color: '#533291' }}>
        {props.children}
    </HeaderThElement>
);
```

```tsx Grid Setup
{
    /* All columns */
}
<Grid data={data} cells={{ headerCell: CustomHeaderCell }}>
    <GridColumn field="ProductName" title="Product Name" />
    <GridColumn field="UnitPrice" title="Unit Price" />
</Grid>;

{
    /* Single column only */
}
<Grid data={data}>
    <GridColumn field="ProductName" title="Product Name" cells={{ headerCell: CustomHeaderCell }} />
    <GridColumn field="UnitPrice" title="Unit Price" />
</Grid>;
```

## Custom Filter Cells

A custom filter cell component receives [`GridCustomFilterCellProps`](slug:api_grid_gridcustomfiltercellprops). Unlike header cells, filter row cells are rendered as `<td>` elements with a `role="gridcell"` by default. The Grid passes both `thProps` and `tdProps` to the custom filter cell and both point to the same navigation attributes object, including the column ID and keyboard navigation hooks.

You can use `HeaderThElement` with `thProps` as shown in the example below — the `role="gridcell"` attribute in `thProps` will override the native `<th>` role on the rendered element so accessibility semantics remain correct.

The `children` prop contains the default filter input the Grid would render. If you render `children`, the built-in filter input remains functional and you only affect the cell's outer element. If you omit `children` and render your own control, you take responsibility for calling `props.onChange` with the appropriate filter descriptor.

The following snippets show a minimal custom filter cell and how to bind it to the Grid:

```tsx Component
import * as React from 'react';
import { HeaderThElement } from '@progress/kendo-react-data-tools';
import { GridCustomFilterCellProps } from '@progress/kendo-react-grid';

const CustomFilterCell = (props: GridCustomFilterCellProps) => (
    <HeaderThElement columnId={props.thProps?.columnId || ''} {...props.thProps}>
        {props.children}
    </HeaderThElement>
);
```

```tsx Grid Setup
<Grid data={data} filterable={true} cells={{ filterCell: CustomFilterCell }}>
    <GridColumn field="ProductName" title="Product Name" />
    <GridColumn field="UnitPrice" title="Unit Price" />
</Grid>
```

## Custom Footer Cells

A custom footer cell component receives [`GridCustomFooterCellProps`](slug:api_grid_gridcustomfootercellprops). Footer cells render as `<td>` elements, so the relevant attribute prop here is `tdProps` rather than `thProps`. Forwarding `tdProps` is important when the Grid has locked (sticky) columns — it carries the positioning styles that keep locked cells aligned.

The `field` prop identifies which column the footer cell belongs to, making it straightforward to compute and display aggregates such as sum, average, minimum, or maximum values for that field.

The following snippets show a custom footer cell that renders aggregates and how to bind it to the Grid:

```tsx Component
import * as React from 'react';
import { GridCustomFooterCellProps } from '@progress/kendo-react-grid';

const CustomFooterCell = (props: GridCustomFooterCellProps) => {
    const field = props.field || '';
    const values = data.map((item) => item[field]);
    const min = Math.min(...values);
    const max = Math.max(...values);

    return (
        <td {...props.tdProps}>
            min: {min}, max: {max}
        </td>
    );
};
```

```tsx Grid Setup
<Grid data={data} cells={{ footerCell: CustomFooterCell }}>
    <GridColumn field="ProductName" title="Product Name" />
    <GridColumn field="UnitPrice" title="Unit Price" />
</Grid>
```

## Custom Group Header and Group Footer Cells

Group header and group footer cells both receive [`GridCustomCellProps`](slug:api_grid_gridcustomcellprops) and also render as `<td>` elements. The key props here are `dataItem`, which contains the group descriptor including the grouped `field` and its `value`, and `tdProps` for forwarding the cell's structural attributes.

`children` in group cells contains the default group label or footer content the Grid would render. Rendering `children` preserves the default label text, expand/collapse icon, and aggregate display.

```tsx Component
import * as React from 'react';
import { GridCustomCellProps } from '@progress/kendo-react-grid';

const CustomGroupHeaderCell = (props: GridCustomCellProps) => (
    <td {...props.tdProps} style={{ color: '#014830', backgroundColor: '#4a9d93' }}>
        {props.children}
    </td>
);
```

```tsx Grid Setup
<Grid
    data={data}
    groupable={{ footer: 'visible' }}
    defaultGroup={[{ field: 'Category' }]}
    cells={{
        groupHeader: CustomGroupHeaderCell,
        groupFooter: CustomGroupFooterCell
    }}
>
    <GridColumn field="ProductName" title="Product Name" />
    <GridColumn field="UnitPrice" title="Unit Price" />
</Grid>
```

### Customizing Cells in Group Columns

When the Grid uses the `singleColumn` or `multipleColumns` [grouping display modes](slug:groupingmodes_grid), it generates dedicated group columns. You can customize the cells of those generated columns through the `cells` property of the `groupColumn` setting. Use `groupColumn.cells` to target the generated group column's own header cell, and the top-level `cells.groupFooter` to customize the footer cell of each data column.

The following example demonstrates a Grid in multiple-columns grouping mode with custom group header and footer cells that render aggregate values.

<demo metaUrl="grid/grouping/multi-columns-grouping-custom-header-footer/" height="580"></demo>

## Column-Level vs. Grid-Level Registration

The `cells` prop is available on both the `Grid` component and individual `GridColumn` components. When set on `Grid`, the custom cell applies to every column. When set on `GridColumn`, it applies only to that column and overrides the Grid-level setting for that column.

```tsx
{
    /* Applied to every column */
}
<Grid cells={{ headerCell: CustomHeaderCell }}>
    {/* Overrides only for this column */}
    <GridColumn field="UnitPrice" cells={{ footerCell: CustomUnitPriceFooterCell }} />
</Grid>;
```

## KendoReact Grid Custom Cells APIs

-   [Grid Cells Prop](slug:api_grid_gridprops#toc-cells)
-   [GridColumn Cells Prop](slug:api_grid_gridcolumnprops#toc-cells)
-   [API Reference of the GridCellsSettings](slug:api_grid_gridcellssettings)

## Suggested Links

-   [Grid Custom Cells Overview](slug:cells_grid)
-   [Grid Custom Edit Cells](slug:edit_cells_grid)
-   [Grid Custom Hierarchy Cells](slug:hierarchy_cells_grid)
-   [Grid Custom Group Cells](slug:group_cells_grid)
-   [Grid Custom Selection Cells](slug:selection_cells_grid)
