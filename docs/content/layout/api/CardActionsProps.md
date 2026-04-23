---
title: CardActionsProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the CardActionsProps."
api_reference: true
type: inner_api
slug: api_layout_cardactionsprops
---

# CardActionsProps



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


Sets the CardActions children elements.

```jsx
<CardActions>
  <Button>Action 1</Button>
  <Button>Action 2</Button>
</CardActions>
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


Sets additional classes to the CardActions.

```jsx
<CardActions className="custom-class">
  <Button>Action</Button>
</CardActions>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### layout?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the layout of the actions.

The supported values are:
* (Default) `start`
* `center`
* `end`
* `stretched`

```jsx
<CardActions layout="center">
  <Button>Action</Button>
</CardActions>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### orientation?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the orientation of the Card action buttons.

The possible values are:
* (Default) `horizontal`
* `vertical`

```jsx
<CardActions orientation="vertical">
  <Button>Action</Button>
</CardActions>
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


Sets additional CSS styles to the CardActions.

```jsx
<CardActions style={{ justifyContent: 'center' }}>
  <Button>Action</Button>
</CardActions>
```



</td>
</tr>
</tbody>
</table>



