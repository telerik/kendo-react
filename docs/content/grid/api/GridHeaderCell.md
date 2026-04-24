---
title: GridHeaderCell
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridHeaderCell."
api_reference: true
type: inner_api
slug: api_grid_gridheadercell
---

# GridHeaderCell
A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const App = () => {
    const [data, setData] = useState([
        { foo: 'A1', bar: 'B1', b1: 1, b2: 2 },
        { foo: 'A2', bar: 'B2', b1: 3, b2: 4 },
        { foo: 'A3', bar: 'B2', b1: 5, b2: 6 }
    ]);
    const [barDetails, setBarDetails] = useState(false);

    const CustomHeaderCell = (props: CustomCellProps) => (
      <td
          {...props.tdProps}
          colSpan={1}>
          <span>
              {props.title || props.field + ' '}
              <Button onClick={() => setBarDetails(!barDetails)}>
                  {barDetails ? 'collapse' : 'expand'}
              </Button>
              {props.children}
          </span>
      </td>
    );

    return (
        <Grid style={{ height: '420px' }} data={data} reorderable={true}>
            <GridColumn field="foo" />
            <GridColumn field="bar" cells={{ headerCell: CustomHeaderCell }}>
                {barDetails && [<GridColumn field="b1" />, <GridColumn field="b2" />]}
            </GridColumn>
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


[GridHeaderCellProps]({% slug api_grid_gridheadercellprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the GridHeaderCell component.


</td>
</tr>
</tbody>
</table>



