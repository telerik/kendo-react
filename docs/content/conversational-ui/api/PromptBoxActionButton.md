---
title: PromptBoxActionButton
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the PromptBoxActionButton."
api_reference: true
type: inner_api
slug: api_conversational-ui_promptboxactionbutton
---

# PromptBoxActionButton
Represents the PromptBox Action Button component.
Receives default props from the parent PromptBox component.

A [Functional Component](https://react.dev/reference/react/Component).

```tsx
<PromptBox
  actionButtonConfig={false}
  endAffix={(props) => (
    <>
      <PromptBoxActionButton {...props.actionButtonProps} />
      <span>Custom content</span>
    </>
  )}
/>
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


[PromptBoxActionButtonProps]({% slug api_conversational-ui_promptboxactionbuttonprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;ButtonHandle&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the PromptBoxActionButton component.


</td>
</tr>
</tbody>
</table>



