---
title: SpreadsheetProps
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the SpreadsheetProps."
api_reference: true
type: inner_api
slug: api_spreadsheet_spreadsheetprops
---

# SpreadsheetProps



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


Sets additional classes to the Spreadsheet.

```jsx
<Spreadsheet className="custom-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultProps?


</td>
<td type class="table-cell-type">


<code>


[SpreadsheetOptions]({% slug api_spreadsheet_spreadsheetoptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the default props of the Spreadsheet.

```jsx
<Spreadsheet defaultProps={{ toolbar: true }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [SpreadsheetChangeEvent]({% slug api_spreadsheet_spreadsheetchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when a value in the Spreadsheet has been changed.

```jsx
<Spreadsheet onChange={(event) => console.log(event.range)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChangeFormat?


</td>
<td type class="table-cell-type">


<code>


(event: [SpreadsheetChangeEvent]({% slug api_spreadsheet_spreadsheetchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the range format is changed from the UI.

```jsx
<Spreadsheet onChangeFormat={(event) => console.log(event.range)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExcelExport?


</td>
<td type class="table-cell-type">


<code>


(event: [SpreadsheetExcelExportEvent]({% slug api_spreadsheet_spreadsheetexcelexportevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the Export to Excel toolbar button.

```jsx
<Spreadsheet onExcelExport={(event) => console.log(event.workbook)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExcelImport?


</td>
<td type class="table-cell-type">


<code>


(event: [SpreadsheetExcelImportEvent]({% slug api_spreadsheet_spreadsheetexcelimportevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the user clicks the Open toolbar button.

```jsx
<Spreadsheet onExcelImport={(event) => console.log(event.file)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelect?


</td>
<td type class="table-cell-type">


<code>


(event: [SpreadsheetSelectEvent]({% slug api_spreadsheet_spreadsheetselectevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the Spreadsheet selection is changed.

```jsx
<Spreadsheet onSelect={(event) => console.log(event.range)} />
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


Specifies the styles that will be applied to the wrapping element.

```jsx
<Spreadsheet style={{ height: '500px' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### toolbar?


</td>
<td type class="table-cell-type">


<code>


boolean | [SpreadsheetTab]({% slug api_spreadsheet_spreadsheettab %})[]


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


A Boolean value which indicates if the toolbar will be displayed. It also allows customizing the tabs' content.




```jsx
<Spreadsheet toolbar={false} />
<Spreadsheet toolbar={[{ text: "Custom Tab", tools: [CustomToolComponent] }]} />
```



</td>
</tr>
</tbody>
</table>



