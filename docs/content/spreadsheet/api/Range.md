---
title: Range
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the Range."
api_reference: true
type: inner_api
slug: api_spreadsheet_range
---

# Range
Represents one or more rectangular regions of cells in a given Sheet.



## Constructors

### Range
<code>


()


</code>




## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### background


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the background color of the cells in the range.





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


value?


</td>
<td type>


<code>


string


</code>


</td>
<td>


Any valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).


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


string


</code>


</td>
<td>


the current background color of the top-left cell of the range.


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


#### bold


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the bold state of the cells in the range.





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


value?


</td>
<td type>


<code>


boolean


</code>


</td>
<td>


True to make the text bold; false otherwise.


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


boolean


</code>


</td>
<td>


the current bold state of the top-left cell of the range.


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


#### borderBottom


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the state of the bottom border of the cells. If the range includes more than a single cell, the setting is applied to all cells.





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


value?


</td>
<td type>


<code>


[CellBorder]({% slug api_spreadsheet_cellborder %})


</code>


</td>
<td>


The border configuration object. It may contain size and color keys.


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


[CellBorder]({% slug api_spreadsheet_cellborder %})


</code>


</td>
<td>


the current value of the top-left cell of the range.


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


#### borderLeft


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the state of the left border of the cells. If the range includes more than a single cell, the setting is applied to all cells.





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


value?


</td>
<td type>


<code>


[CellBorder]({% slug api_spreadsheet_cellborder %})


</code>


</td>
<td>


The border configuration object. It may contain size and color keys.


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


[CellBorder]({% slug api_spreadsheet_cellborder %})


</code>


</td>
<td>


the current value of the top-left cell of the range.


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


#### borderRight


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the state of the right border of the cells. If the range includes more than a single cell, the setting is applied to all cells.





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


value?


</td>
<td type>


<code>


[CellBorder]({% slug api_spreadsheet_cellborder %})


</code>


</td>
<td>


The border configuration object. It may contain size and color keys.


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


[CellBorder]({% slug api_spreadsheet_cellborder %})


</code>


</td>
<td>


the current value of the top-left cell of the range.


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


#### borderTop


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the state of the top border of the cells. If the range includes more than a single cell, the setting is applied to all cells.





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


value?


</td>
<td type>


<code>


[CellBorder]({% slug api_spreadsheet_cellborder %})


</code>


</td>
<td>


The border configuration object. It may contain size and color keys.


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


[CellBorder]({% slug api_spreadsheet_cellborder %})


</code>


</td>
<td>


the current value of the top-left cell of the range.


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


#### clear


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Clears the contents of the range cells.


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


value?


</td>
<td type>


<code>


{ contentsOnly?: boolean; formatOnly: boolean; }


</code>


</td>
<td>


An object which may contain `contentsOnly: true` or `formatOnly: true` key values. Clearing the format will remove the cell formatting and visual styles.
If a parameter is not passed, the method will clear both the cells values and the formatting.


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


#### color


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the text color of the cells in the range.





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


value?


</td>
<td type>


<code>


string


</code>


</td>
<td>


Any valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).


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


string


</code>


</td>
<td>


the current text color of the top-left cell of the range.


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


#### enable


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the disabled state of the cells in the range.





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


value?


</td>
<td type>


<code>


boolean


</code>


</td>
<td>


True to make the cell enabled; false to disable it.


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


boolean


</code>


</td>
<td>


the current disabled state of the top-left cell of the range.


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


#### fontFamily


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the font family of the cells in the range.





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


value?


</td>
<td type>


<code>


string


</code>


</td>
<td>


The font family that should be set.


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


string


</code>


</td>
<td>


the font family of the top-left cell of the range.


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


#### fontSize


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the font size of the cells in the range.





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


value?


</td>
<td type>


<code>


number


</code>


</td>
<td>


The font size (in pixels) that should be set.


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


number


</code>


</td>
<td>


the font size of the top-left cell of the range.


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


#### forEachCell


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Executes a function for each cell in the range.


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


value


</td>
<td type>


<code>


(rowIndex: number, columnIndex: number, cellProperties: [Cell]({% slug api_spreadsheet_cell %})) => void


</code>


</td>
<td>


The function that will be executed against every cell. The function receives the following parameters:
`rowIndex` - the row index of the cell,
`columnIndex` - the column index of the cell,
`cellProperties` - the cell properties


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


#### format


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the format of the cells.





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


value?


</td>
<td type>


<code>


string


</code>


</td>
<td>


The new format for the cells.


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


string


</code>


</td>
<td>


the format of the top-left cell of the range. When used as a setter, format returns the Range object to allow chained calls.


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


#### formula


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the formula of the cells.





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


value?


</td>
<td type>


<code>


string


</code>


</td>
<td>


The new formula of the cell. The string may optionally start with `=`.


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


string


</code>


</td>
<td>


the formula of the top-left cell of the range.


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


#### input


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the value of the cells. This is similar to `value`, but it parses the argument as if it was entered through the text box:
- if it starts with `=` (equal sign), a formula is set. This may throw an error if the formula is syntactically invalid. Example: `range("C1").input("=A1+B1")`.
- if it looks like a number, a numeric value (not string) is set.
- if it's `true` or `false` (case-insensitive) the respective boolean value is set.
- if it's a `Date` object, or a string that can be parsed as a date, it is converted to the numerical representation of the date.
- if it starts with `'` (single quote), a string containing the rest of the characters is set. Example: `range("A1").input("'TRUE")` — sets the text "TRUE", not the boolean.





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


value?


</td>
<td type>


<code>


string | number | Date


</code>


</td>
<td>


The value to be set to the cells.


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


the current value of the top-left cell of the range.


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


#### italic


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the italic state of the cells in the range.





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


value?


</td>
<td type>


<code>


boolean


</code>


</td>
<td>


True will make the text of the cells italic; false otherwise.


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


boolean


</code>


</td>
<td>


the current italic state of the top-left cell of the range.


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


#### link


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the hyperlink of the cells in the range.





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


value?


</td>
<td type>


<code>


string


</code>


</td>
<td>


Pass a string (the URL) to create a hyperlink. Pass `null` to remove the link. Omit argument to get the existing URL, if any.


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


the current hyperlink attribute of the top-left cell of the range.


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


#### select


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Sets the sheet selection to the range cells.


</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### textAlign


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the text alignment of the cells in the range.





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


value?


</td>
<td type>


<code>


string


</code>


</td>
<td>


One of the following values: "left", "center", "right" and "justify".


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


string


</code>


</td>
<td>


the current text alignment of the top-left cell of the range.


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


#### value


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the value of the cells. If the cell has formula set, the value setting will clear it.





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


value?


</td>
<td type>


<code>


string | number | Date


</code>


</td>
<td>


The value to be set to the cells.


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


the current value of the top-left cell of the range.


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


#### verticalAlign


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the vertical alignment of the cells in the range.





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


value?


</td>
<td type>


<code>


string


</code>


</td>
<td>


One of the following values: "top", "center" and "bottom".


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


string


</code>


</td>
<td>


the current text alignment of the top-left cell of the range.


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


#### wrap


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the wrap of the range cells.





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


value?


</td>
<td type>


<code>


boolean


</code>


</td>
<td>


`true` if to enable wrapping, `false` otherwise.


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


boolean


</code>


</td>
<td>


the current wrap state of the top-left cell of the range.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



