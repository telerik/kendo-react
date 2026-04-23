---
title: TileLayoutItem
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the TileLayoutItem."
api_reference: true
type: inner_api
slug: api_layout_tilelayoutitem
---

# TileLayoutItem
The interface for describing items that can be passed to the `items` prop of the TileLayout component.


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


#### body?


</td>
<td type class="table-cell-type">


<code>


ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the TileLayoutItem content in the body
([see example](https://www.telerik.com/kendo-react-ui/components/layout/tilelayout/tiles)).


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


Sets additional classes to the TileLayoutItem.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultPosition?


</td>
<td type class="table-cell-type">


<code>


[TilePosition]({% slug api_layout_tileposition %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The TileLayoutItem position which is used when the TileLayout is in uncontrolled mode
([see example](https://www.telerik.com/kendo-react-ui/components/layout/tilelayout/tiles#toc-position-and-dimensions)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### header?


</td>
<td type class="table-cell-type">


<code>


ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the TileLayoutItem title in the header
([see example](https://www.telerik.com/kendo-react-ui/components/layout/tilelayout/tiles)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hintClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional classes to the TileLayoutItem hint element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hintStyle?


</td>
<td type class="table-cell-type">


<code>


CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional CSS styles to the TileLayoutItem hint element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default rendering of the TileLayoutItem
([see example](https://www.telerik.com/kendo-react-ui/components/layout/tilelayout/tiles#toc-custom-rendering)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### reorderable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies if the user can reorder the TileLayoutItem by dragging and dropping it
([see example](https://www.telerik.com/kendo-react-ui/components/layout/tilelayout/tiles#toc-reordering)).
If `reorderable` is not specified, the dragging functionality of the TileLayoutItem is enabled.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### resizable?


</td>
<td type class="table-cell-type">


<code>


[TileResizeMode]({% slug api_layout_tileresizemode %})


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies if the user can resize the TileLayoutItem and in which direction
([see example](https://www.telerik.com/kendo-react-ui/components/layout/tilelayout/tiles#toc-resizing)).
If `resizable` is not specified, the resizing of the TileLayoutItem is enabled for both directions.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional CSS styles to the TileLayoutItem.


</td>
</tr>
</tbody>
</table>



