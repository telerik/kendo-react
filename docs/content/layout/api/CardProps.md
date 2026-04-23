---
title: CardProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the CardProps."
api_reference: true
type: inner_api
slug: api_layout_cardprops
---

# CardProps



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


Sets the Card child elements.

```jsx
<Card>
  <CardBody>Content</CardBody>
</Card>
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


Sets additional classes to the Card.

```jsx
<Card className="custom-class">Content</Card>
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


Sets the [dir](https://www.w3schools.com/tags/att_global_dir.asp) of the Card.

```jsx
<Card dir="rtl">Content</Card>
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


<code>


horizontal


</code>


</td>
<td class="table-cell-comment">


Sets the Card orientation.

The supported values are:
* `horizontal` - Default
* `vertical`




```jsx
<Card orientation="vertical">Content</Card>
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


Sets additional CSS styles to the Card.

```jsx
<Card style={{ backgroundColor: 'blue' }}>Content</Card>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


default


</code>


</td>
<td class="table-cell-comment">


Sets the Card type.

The supported values are:
* `default`
* `primary`
* `info`
* `success`
* `warning`
* `error`




```jsx
<Card type="primary">Content</Card>
```



</td>
</tr>
</tbody>
</table>



