---
title: GridToolbarFilterProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridToolbarFilterProps."
api_reference: true
type: inner_api
slug: api_grid_gridtoolbarfilterprops
---

# GridToolbarFilterProps



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


#### filterUI?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[GridColumnMenuFilterUIProps]({% slug api_grid_gridcolumnmenufilteruiprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a React element that will be cloned and rendered inside the UI of the column-menu filter component
([see example](https://www.telerik.com/kendo-react-ui/components/grid/columns/column-menu#toc-customizing-the-filter-component)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hideSecondFilter?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `false`, the second filter operator and the input will be hidden.


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


Defines the icon rendered in the GridToolbarFilter tool ([see example](https://www.telerik.com/kendo-react-ui/components/common/icon)).

```jsx
<GridToolbarFilter icon="home" />
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
<GridToolbarFilter onCloseMenu={() => console.log('close menu');} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterChange?


</td>
<td type class="table-cell-type">


<code>


(filter: "null" | CompositeFilterDescriptor, syntheticEvent: SyntheticEvent&lt;any&gt;) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method that will be called to notify the parent Grid about a filter change.


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
<GridToolbarFilter show={true} />
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


Defines the SVG icon rendered in the GridToolbarFilter tool ([see example](https://www.telerik.com/kendo-react-ui/components/common/svgicon)).

```jsx
import { gearIcon } from '@progress/kendo-svg-icons';

<GridToolbarFilter svgIcon={gearIcon} />
```



</td>
</tr>
</tbody>
</table>



