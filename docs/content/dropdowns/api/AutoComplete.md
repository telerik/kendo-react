---
title: AutoComplete
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the AutoComplete."
api_reference: true
type: inner_api
slug: api_dropdowns_autocomplete
---

# AutoComplete
Represents the [KendoReact AutoComplete component](https://www.telerik.com/kendo-react-ui/components/dropdowns/autocomplete).

Accepts properties of type [AutoCompleteProps](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/autocompleteprops).
Obtaining the `ref` returns an object of type [AutoCompleteHandle](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/autocompletehandle).

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const App = () => {
   const autocomplete = React.useRef(null);
   return (
      <div>
          <AutoComplete
              data={[ "Albania", "Andorra", "Austria", "Belarus" ]}
              ref={autocomplete}
          />
          <Button onClick={() => alert(autocomplete.current.value)}>alert value</Button>
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


[AutoCompleteProps]({% slug api_dropdowns_autocompleteprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the AutoComplete component.


</td>
</tr>
</tbody>
</table>



