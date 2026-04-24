---
title: GridPagerSettings
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridPagerSettings."
api_reference: true
type: inner_api
slug: api_grid_gridpagersettings
---

# GridPagerSettings
The pager settings of the Grid ([see example](https://www.telerik.com/kendo-react-ui/components/grid/paging)).

```jsx-no-run

<Grid
   pageable="{{
       buttonCount: 2,
       info: false
   }}">
</Grid>
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


#### adaptive?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Providing different rendering of the page sizes select element based on the screen dimensions.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### adaptiveTitle?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text that is rendered as title in the adaptive page sizes select element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### buttonCount?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the maximum numeric buttons count before the buttons are collapsed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### info?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Toggles the information about the current page and the total number of records.


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




</td>
<td class="table-cell-comment">


Defines if the pager will be navigatable.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageSizes?


</td>
<td type class="table-cell-type">


<code>


boolean | number[] | string | number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Shows a menu for selecting the page size.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageSizeValue?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the selected value of the page size Dropdownlist.
It is useful when the selected value could also be a string not only a number.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### previousNext?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Toggles the **Previous** and **Next** buttons.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### responsive?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


`true`


</code>


</td>
<td class="table-cell-comment">


Defines if the pager will be responsive.
If true, hides the tools that do not fit to the available space.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


[GridPagerType]({% slug api_grid_gridpagertype %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the type of the Grid pager.


</td>
</tr>
</tbody>
</table>



