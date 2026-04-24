---
title: DropDownTree
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the DropDownTree."
api_reference: true
type: inner_api
slug: api_dropdowns_dropdowntree
---

# DropDownTree
Represents the DropDownTree component.

Accepts properties of type [DropDownTreeProps](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/dropdowntreeprops).
Obtaining the `ref` returns an object of type [DropDownTreeHandle](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/dropdowntreehandle).

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const selectField = "selected";
const expandField = "expanded";
const dataItemKey = "id";
const textField = "text";
const subItemsField = "items";
const fields = {
 selectField,
 expandField,
 dataItemKey,
 subItemsField,
};
 const App = () => {
 const [value, setValue] = React.useState(null);
 const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);
 const onChange = (event) => setValue(event.value);
 const onExpandChange = React.useCallback(
   (event) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
   [expanded]
 );
 const treeData = React.useMemo(
   () =>
     processTreeData(
       data,
       {
         expanded,
         value,
       },
       fields
     ),
   [expanded, value]
 );

 return (
     <DropDownTree
       style={{
         width: '300px',
       }}
       placeholder="Please select ..."
       data={treeData}
       value={value}
       onChange={onChange}
       textField={textField}
       dataItemKey={dataItemKey}
       selectField={selectField}
       expandField={expandField}
       onExpandChange={onExpandChange}
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


[DropDownTreeProps]({% slug api_dropdowns_dropdowntreeprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [DropDownTreeHandle]({% slug api_dropdowns_dropdowntreehandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the DropDownTree component.


</td>
</tr>
</tbody>
</table>



