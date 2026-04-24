---
title: Grid
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the Grid."
api_reference: true
type: inner_api
slug: api_grid_grid
---

# Grid
Represents the [KendoReact Grid component](https://www.telerik.com/kendo-react-ui/components/grid).

A [Functional Component](https://react.dev/reference/react/Component).




```jsx
const App = () => {
    const [data, setData] = useState([
        { foo: 'A1', bar: 'B1' },
        { foo: 'A2', bar: 'B2' },
        { foo: 'A3', bar: 'B2' }
    ]);

    return (
        <Grid data={data} reorderable={true}>
            <GridColumn field="foo" />
            <GridColumn field="bar" />
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


[GridProps]({% slug api_grid_gridprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [GridHandle]({% slug api_grid_gridhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Grid component.


</td>
</tr>
</tbody>
</table>



