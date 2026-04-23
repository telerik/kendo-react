---
title: SplitButton
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the SplitButton."
api_reference: true
type: inner_api
slug: api_buttons_splitbutton
---

# SplitButton
Represents the [KendoReact SplitButton component](https://www.telerik.com/kendo-react-ui/components/buttons/splitbutton).

```jsx
const App = () => {
       return (
           <SplitButton text="Act">
               <SplitButtonItem text="Item1" />
               <SplitButtonItem text="Item2" />
               <SplitButtonItem text="Item3" />
           </SplitButton>
       );
}
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


#### element


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLButtonElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The DOM element of main button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


Readonly&lt;[SplitButtonProps]({% slug api_buttons_splitbuttonprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the SplitButton component.


</td>
</tr>
</tbody>
</table>



