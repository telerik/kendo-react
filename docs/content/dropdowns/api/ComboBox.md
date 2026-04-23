---
title: ComboBox
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the ComboBox."
api_reference: true
type: inner_api
slug: api_dropdowns_combobox
---

# ComboBox
Represents the [KendoReact ComboBox component](https://www.telerik.com/kendo-react-ui/components/dropdowns/combobox).

Accepts properties of type [ComboBoxProps](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/comboboxprops).
Obtaining the `ref` returns an object of type [ComboBoxHandle](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/comboboxhandle).

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const App = () => {
   const combobox = React.useRef(null);
   return (
      <div>
          <ComboBox
              data={[ "Albania", "Andorra", "Austria", "Belarus" ]}
              ref={combobox}
          />
          <Button onClick={() => alert(combobox.current.value)}>alert value</Button>
      </div>
   );
}
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


[ComboBoxProps]({% slug api_dropdowns_comboboxprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the ComboBox component.


</td>
</tr>
</tbody>
</table>



