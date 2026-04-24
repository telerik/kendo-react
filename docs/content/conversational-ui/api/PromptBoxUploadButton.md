---
title: PromptBoxUploadButton
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the PromptBoxUploadButton."
api_reference: true
type: inner_api
slug: api_conversational-ui_promptboxuploadbutton
---

# PromptBoxUploadButton
Represents the PromptBox Upload Button component.
Receives default props from the parent PromptBox component.

A [Functional Component](https://react.dev/reference/react/Component).

```tsx
<PromptBox
  uploadButtonConfig={false}
  endAffix={(props) => (
    <>
      <PromptBoxUploadButton {...props.uploadButtonProps} />
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


[PromptBoxUploadButtonProps]({% slug api_conversational-ui_promptboxuploadbuttonprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;ButtonHandle&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the PromptBoxUploadButton component.


</td>
</tr>
</tbody>
</table>



