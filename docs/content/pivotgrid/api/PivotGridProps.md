---
title: PivotGridProps
description: "Learn how to build custom functionality when working with the React PivotGrid by Kendo UI with the help of the PivotGridProps."
api_reference: true
type: inner_api
slug: api_pivotgrid_pivotgridprops
---

# PivotGridProps
Represents the props of the [KendoReact PivotGrid component](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgrid).


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


#### cell?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;[PivotGridCellProps]({% slug api_pivotgrid_pivotgridcellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `cell` component.

The default component is: [PivotGridCell](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridcell).

```jsx
<PivotGrid cell={(props) => <CustomCell {...props} />} />
```



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


Sets the `className` property of the top-most element of the PivotGrid in addition to the default `k-pivotgrid` class.

```jsx
<PivotGrid className="custom-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### column?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;[PivotGridColumnProps]({% slug api_pivotgrid_pivotgridcolumnprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `column` component.

The default component is: [PivotGridColumn](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridcolumn).

```jsx
<PivotGrid column={(props) => <CustomColumn {...props} />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnAxes?


</td>
<td type class="table-cell-type">


<code>


[PivotGridAxis]({% slug api_pivotgrid_pivotgridaxis %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the `column` axes.

```jsx
<PivotGrid columnAxes={[{ name: 'Category', expand: true }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnHeadersCell?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[PivotGridHeaderCellProps]({% slug api_pivotgrid_pivotgridheadercellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default column-headers `headerCell` component.

The default component is: [PivotGridHeaderCell](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridheadercell).

```jsx
<PivotGrid columnHeadersCell={(props) => <CustomHeaderCell {...props} />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnHeadersColumn?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[PivotGridColumnProps]({% slug api_pivotgrid_pivotgridcolumnprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default column-headers `column` component.

The default component is: [PivotGridColumn](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridcolumn).

```jsx
<PivotGrid columnHeadersColumn={(props) => <CustomColumn {...props} />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnHeadersRow?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[PivotGridRowProps]({% slug api_pivotgrid_pivotgridrowprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default column-headers `row` component.

The default component is: [PivotGridRow](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridrow).

```jsx
<PivotGrid columnHeadersRow={(props) => <CustomRow {...props} />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### columns?


</td>
<td type class="table-cell-type">


<code>


[Tuple]({% slug api_pivotgrid_tuple %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `columns` data of the PivotGrid.

```jsx
<PivotGrid columns={[['Category', 'Subcategory']]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


[PivotDataItem]({% slug api_pivotgrid_pivotdataitem %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `data` of the PivotGrid.

```jsx
<PivotGrid data={[{ field: 'value', data: 100 }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataColumn?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[PivotGridColumnProps]({% slug api_pivotgrid_pivotgridcolumnprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default data `column` component.

The default component is: [PivotGridColumn](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridcolumn).

```jsx
<PivotGrid dataColumn={(props) => <CustomColumn {...props} />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataRow?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[PivotGridRowProps]({% slug api_pivotgrid_pivotgridrowprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default data `row` component.

The default component is: [PivotGridRow](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridrow).

```jsx
<PivotGrid dataRow={(props) => <CustomRow {...props} />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerCell?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;[PivotGridHeaderCellProps]({% slug api_pivotgrid_pivotgridheadercellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `headerCell` component.

The default component is: [PivotGridHeaderCell](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridheadercell).

```jsx
<PivotGrid headerCell={(props) => <CustomHeaderCell {...props} />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `id` property of the top-most element of the PivotGrid.

```jsx
<PivotGrid id="pivotgrid-id" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigatable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


If set to `true`, the user can use dedicated shortcuts to interact with the PivotGrid.
By default, navigation is disabled.




```jsx
<PivotGrid navigatable={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnAxesChange?


</td>
<td type class="table-cell-type">


<code>


(event: [PivotGridAxesChangeEvent]({% slug api_pivotgrid_pivotgridaxeschangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever the `columnAxes` property should change.

```jsx
<PivotGrid onColumnAxesChange={(event) => console.log(event.value)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowAxesChange?


</td>
<td type class="table-cell-type">


<code>


(event: [PivotGridAxesChangeEvent]({% slug api_pivotgrid_pivotgridaxeschangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever the `rowAxes` property should change.

```jsx
<PivotGrid onRowAxesChange={(event) => console.log(event.value)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### row?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;[PivotGridRowProps]({% slug api_pivotgrid_pivotgridrowprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `row` component.

The default component is: [PivotGridRow](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridrow).

```jsx
<PivotGrid row={(props) => <CustomRow {...props} />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowAxes?


</td>
<td type class="table-cell-type">


<code>


[PivotGridAxis]({% slug api_pivotgrid_pivotgridaxis %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the `row` axes.

```jsx
<PivotGrid rowAxes={[{ name: 'Region', expand: true }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowHeadersCell?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[PivotGridHeaderCellProps]({% slug api_pivotgrid_pivotgridheadercellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default row-headers `headerCell` component.

The default component is: [PivotGridHeaderCell](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridheadercell).

```jsx
<PivotGrid rowHeadersCell={(props) => <CustomHeaderCell {...props} />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowHeadersColumn?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[PivotGridColumnProps]({% slug api_pivotgrid_pivotgridcolumnprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default row-headers `column` component.

The default component is: [PivotGridColumn](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridcolumn).

```jsx
<PivotGrid rowHeadersColumn={(props) => <CustomColumn {...props} />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowHeadersRow?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[PivotGridRowProps]({% slug api_pivotgrid_pivotgridrowprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default row-headers `row` component.

The default component is: [PivotGridRow](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridrow).

```jsx
<PivotGrid rowHeadersRow={(props) => <CustomRow {...props} />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### rows?


</td>
<td type class="table-cell-type">


<code>


[Tuple]({% slug api_pivotgrid_tuple %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `rows` data of the PivotGrid.

```jsx
<PivotGrid rows={[['Region', 'Country']]} />
```



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


Sets the `style` property of the top-most element of the PivotGrid.

```jsx
<PivotGrid style={{ height: '500px' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `tabIndex` property of the top-most element of the PivotGrid.

```jsx
<PivotGrid tabIndex={0} />
```



</td>
</tr>
</tbody>
</table>



