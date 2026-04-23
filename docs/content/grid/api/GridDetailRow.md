---
title: GridDetailRow
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridDetailRow."
api_reference: true
type: inner_api
slug: api_grid_griddetailrow
---

# GridDetailRow
Represents the detail row class of the KendoReact Grid. Used to define custom details for each row. Can be applied for building the hierarchy. The details for each row will be visible or hidden depending on the current `detailExpand` prop.

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const CustomGridDetailRow = (props) => {
    const detailData = props.dataItem.MasterField2;
    return (
        <div>
            This is detail template with another grid inside it
            <Grid scrollable="none" data={detailData} />
        </div>
    );
};

const App = () => {
    const [data, setData] = useState([
        { MasterField1: 'A1', MasterField2: [{ DetailField1: 1, DetailField2: 2 }] },
        { MasterField1: 'B1', MasterField2: [{ DetailField1: 3, DetailField2: 4 }] },
        { MasterField1: 'C1', MasterField2: [{ DetailField1: 5, DetailField2: 6 }] }
    ]);

    return (
        <Grid data={data} detail={CustomGridDetailRow}>
            <GridColumn field="MasterField1" />
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


[GridDetailRowProps]({% slug api_grid_griddetailrowprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the GridDetailRow component.


</td>
</tr>
</tbody>
</table>



