---
title: GridNoRecords
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridNoRecords."
api_reference: true
type: inner_api
slug: api_grid_gridnorecords
---

# GridNoRecords
Represents the GridNoRecords component. The component is rendered when the `data` property of the Grid is empty or `null`.

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const App = () => {
    return (
        <Grid data={[]}>
            <GridNoRecords>There is no data available</GridNoRecords>
            <GridColumn field="id" />
            <GridColumn field="name" />
        </Grid>
    );
};

export default App;
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


[GridNoRecordsProps]({% slug api_grid_gridnorecordsprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the GridNoRecords component.


</td>
</tr>
</tbody>
</table>



