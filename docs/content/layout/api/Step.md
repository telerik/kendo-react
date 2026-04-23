---
title: Step
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the Step."
api_reference: true
type: inner_api
slug: api_layout_step
---

# Step
Represents the [KendoReact Step component](https://www.telerik.com/kendo-react-ui/components/layout/stepper).

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const steps = [
   { label: 'Step 1' },
   { label: 'Step 2' },
   { label: 'Step 3', optional: true }
];

const App = () => {
  return (
      <Stepper items={steps} value={1}/>
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


Omit&lt;[StepProps]({% slug api_layout_stepprops %})&gt; [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [StepHandle]({% slug api_layout_stephandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Step component.


</td>
</tr>
</tbody>
</table>



