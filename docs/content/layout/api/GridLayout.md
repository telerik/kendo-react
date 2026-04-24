---
title: GridLayout
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the GridLayout."
api_reference: true
type: inner_api
slug: api_layout_gridlayout
---

# GridLayout
Represents the [KendoReact GridLayout component](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout).
Arranges the contents of the component in rows and columns in a grid structure.

A [Functional Component](https://react.dev/reference/react/Component).

```jsx

const App = () => {
  return (
    <GridLayout
      rows={[{height: 50}, {height: 50}, {height: 50}]}
      cols={[{width: 50}, {width: 50}, {width: 50}]}
      gap={{rows: 5, cols: 5}}
      align={{horizontal: 'stretch', vertical: 'stretch'}}
    >
      <GridLayoutItem row={1} col={1}>Box</GridLayoutItem>
      <GridLayoutItem row={1} col={2} colSpan={2}>Box</GridLayoutItem>
      <GridLayoutItem row={2} col={1} colSpan={2} rowSpan={2}>Box</GridLayoutItem>
      <GridLayoutItem row={2} col={3}>Box</GridLayoutItem>
      <GridLayoutItem row={3} col={3}>Box</GridLayoutItem>
    </GridLayout>
  );
};
```



<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


[GridLayoutProps]({% slug api_layout_gridlayoutprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [GridLayoutHandle]({% slug api_layout_gridlayouthandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the GridLayout component.


</td>
</tr>
</tbody>
</table>



