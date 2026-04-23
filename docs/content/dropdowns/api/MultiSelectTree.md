---
title: MultiSelectTree
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the MultiSelectTree."
api_reference: true
type: inner_api
slug: api_dropdowns_multiselecttree
---

# MultiSelectTree
Represents the MultiSelectTree component.

Accepts properties of type [MultiSelectTreeProps](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/multiselecttreeprops).
Obtaining the `ref` returns an object of type [MultiSelectTreeHandle](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/multiselecttreehandle).

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
  const dataItemKey = 'id';
  const checkField = 'checkField';
  const checkIndeterminateField = 'checkIndeterminateField';
  const subItemsField = 'items';
  const expandField = 'expanded';
  const textField = 'text';
  const fields = {
   dataItemKey,
   checkField,
   checkIndeterminateField,
   expandField,
   subItemsField,
  };
  const App = () => {
   const [value, setValue] = React.useState([]);
   const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);
   const onChange = (event) =>
      setValue(
      getMultiSelectTreeValue(data, {
          ...fields,
          ...event,
          value,
      })
      );
  const onExpandChange = React.useCallback(
      (event) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
      [expanded]
  );
  const treeData = React.useMemo(
      () =>
      processMultiSelectTreeData(data, {
          expanded,
          value,
          ...fields,
      }),
      [expanded, value]
  );

  return (
      <div>
      <div>Categories:</div>
      <MultiSelectTree
          style={{
          width: '300px',
          }}
          data={treeData}
          value={value}
          onChange={onChange}
          placeholder="Please select ..."
          textField={textField}
          dataItemKey={dataItemKey}
          checkField={checkField}
          checkIndeterminateField={checkIndeterminateField}
          expandField={expandField}
          subItemsField={subItemsField}
          onExpandChange={onExpandChange}
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


[MultiSelectTreeProps]({% slug api_dropdowns_multiselecttreeprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [MultiSelectTreeHandle]({% slug api_dropdowns_multiselecttreehandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the MultiSelectTree component.


</td>
</tr>
</tbody>
</table>



