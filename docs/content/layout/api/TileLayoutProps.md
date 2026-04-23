---
title: TileLayoutProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the TileLayoutProps."
api_reference: true
type: inner_api
slug: api_layout_tilelayoutprops
---

# TileLayoutProps
Represents the props of the [TileLayout](https://www.telerik.com/kendo-react-ui/components/layout/tilelayout) component.


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


#### autoFlow?


</td>
<td type class="table-cell-type">


<code>


[TileLayoutAutoFlow]({% slug api_layout_tilelayoutautoflow %})


</code>


</td>
<td class="table-cell-default">


<code>


column

([see example](https://www.telerik.com/kendo-react-ui/components/layout/tilelayout/auto-flows)).


</code>


</td>
<td class="table-cell-comment">


Controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the TileLayout.
For further reference, check [grid-auto-flow CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow) article.




```jsx
<TileLayout autoFlow="row" />
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


Sets additional classes to the TileLayout.

```jsx
<TileLayout className="custom-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### columns?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the default number of columns ([see example](https://www.telerik.com/kendo-react-ui/components/layout/tilelayout#toc-tilelayout-configuration-options)).

```jsx
<TileLayout columns={4} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnWidth?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the default width of the columns ([see example](https://www.telerik.com/kendo-react-ui/components/layout/tilelayout#toc-tilelayout-configuration-options)).

```jsx
<TileLayout columnWidth={200} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItemKey?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `key` field of the TileLayout item. Used for setting unique keys to the TileLayout items.

```jsx
<TileLayout dataItemKey="id" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `dir` HTML attribute. Use this to switch from LTR to RTL.

```jsx
<TileLayout dir="rtl" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### gap?


</td>
<td type class="table-cell-type">


<code>


[TileLayoutGap]({% slug api_layout_tilelayoutgap %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the gaps between the tiles ([see example](https://www.telerik.com/kendo-react-ui/components/layout/tilelayout#toc-tilelayout-configuration-options)).

* The possible keys are:
* `rows`
* `columns`

```jsx
<TileLayout gap={{ rows: 10, columns: 10 }} />
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


Sets the `id` property of the root element.

```jsx
<TileLayout id="tile-layout" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### ignoreDrag?


</td>
<td type class="table-cell-type">


<code>


(element: HTMLElement) => boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Use this callback to prevent or allow dragging of the tiles based on specific DOM events.
Setting `ignoreDrag={(e) => { return !(e.target.classList.contains("k-card-title")); }}` makes only the headers draggable.
Setting `ignoreDrag={(e) => { return e.target.nodeName == "INPUT"; }}` ignores dragging input elements.

```jsx
<TileLayout ignoreDrag={(e) => e.target.nodeName === 'INPUT'} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


[TileLayoutItem]({% slug api_layout_tilelayoutitem %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of items that will be rendered in the TileLayout
([see example](https://www.telerik.com/kendo-react-ui/components/layout/tilelayout#toc-tilelayout-configuration-options)).

```jsx
<TileLayout items={[{ header: 'Header', body: 'Body' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onReposition?


</td>
<td type class="table-cell-type">


<code>


(event: [TileLayoutRepositionEvent]({% slug api_layout_tilelayoutrepositionevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user repositions the tile by either dragging or resizing
([see example](https://www.telerik.com/kendo-react-ui/components/layout/tilelayout/tiles#toc-controlling-the-position)).

```jsx
<TileLayout onReposition={(e) => console.log(e.value)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### positions?


</td>
<td type class="table-cell-type">


<code>


[TilePosition]({% slug api_layout_tileposition %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The list of tiles' positions which are used when the TileLayout is in controlled mode
([see example](https://www.telerik.com/kendo-react-ui/components/layout/tilelayout/tiles#toc-controlling-the-position)).

```jsx
<TileLayout positions={[{ col: 1, row: 1 }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowHeight?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the default height of the rows ([see example](https://www.telerik.com/kendo-react-ui/components/layout/tilelayout#toc-tilelayout-configuration-options)).

```jsx
<TileLayout rowHeight={100} />
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


Sets additional CSS styles to the TileLayout.

```jsx
<TileLayout style={{ backgroundColor: 'lightgray' }} />
```



</td>
</tr>
</tbody>
</table>



