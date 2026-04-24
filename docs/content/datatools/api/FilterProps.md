---
title: FilterProps
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the FilterProps."
api_reference: true
type: inner_api
slug: api_data-tools_filterprops
---

# FilterProps
The props of the Filter component.


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


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides an accessible label for the Filter's container component.
Similar to the [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelExpression?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides an accessible label for the Filter's underlying Expression component.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelGroup?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides an accessible label for the Filter's underlying Group component.





</td>
</tr>
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


Adds custom CSS classes to the Filter's root element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultGroupFilter?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the initial composite filter descriptor used when a new group is created.

```ts
defaultGroupFilter: {
  logic: "and",
  filters: []
}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### fields


</td>
<td type class="table-cell-type">


<code>


[FieldSettings]({% slug api_data-tools_fieldsettings %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the field settings for the Filter. Each field represents a filterable column.

```ts
fields: [
  { name: "ProductName", label: "Product Name", type: "string" },
  { name: "Price", label: "Price", type: "number" }
]
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange


</td>
<td type class="table-cell-type">


<code>


(event: [FilterChangeEvent]({% slug api_data-tools_filterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Filter onChange event.


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


Applies custom styles to the Filter's root element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the composite filter descriptor value.
This object defines the current state of the applied filters.

```ts
value: {
  logic: "and",
  filters: [
    { field: "ProductName", operator: "contains", value: "Chai" },
    { field: "Price", operator: "gte", value: 20 }
  ]
}
```



</td>
</tr>
</tbody>
</table>



