---
title: MultiSelect
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the MultiSelect."
api_reference: true
type: inner_api
slug: api_dropdowns_multiselect
---

# MultiSelect
Represents the [KendoReact MultiSelect component](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect).

Accepts properties of type [MultiSelectProps](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/multiselectprops).
Obtaining the `ref` returns an object of type [MultiSelectHandle](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/multiselecthandle).

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const App = () => {
   const multiselect = React.useRef(null);
   return (
      <div>
          <MultiSelect
              data={[ "Albania", "Andorra", "Austria", "Belarus" ]}
              ref={multiselect}
          />
          <Button onClick={() => alert(multiselect.current.value)}>alert value</Button>
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


[MultiSelectProps]({% slug api_dropdowns_multiselectprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the MultiSelect component.


</td>
</tr>
</tbody>
</table>



