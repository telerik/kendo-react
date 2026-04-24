---
title: GridColumnMenuSort
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridColumnMenuSort."
api_reference: true
type: inner_api
slug: api_grid_gridcolumnmenusort
---

# GridColumnMenuSort
A [Functional Component](https://react.dev/reference/react/Component).

```jsx-no-run
const ColumnMenu = (props) => {
    return (
        <div>
            <GridColumnMenuSort {...props} />
        </div>
    );
};

const initialState = {
    take: 10,
    skip: 0
};

const App = () => {
    const [dataState, setDataState] = useState(initialState);
    const [result, setResult] = useState(process(products.slice(0), initialState));

    const dataStateChange = (event) => {
        setDataState(event.dataState);
        setResult(process(products.slice(0), event.dataState));
    };

    return (
        <div>
            <div>
                <Grid
                    data={result}
                    {...dataState}
                    onDataStateChange={dataStateChange}
                    sortable={true}
                    pageable={true}
                >
                    <Column field="ProductID" title="Product ID" columnMenu={ColumnMenu} />
                    <Column field="ProductName" />
                </Grid>
                <br />
            </div>
        </div>
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


[GridColumnMenuSortProps]({% slug api_grid_gridcolumnmenusortprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the GridColumnMenuSort component.


</td>
</tr>
</tbody>
</table>



