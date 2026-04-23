---
title: GridColumnMenuFilter
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridColumnMenuFilter."
api_reference: true
type: inner_api
slug: api_grid_gridcolumnmenufilter
---

# GridColumnMenuFilter
A [Functional Component](https://react.dev/reference/react/Component).

```jsx-no-run
const TextColumnMenu = (props) => {
  return (
    <div>
      <GridColumnMenuSort {...props} />
      <GridColumnMenuFilter {...props} />
    </div>
  );
};

const App = () => {
  const [state, setState] = React.useState(
    createAppState({
      take: 10,
      skip: 0,
    })
  );

  function createAppState(dataState) {
    return {
      result: process(products.slice(0), dataState),
      dataState: dataState,
    };
  }

  const dataStateChange = (event) => {
    setState(createAppState(event.dataState));
  };

  return (
    <Grid
      data={state.result}
      {...state.dataState}
      onDataStateChange={dataStateChange}
      sortable={true}
      pageable={true}
    >
      <GridColumn field="ProductID" title="Product ID" />
      <GridColumn field="ProductName" columnMenu={TextColumnMenu} />
    </Grid>
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


[GridColumnMenuFilterProps]({% slug api_grid_gridcolumnmenufilterprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the GridColumnMenuFilter component.


</td>
</tr>
</tbody>
</table>



