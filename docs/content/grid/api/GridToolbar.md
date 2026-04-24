---
title: GridToolbar
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridToolbar."
api_reference: true
type: inner_api
slug: api_grid_gridtoolbar
---

# GridToolbar
Represents the GridToolbar component.

A [Functional Component](https://react.dev/reference/react/Component).




```jsx
const App = () => {
    const [data, setData] = useState([
        { Column1: 'A1', Column2: 'A2' },
        { Column1: 'B1', Column2: 'B2' },
        { Column1: 'C1', Column2: 'C2' }
    ]);

    const customClick = () => {
        alert('Custom handler in custom toolbar');
    };

    return (
        <Grid data={data}>
            <GridToolbar>
                <Button title="Click" onClick={customClick}>
                    Click
                </Button>
            </GridToolbar>
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


[GridToolbarProps]({% slug api_grid_gridtoolbarprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the GridToolbar component.


</td>
</tr>
</tbody>
</table>



