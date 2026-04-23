---
title: FormElementProps
description: "Learn how to build custom functionality when working with the React Form by Kendo UI with the help of the FormElementProps."
api_reference: true
type: inner_api
slug: api_form_formelementprops
---

# FormElementProps
Represents the props of the KendoReact FormElement component.


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


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a class for the form DOM element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cols?


</td>
<td type class="table-cell-type">


<code>


number | [ResponsiveFormBreakPoint]({% slug api_form_responsiveformbreakpoint %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the number of columns in the form. Can be a number or an array of responsive breakpoints.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### gutters?


</td>
<td type class="table-cell-type">


<code>


string | number | [ResponsiveFormBreakPoint]({% slug api_form_responsiveformbreakpoint %})[] | [Gutters]({% slug api_form_gutters %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the gutters for the form. You can specify gutters for rows and columns. Number is equivalent to px.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### horizontal?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true` enable the horizontal layout of the form editors.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the id of the form DOM element. Takes priority over the Form's id.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the Form.

The available options are:
- small
- medium
- large




```jsx
<FormElement size="large" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The styles that are applied to the form DOM element.


</td>
</tr>
</tbody>
</table>



