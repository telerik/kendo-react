---
title: Spreadsheet
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the Spreadsheet."
api_reference: true
type: inner_api
slug: api_spreadsheet_spreadsheet
---

# Spreadsheet
Represents the [KendoReact Spreadsheet component](https://www.telerik.com/kendo-react-ui/components/spreadsheet).

Accepts properties of type [SpreadsheetProps](https://www.telerik.com/kendo-react-ui/components/spreadsheet/api/spreadsheetprops).
Obtaining the ref will give you an object of type [SpreadsheetHandle](https://www.telerik.com/kendo-react-ui/components/spreadsheet/api/spreadsheethandle).

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const sheets = [
  {
    name: 'Food Order',
    rows: [
      {
        cells: [
          {
            value: 216321,
            textAlign: 'center',
          },
        ],
      },
    ],
    columns: [
      {
        width: 100,
      },
    ],
  },
];
const App = () => {
  return (
    <Spreadsheet
      style={{
        width: "100%",
        height: 680,
      }}
      defaultProps={{
        sheets,
      }}
    />
  );
};
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


[SpreadsheetProps]({% slug api_spreadsheet_spreadsheetprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [SpreadsheetHandle]({% slug api_spreadsheet_spreadsheethandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Spreadsheet component.


</td>
</tr>
</tbody>
</table>



