---
title: MaskedTextBoxHandle
description: "Learn how to build custom functionality when working with the React Inputs by Kendo UI with the help of the MaskedTextBoxHandle."
api_reference: true
type: inner_api
slug: api_inputs_maskedtextboxhandle
---

# MaskedTextBoxHandle
Represent the `ref` of the MaskedTextBox component.


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


#### element


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLInputElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Gets the element of the MaskedTextBox.

```jsx
const App = () => {
  const [element, setElement] = React.useState(null);

  return (
     <div>
         <MaskedTextBox
             ref={(component) =>
                 setElement(component ? component.element : null)}
         />
         <Button onClick={() => console.log(element)}>console.log the element</Button>
     </div>
  );
}
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### name


</td>
<td type class="table-cell-type">


<code>


undefined | string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Gets the `name` property of the MaskedTextBox.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


Readonly&lt;[MaskedTextBoxProps]({% slug api_inputs_maskedtextboxprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the MaskedTextBoxHandle component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rawValue


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Gets the raw value without the mask of the MaskedTextBox.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validity


</td>
<td type class="table-cell-type">


<code>


[FormComponentValidity]({% slug api_inputs_formcomponentvalidity %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the validity state into which the MaskedTextBox is set.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Gets the value with the mask of the MaskedTextBox.


</td>
</tr>
</tbody>
</table>



