---
title: MultiColumnComboBox
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the MultiColumnComboBox."
api_reference: true
type: inner_api
slug: api_dropdowns_multicolumncombobox
---

# MultiColumnComboBox
Represents the MultiColumnComboBox component.

Accepts properties of type [MultiColumnComboBoxProps](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/multicolumncomboboxprops).
Obtaining the `ref` returns an object of type [MultiColumnComboBoxHandle](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/multicolumncomboboxhandle).

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const columns = [
 {
   field: "id",
   header: "ID",
   width: "100px",
 },
 {
   field: "name",
   header: "Name",
   width: "300px",
 },
 {
   field: "position",
   header: "Position",
   width: "300px",
  },
];
const App = () => {
  return (
    <div>
      <div>Employees:</div>
      <MultiColumnComboBox
        data={employees}
        columns={columns}
        textField={"name"}
        style={{
          width: "300px",
        }}
        placeholder="Please select ..."
      />
    </div>
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


[MultiColumnComboBoxProps]({% slug api_dropdowns_multicolumncomboboxprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [MultiColumnComboBoxHandle]({% slug api_dropdowns_multicolumncomboboxhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the MultiColumnComboBox component.


</td>
</tr>
</tbody>
</table>



