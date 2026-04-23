---
title: GridHandle
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridHandle."
api_reference: true
type: inner_api
slug: api_grid_gridhandle
---

# GridHandle
Represent the `ref` of the Grid component.


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


#### columns


</td>
<td type class="table-cell-type">


<code>


[GridColumnProps]({% slug api_grid_gridcolumnprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A getter of the current columns. Gets the current column width or current columns, or any other [`GridColumnProps`](https://www.telerik.com/kendo-react-ui/components/grid/api/gridcolumnprops) for each defined column. Can be used on each Grid instance. To obtain the instance of the rendered Grid, use the `ref` callback. The following example demonstrates how to reorder the columns by dragging their handlers and check the properties afterwards. You can check the result in the browser console.

```jsx
const App = () => {
    const [data, setData] = useState([
        { foo: 'A1', bar: 'B1' },
        { foo: 'A2', bar: 'B2' },
        { foo: 'A3', bar: 'B2' }
    ]);

    const grid = useRef<GridHandle>();

    return (
        <div>
            <Grid data={data} reorderable={true} ref={grid}>
                <GridColumn field="foo" />
                <GridColumn field="bar" />
            </Grid>
            <Button onClick={() => console.log(JSON.stringify(grid.current?.columns))}>
                log current properties into browser console.
            </Button>
        </div>
    );
};

export default App;
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### element


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLDivElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns the HTML element of the Grid component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### exportAsPdf


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Method to trigger a PDF export of the Grid.
The 'pdf' prop of the Grid should be set to true or object of setting that will be applied the exported Grid.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fitColumns


</td>
<td type class="table-cell-type">


<code>


(columnIds: string[]) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Method to fit columns according to their content.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### getCsvBlob


</td>
<td type class="table-cell-type">


<code>


() => "null" | Blob


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Method to get the CSV export as a Blob without triggering a download.
Useful for uploading to a server or custom file handling.
The 'csv' prop of the Grid should be set to true or an object of settings.




```jsx
const grid = useRef<GridHandle>(null);
const blob = grid.current?.getCsvBlob();
if (blob) {
    // Upload to server or custom handling
    await uploadToServer(blob);
}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### getLeafDataItems


</td>
<td type class="table-cell-type">


<code>


() => any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Gets all leaf-level data items in the grid.
Returns actual data rows excluding group headers/footers.
Useful for AI operations and data processing.




```jsx
const grid = useRef<GridHandle>(null);
const dataItems = grid.current?.getLeafDataItems();
console.log(`Leaf items: ${dataItems.length}`);
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### getTotal


</td>
<td type class="table-cell-type">


<code>


() => number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Gets the total number of items in the grid data source.
Used for pagination calculations and AI operations.




```jsx
const grid = useRef<GridHandle>(null);
const total = grid.current?.getTotal();
console.log(`Total items: ${total}`);
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


[GridProps]({% slug api_grid_gridprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props values of the Spreadsheet.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### saveAsCsv


</td>
<td type class="table-cell-type">


<code>


() => Promise&lt;void&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Method to trigger a CSV export of the Grid and save the file.
The 'csv' prop of the Grid should be set to true or an object of settings.
Returns a Promise that resolves when the export is triggered.




```jsx
const grid = useRef<GridHandle>(null);
await grid.current?.saveAsCsv();
console.log('Export triggered!');
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollIntoView


</td>
<td type class="table-cell-type">


<code>


(options: { rowIndex: number; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Method to allow the scroll to be set to a specific row index when the Grid is scrollable. It is zero based.


</td>
</tr>
</tbody>
</table>



