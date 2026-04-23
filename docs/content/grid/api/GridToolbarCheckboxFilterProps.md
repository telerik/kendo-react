---
title: GridToolbarCheckboxFilterProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridToolbarCheckboxFilterProps."
api_reference: true
type: inner_api
slug: api_grid_gridtoolbarcheckboxfilterprops
---

# GridToolbarCheckboxFilterProps



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


#### data


</td>
<td type class="table-cell-type">


<code>


string | object[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the items collection that will be rendered by the GridToolbarCheckboxFilter component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### icon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the icon rendered in the GridToolbarCheckboxFilter tool ([see example](https://www.telerik.com/kendo-react-ui/components/common/icon)).

```jsx
<GridToolbarCheckboxFilter icon="home" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCloseMenu?


</td>
<td type class="table-cell-type">


<code>


Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method that will be called to close the column menu.

```jsx
<GridToolbarCheckboxFilter onCloseMenu={() => console.log('close menu');} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### searchBox?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be rendered as a search box.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### searchBoxFilterOperator?


</td>
<td type class="table-cell-type">


<code>


string | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the filter operator that will be used to filter the values via the search box.
"startswith"
"endswith"
"contains"
"doesnotcontain"
"isempty"
"isnotempty"
"eq" (equal to)
"eq" (equal to)
"neq" (not equal to)
"isnull" (is equal to null)
"isnotnull" (is not equal to null)


</td>
</tr>
<tr>
<td class="table-cell-name">


#### show?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the popup will be displayed.

```jsx
<GridToolbarCheckboxFilter show={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the SVG icon rendered in the GridToolbarCheckboxFilter tool ([see example](https://www.telerik.com/kendo-react-ui/components/common/svgicon)).

```jsx
import { gearIcon } from '@progress/kendo-svg-icons';

<GridToolbarCheckboxFilter svgIcon={gearIcon} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### uniqueData?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the data in the component will be unique. By default the property is set to true.

```jsx
<GridToolbarCheckboxFilter uniqueData={true} />
```



</td>
</tr>
</tbody>
</table>



