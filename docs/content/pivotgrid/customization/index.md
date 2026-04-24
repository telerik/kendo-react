---
title: Overview
description: "Learn hot to customize the row, column or cell components in the KendoReact PivotGrid."
components: ["pivotgrid"]
slug: customization_pivotgrid
position: 0
---

# Customization 

The KendoReact `PivotGrid` component renders multiple internal components like `rows`, `columns`, and `cells`. Each of this component can be customized through render props.

The user can replace the following PivotGrid components with custom ones:
- [Row]({% slug api_pivotgrid_pivotgridprops %}#toc-row)&mdash;Renders the `tr` elements in the `PivotGrid`.
- [Column]({% slug api_pivotgrid_pivotgridprops %}#toc-column)&mdash;Renders the `col` elements in the `PivotGrid`.
- [Cell]({% slug api_pivotgrid_pivotgridprops %}#toc-cell)&mdash;Renders the `td` elements (only present in the `data` section of the `PivotGrid`).
- [HeaderCell]({% slug api_pivotgrid_pivotgridprops %}#toc-headercell)&mdash;Renders the `th` elements (only present in the `row` and `column` header sections of the PivotGrid).

Additionally, the user can replace more-specific elements in the `PivotGrid`:
- For the `column-headers` of the `PivotGrid`:
    - [columnHeadersRow]({% slug api_pivotgrid_pivotgridprops %}#toc-columnheadersrow).
    - [columnHeadersColumn]({% slug api_pivotgrid_pivotgridprops %}#toc-columnheaderscolumn).
    - [columnHeadersCell]({% slug api_pivotgrid_pivotgridprops %}#toc-columnheaderscell).
- For the `row-headers` of the PivotGrid:
    - [rowHeadersRow]({% slug api_pivotgrid_pivotgridprops %}#toc-rowheadersrow).
    - [rowHeadersColumn]({% slug api_pivotgrid_pivotgridprops %}#toc-rowheaderscolumn).
    - [rowHeadersCell]({% slug api_pivotgrid_pivotgridprops %}#toc-rowheaderscell).
- For the `data` section of the PivotGrid:
    - [dataRow]({% slug api_pivotgrid_pivotgridprops %}#toc-datarow).
    - [dataColumn]({% slug api_pivotgrid_pivotgridprops %}#toc-datacolumn).

## Importing the Default Components

The default `row`, `column`, `cell`, and `headerCell` components are contained in the `@progress/kendo-react-pivotgrid` package and are set as `defaultProps` of the `PivotGrid` component:

```jsx
// ES2015 module syntax
import { PivotGridRow, PivotGridColumn, PivotGridCell, PivotGridHeaderCell } from '@progress/kendo-react-pivotgrid';
```

```jsx
// CommonJS format
const { PivotGridRow, PivotGridColumn, PivotGridCell, PivotGridHeaderCell } = require('@progress/kendo-react-pivotgrid');
```

## Providing a Custom Component

To customize a PivotGrid component, first create a new React Component which [compose](https://reactjs.org/docs/composition-vs-inheritance.html) the default one.

> The recommended approach is to always wrap the component in an `React.forwardRef` for functional components, and pass the `ref` to the default component to assure correct behavior of the internal components.

```jsx
const CustomCell = React.forwardRef((props, ref) => {
    return <PivotGridCell ref={ref} {...props} style={{color: props.total ? 'red' : undefined}} />
})
```

To apply the customization, provide the corresponding `row`, `column`, `cell`, or `headerCell` property to the `PivotGrid`:

```jsx
<PivotGrid cell={CustomCell} />
```

The following example demonstrates the `PivotGrid` cell customization in action:

{% meta height:770 %}
{% embed_file customization/cell/basic/func/app.tsx preview %}
{% embed_file customization/cell/basic/func/main.tsx %}
{% embed_file customization/cell/basic/func/custom-cell.tsx %}
{% endmeta %}

## Row and Column Dimensions

A common scenario in the `PivotGrid` is the customization of the `row` and `column` dimensions.

The following example demonstrates applying custom `width` and `height` to specific rows and columns of the `PivotGrid`.

{% meta height:770 %}
{% embed_file customization/dimensions/func/app.tsx preview %}
{% embed_file customization/dimensions/func/main.tsx %}
{% embed_file customization/dimensions/func/custom-row.tsx %}
{% embed_file customization/dimensions/func/custom-column.tsx %}
{% embed_file customization/dimensions/func/custom-column-headers-row.tsx %}
{% endmeta %}

## Suggested Links

- [API Reference of the KendoReact PivotGrid]({% slug api_pivotgrid_pivotgridprops %})
- [API Reference of the KendoReact PivotGridRow]({% slug api_pivotgrid_pivotgridrowprops %})
- [API Reference of the KendoReact PivotGridColumn]({% slug api_pivotgrid_pivotgridcolumnprops %})
- [API Reference of the KendoReact PivotGridCell]({% slug api_pivotgrid_pivotgridcellprops %})
- [API Reference of the KendoReact PivotGridHeaderCell]({% slug api_pivotgrid_pivotgridheadercellprops %})
