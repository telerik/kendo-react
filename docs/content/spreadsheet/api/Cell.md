---
title: Cell
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the Cell."
api_reference: true
type: inner_api
slug: api_spreadsheet_cell
---

# Cell
Represents the interface of a Spreadsheet cell.


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


#### background?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The background [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### bold?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, sets the cell font to bold.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### borderBottom?


</td>
<td type class="table-cell-type">


<code>


[CellBorder]({% slug api_spreadsheet_cellborder %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The style information for the bottom border of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### borderLeft?


</td>
<td type class="table-cell-type">


<code>


[CellBorder]({% slug api_spreadsheet_cellborder %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The style information for the left border of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### borderRight?


</td>
<td type class="table-cell-type">


<code>


[CellBorder]({% slug api_spreadsheet_cellborder %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The style information for the right border of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### borderTop?


</td>
<td type class="table-cell-type">


<code>


[CellBorder]({% slug api_spreadsheet_cellborder %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The style information for the top border of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### color?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The text [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### enable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `false`, disables the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fontFamily?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The font family of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fontSize?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The font size of the cell in pixels.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### format?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The format of the cell text. For more information, refer to the article on
[creating or deleting a custom number format on MS Office](https://support.office.com/en-au/article/Create-or-delete-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### formula?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The cell formula without the leading equals sign, for example, `A1 * 10`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### html?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, renders the cell value as HTML.
It is important to sanitize the value of the cell on the server for passing safe html because there is no client-side sanitizing.
When editing a cell the new value can be checked and prevented in the client `changing` event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### index?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The zero-based index of the cell. Required to ensure correct positioning.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### italic?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, sets the cell font to italic.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### link?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The hyperlink (URL) of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### textAlign?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The text-align setting for the cell content.

The available options are: `left`, `center`, `right` or `justify`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### underline?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, sets the cell font to underline.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


string | number | boolean | Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The cell value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### verticalAlign?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The vertical align setting for the cell content.

The available options are: `top`, `center` or `bottom`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### wrap?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, sets the cell wrap.


</td>
</tr>
</tbody>
</table>



