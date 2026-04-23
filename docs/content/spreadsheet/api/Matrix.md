---
title: Matrix
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the Matrix."
api_reference: true
type: inner_api
slug: api_spreadsheet_matrix
---

# Matrix
The "matrix" type which can be used in the custom JavaScript functions (primitives) in formulas.


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


#### height


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicate the height of the matrix.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicate the width of the matrix.


</td>
</tr>
</tbody>
</table>



## Constructors

### Matrix
<code>


(context: [Context]({% slug api_spreadsheet_context %}))


</code>


#### Parameters
##### context
<code>


[Context]({% slug api_spreadsheet_context %})


</code>




## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### clone


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns a new matrix with the same data.


</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


[Matrix]({% slug api_spreadsheet_matrix %})


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### determinant


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the determinant of this matrix. The matrix should contain only numbers and be square. Note that there are no checks for this.


</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


number


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### each


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Iterates through elements of the matrix and calling the `func` for each element (first columns, then rows).


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


func


</td>
<td type>


<code>


(value: any, row: number, column: number) => void


</code>


</td>
<td>


The function which will be called for each element.


</td>
</tr>
<tr>
<td>


includeEmpty


</td>
<td type>


<code>


boolean


</code>


</td>
<td>


If `true`, it will call the function for empty (`null`) elements as well. Otherwise, it only calls it where a value exists.


</td>
</tr>
</tbody>
</table>
</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### get


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the element at a given location.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


row


</td>
<td type>


<code>


number


</code>


</td>
<td>





</td>
</tr>
<tr>
<td>


col


</td>
<td type>


<code>


number


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


any


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### inverse


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the inverse of this matrix. The matrix should contain only numbers and be square.
Note that there are no checks for this. If the inverse does not exist, the determinant is zero, then it returns `null`.


</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


"null" | [Matrix]({% slug api_spreadsheet_matrix %})


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### map


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Similar to `each`, but produces a new matrix of the same shape as the original one with the values returned by the function.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


func


</td>
<td type>


<code>


(value: any, row: number, column: number) => void


</code>


</td>
<td>


The function which will be called for each element.


</td>
</tr>
<tr>
<td>


includeEmpty


</td>
<td type>


<code>


boolean


</code>


</td>
<td>


If `true`, it will call the function for empty (`null`) elements as well. Otherwise, it only calls it where a value exists.


</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


[Matrix]({% slug api_spreadsheet_matrix %})


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### multiply


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Multiplies the current matrix by the given matrix, and returns a new matrix as the result.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


m


</td>
<td type>


<code>


[Matrix]({% slug api_spreadsheet_matrix %})


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


[Matrix]({% slug api_spreadsheet_matrix %})


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### set


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Sets the element at a given location.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


row


</td>
<td type>


<code>


number


</code>


</td>
<td>





</td>
</tr>
<tr>
<td>


col


</td>
<td type>


<code>


number


</code>


</td>
<td>





</td>
</tr>
<tr>
<td>


value


</td>
<td type>


<code>


any


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### transpose


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the transposed matrix. The rows of the original matrix become columns of the transposed one.


</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


[Matrix]({% slug api_spreadsheet_matrix %})


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### unit


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the unit square matrix of size `n`.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


n


</td>
<td type>


<code>


number


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


[Matrix]({% slug api_spreadsheet_matrix %})


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



