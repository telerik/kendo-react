---
title: GridToolbarColumnsChooserProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridToolbarColumnsChooserProps."
api_reference: true
type: inner_api
slug: api_grid_gridtoolbarcolumnschooserprops
---

# GridToolbarColumnsChooserProps



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


Defines the icon rendered in the GridToolbarSort tool ([see example](https://www.telerik.com/kendo-react-ui/components/common/icon)).

```jsx
<GridToolbarSort icon="home" />
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
<GridToolbarColumnsChooser onCloseMenu={() => console.log('close menu');} />



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
<GridToolbarColumnsChooser show={true} />
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


Defines the SVG icon rendered in the GridToolbarSort tool ([see example](https://www.telerik.com/kendo-react-ui/components/common/svgicon)).

```jsx
import { gearIcon } from '@progress/kendo-svg-icons';

<GridToolbarSort svgIcon={gearIcon} />
```



</td>
</tr>
</tbody>
</table>



