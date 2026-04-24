---
title: GridLayoutProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the GridLayoutProps."
api_reference: true
type: inner_api
slug: api_layout_gridlayoutprops
---

# GridLayoutProps
Represents the props of the [KendoReact GridLayout component](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout).


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


#### align?


</td>
<td type class="table-cell-type">


<code>


[GridLayoutAlign]({% slug api_layout_gridlayoutalign %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the horizontal and vertical alignment of the inner GridLayout elements ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout/layout#horizontal-alignment)).

The possible keys are:
* `horizontal`&mdash;Defines the possible horizontal alignment of the inner GridLayout elements.
  * `start`&mdash;Uses the start point of the container.
  * `center`&mdash;Uses the central point of the container.
  * `end`&mdash;Uses the end point of the container.
  * (Default)`stretch`&mdash;Stretches the items to fill the width of the container.
* `vertical`&mdash; Defines the possible vertical alignment of the inner GridLayout elements.
  * `top`&mdash;Uses the top point of the container.
  * `middle`&mdash;Uses the middle point of the container.
  * `bottom`&mdash;Uses the bottom point of the container.
  * (Default)`stretch`&mdash;Stretches the items to fill the height of the container.

Example:
```jsx
<GridLayout align={{ horizontal: 'center', vertical: 'middle' }} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### children?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The React elements that will be rendered inside the GridLayout ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout#toc-children)).

Example:
```jsx
<GridLayout>
  <div>Item 1</div>
  <div>Item 2</div>
</GridLayout>
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


Sets additional CSS classes to the GridLayout ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout#toc-classname)).

Example:
```jsx
<GridLayout className="custom-class" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cols?


</td>
<td type class="table-cell-type">


<code>


[GridLayoutColumnProps]({% slug api_layout_gridlayoutcolumnprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the default number of columns and their widths ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout/layout#toc-rows-and-columns)).

Example:
```jsx
<GridLayout cols={[{ width: '100px' }, { width: '200px' }]} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### gap?


</td>
<td type class="table-cell-type">


<code>


[GridLayoutGap]({% slug api_layout_gridlayoutgap %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the gaps between the elements ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout/layout#toc-gaps)).

* The possible keys are:
* `rows`
* `columns`

Example:
```jsx
<GridLayout gap={{ rows: '10px', columns: '20px' }} />
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


Sets the `id` property of the root GridLayout element ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout#toc-id)).

Example:
```jsx
<GridLayout id="grid-layout" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rows?


</td>
<td type class="table-cell-type">


<code>


[GridLayoutRowProps]({% slug api_layout_gridlayoutrowprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the default number of rows and their height ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout/layout#toc-rows-and-columns)).

Example:
```jsx
<GridLayout rows={[{ height: '50px' }, { height: '100px' }]} />
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


Sets additional CSS styles to the GridLayout ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout#toc-style)).

Example:
```jsx
<GridLayout style={{ gap: '10px' }} />
```


</td>
</tr>
</tbody>
</table>



