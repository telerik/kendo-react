---
title: TimelineEventProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the TimelineEventProps."
api_reference: true
type: inner_api
slug: api_layout_timelineeventprops
---

# TimelineEventProps



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


#### actions?


</td>
<td type class="table-cell-type">


<code>


{ text: string; url: string; }[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the corresponding links that are rendered under the `images`.

```jsx
<Timeline events={[{ actions: [{ text: 'Learn More', url: 'https://example.com' }], title: 'Event 1', date: new Date(), description: 'Details' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### date


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the TimelineEvent point on the axis.

```jsx
<Timeline events={[{ date: new Date(), title: 'Event 1', description: 'Details' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### description


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text that is rendered as TimelineEvent card body.

```jsx
<Timeline events={[{ description: 'Event details', title: 'Event 1', date: new Date() }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### images?


</td>
<td type class="table-cell-type">


<code>


{ alt?: string; src: string; }[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the images that are rendered under the `description`.

```jsx
<Timeline events={[{ images: [{ src: 'image.jpg', alt: 'Image' }], title: 'Event 1', date: new Date(), description: 'Details' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### opened?


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


Specifies if the TimelineEvent card is default collapsed.




```jsx
<Timeline events={[{ opened: true, title: 'Event 1', date: new Date(), description: 'Details' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### subtitle?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text that is rendered under the `title`.

```jsx
<Timeline events={[{ subtitle: 'Subtitle', title: 'Event 1', date: new Date(), description: 'Details' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### title


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text that is rendered as the TimelineEvent card title.

```jsx
<Timeline events={[{ title: 'Event 1', date: new Date(), description: 'Details' }]} />
```



</td>
</tr>
</tbody>
</table>



