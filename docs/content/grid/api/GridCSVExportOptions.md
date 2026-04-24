---
title: GridCSVExportOptions
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridCSVExportOptions."
api_reference: true
type: inner_api
slug: api_grid_gridcsvexportoptions
---

# GridCSVExportOptions
Represents the CSV export options for the Grid component.
Extends CSVExportOptions from @progress/kendo-csv with all properties optional.

```tsx
<Grid csv={{
  fileName: 'export.csv',
  preventFormulaInjection: true,
  keys: ['ProductID', 'ProductName'],
  names: ['ID', 'Name']
}} />
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


#### allPages?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies whether to export all pages or only the current page when paging is enabled.
When `true`, exports all data ignoring pagination.
When `false`, exports only the current page of data.




```tsx
// Export only the current page
<Grid csv={{ allPages: false }} />

// Export all pages (default behavior)
<Grid csv={{ allPages: true }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


"null" | any[] | DataResult


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Optional data to export to CSV instead of using the Grid's data prop.
Useful when you want to export different data than what's displayed in the Grid.

```tsx
<Grid csv={{ data: customExportData, fileName: 'export.csv' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### delimiter?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Character used to separate values in a row. Must be a single character.
Common delimiters: "," (default), ";", "|", "\t" (tab).
Invalid delimiters automatically fall back to comma.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fileName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"grid-export.csv"


</code>


</td>
<td class="table-cell-comment">


Specifies the name of the exported CSV file.




```tsx
<Grid csv={{ fileName: 'my-data.csv' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupHeaderFormatter?


</td>
<td type class="table-cell-type">


<code>


(displayNames: string[]) => string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom formatter for group header in grouped data exports.
Receives the display names of grouped fields, returns the formatted header.
Default: Joins display names with '/' separator (e.g., "Region/Category").




```ts
groupHeaderFormatter: (names) => names.join(' > ')
// Results in: "Region > Category"
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupValueFormatter?


</td>
<td type class="table-cell-type">


<code>


(values: any[], groupNames: string[]) => string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom formatter for group value rows in grouped data exports.
Receives the values and field names, returns the formatted group value.
Default: Joins values with '/' separator (e.g., "North/Electronics").




```ts
groupValueFormatter: (values) => values.join(' > ')
// Results in: "North > Electronics"
```


```ts
groupValueFormatter: (values, names) =>
  values.map((v, i) => `${names[i]}: ${v}`).join(' | ')
// Results in: "region: North | category: Electronics"
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### includeUTF8BOM?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


When true, adds a UTF-8 Byte Order Mark (BOM) at the beginning of the file.
Helps applications like Microsoft Excel correctly recognize UTF-8 encoding.
Recommended when data contains non-ASCII characters (accents, emojis, etc.).
Default: false.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### keys?


</td>
<td type class="table-cell-type">


<code>


"null" | string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Property names to extract from object/Map rows, in order.
Required when data contains objects or Maps (unless `names` is provided).
Defaults to `names` if not specified.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### lineSeparator?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


String used to terminate each line.
Default: "\r\n" (CRLF, Windows/CSV standard).
Alternative: "\n" (LF, Unix/macOS).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxCellLength?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Maximum number of characters allowed per cell.
Values exceeding this limit are truncated.
Default: 32767 (Excel's maximum cell length).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxColumns?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Maximum number of columns to export.
Keys/columns exceeding this limit are automatically truncated.
Default: 1000 (prevents memory exhaustion and DoS attacks).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxRows?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Maximum number of rows to export.
Data exceeding this limit is automatically truncated.
Default: 1000000 (prevents memory exhaustion and DoS attacks).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### names?


</td>
<td type class="table-cell-type">


<code>


"null" | string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Optional column headers to render on the first line.
If provided, also used as default for `keys` when data contains objects/Maps.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### preventFormulaInjection?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


When true, prefixes potentially dangerous formula characters (=, +, -, @, tab, \r)
with a single quote (') to prevent formula injection attacks in spreadsheet applications.
Default: true (recommended for security).


</td>
</tr>
</tbody>
</table>



