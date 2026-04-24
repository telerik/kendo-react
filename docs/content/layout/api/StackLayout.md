---
title: StackLayout
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the StackLayout."
api_reference: true
type: inner_api
slug: api_layout_stacklayout
---

# StackLayout
Represents the [KendoReact StackLayout component](https://www.telerik.com/kendo-react-ui/components/layout/stacklayout).
Arranges its inner elements horizontally, or vertically in a stack. Nesting stack layouts is supported to build more complex layouts.

A [Functional Component](https://react.dev/reference/react/Component).

```jsx

const App = () => {
  return (
    <StackLayout
      orientation="vertical"
      align={{horizontal: 'stretch', vertical: 'stretch'}}
      gap={10}
    >
      <div>Box</div>
      <div>Box</div>
      <div>Box</div>
      <div>Box</div>
    </StackLayout>
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


[StackLayoutProps]({% slug api_layout_stacklayoutprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [StackLayoutHandle]({% slug api_layout_stacklayouthandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the StackLayout component.


</td>
</tr>
</tbody>
</table>



