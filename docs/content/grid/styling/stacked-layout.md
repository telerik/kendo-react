---
title: Stacked Layout
description: 'Learn how to use the stacked layout mode of the KendoKendoReact Data Grid to display data in a card-based format ideal for mobile and responsive designs.'
slug: stacked_layout_grid
position: 40
tag: new
tier: premium
---

# Stacked Layout

The stacked layout mode of the Grid enables you to display data in a card-based format where each row renders as a vertical stack of field label/value pairs. This layout is particularly useful for mobile devices and responsive designs where horizontal space is limited.

<CtaPanelOverview></CtaPanelOverview>

{% meta height:720 %}
{% embed_file stacked-layout/overview/app.tsx preview %}
{% embed_file stacked-layout/overview/main.tsx %}
{% embed_file stacked-layout/overview/products.ts %}
{% embed_file stacked-layout/overview/countries.ts %}
{% embed_file stacked-layout/overview/styles.css %}
{% endmeta %}

## Getting Started

To enable the stacked layout mode, set the [`dataLayoutMode`](slug:api_grid_gridprops#toc-datalayoutmode) property of the Grid to `"stacked"`. This default configuration renders each field in a single column, stacking them vertically within each card.

{% meta height:580 %}
{% embed_file stacked-layout/basic/app.tsx preview %}
{% embed_file stacked-layout/basic/main.tsx %}
{% embed_file stacked-layout/basic/data.ts %}
{% endmeta %}

## Custom Column Widths

You can configure the stacked layout to arrange cells in multiple columns with custom widths using the [`stackedLayoutSettings`](slug:api_grid_gridprops#toc-stackedlayoutsettings) property. The `cols` option accepts:

-   **A number** for equal-width columns: `cols: 2` or `cols: 3`
-   **An array of CSS values** for custom widths: `cols: ['1fr', '2fr', '1fr']`, `cols: [200, 400, 200]`, or `cols: ['25%', '50%', '25%']`
-   **Width objects**: `cols: [{ width: 200 }, { width: '1fr' }]`

The example below uses fraction units (`fr`) to create a three-column layout where the middle column is twice as wide as the outer columns.

{% meta height:480 %}
{% embed_file stacked-layout/custom-widths/app.tsx preview %}
{% embed_file stacked-layout/custom-widths/main.tsx %}
{% embed_file stacked-layout/custom-widths/data.ts %}
{% endmeta %}

## Responsive Stacked Layout

You can dynamically switch between column and stacked layouts based on screen size for a responsive design. This allows you to show the traditional table layout on larger screens and the stacked layout on smaller devices. The layout switches automatically when the viewport size changes.

{% meta height:520 %}
{% embed_file stacked-layout/responsive/app.tsx preview %}
{% embed_file stacked-layout/responsive/main.tsx %}
{% embed_file stacked-layout/responsive/data.ts %}
{% embed_file stacked-layout/responsive/styles.css %}
{% endmeta %}

## Editing

The stacked layout supports all editing modes of the Grid. The editing UI adapts seamlessly to the stacked layout, presenting editors within the card structure while maintaining full editing functionality.

### Inline Editing

In `Inline` editing mode, clicking **Edit** enters the entire row into edit mode, displaying all editable fields with their respective editors.

{% meta height:720 %}
{% embed_file stacked-layout/editing-inline/app.tsx preview %}
{% embed_file stacked-layout/editing-inline/main.tsx %}
{% embed_file stacked-layout/editing-inline/data.ts %}
{% embed_file stacked-layout/editing-inline/styles.css %}
{% endmeta %}

### In-Cell Editing

In `In-cell` editing mode, individual cells become editable when clicked, allowing users to edit one field at a time.

{% meta height:500 %}
{% embed_file stacked-layout/editing-incell/app.tsx preview %}
{% embed_file stacked-layout/editing-incell/main.tsx %}
{% embed_file stacked-layout/editing-incell/data.ts %}
{% embed_file stacked-layout/editing-incell/styles.css %}
{% endmeta %}

### Dialog Editing

In `Dialog` editing mode, clicking a row opens a popup dialog containing the edit form.

{% meta height:500 %}
{% embed_file stacked-layout/editing-dialog/app.tsx preview %}
{% embed_file stacked-layout/editing-dialog/main.tsx %}
{% embed_file stacked-layout/editing-dialog/data.ts %}
{% embed_file stacked-layout/editing-dialog/styles.css %}
{% endmeta %}

## Toolbar Tools

The stacked layout is fully compatible with all Grid toolbar components. Sorting, filtering, and column management tools work seamlessly with the stacked layout.

{% meta height:620 %}
{% embed_file stacked-layout/toolbar-tools/app.tsx preview %}
{% embed_file stacked-layout/toolbar-tools/main.tsx %}
{% embed_file stacked-layout/toolbar-tools/products.ts %}
{% endmeta %}

## Grouping

The stacked layout supports data grouping, allowing you to organize items into collapsible categories. Group headers and footers adapt to the stacked format, with aggregate values displayed clearly within the card-based layout.

{% meta height:610 %}
{% embed_file stacked-layout/grouping-detail-row/app.tsx preview %}
{% embed_file stacked-layout/grouping-detail-row/main.tsx %}
{% embed_file stacked-layout/grouping-detail-row/data.ts %}
{% endmeta %}

## Stacked Layout vs Adaptive Rendering

The stacked layout mode (`dataLayoutMode="stacked"`) and [adaptive rendering](slug:grid_adaptive_rendering) (`adaptive={true}`) serve different purposes:

| Feature         | Stacked Layout            | Adaptive Rendering             |
| --------------- | ------------------------- | ------------------------------ |
| **Purpose**     | Card-based data display   | Responsive UI components       |
| **Affects**     | Row/cell rendering        | Pager, column menu, edit forms |
| **Usage**       | Mobile-first data layouts | Responsive popup elements      |
| **Can Combine** | Yes                       | Yes                            |

You can use both features together—stacked layout changes how data rows are rendered, while adaptive rendering adjusts how interactive elements like the pager and column menu appear on different screen sizes.

## Limitations

The following features are not supported or have limitations when using the stacked layout mode:

-   **Row/Column Spanning**: The `rowSpan` and `colSpan` features are not available in stacked mode.
-   **Column Reordering**: Visual column reordering is not applicable to stacked layout.
-   **Locked Columns**: Column locking does not apply to stacked layout.

## Suggested Links

-   [Detail Rows](slug:detailrow_grid)
-   [Adaptive Rendering](slug:grid_adaptive_rendering)
-   [API Reference of the Grid](slug:api_grid_gridprops)
-   [API Index of the Grid](slug:api_grid)
