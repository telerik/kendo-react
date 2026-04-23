---
title: TimelineProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the TimelineProps."
api_reference: true
type: inner_api
slug: api_layout_timelineprops
---

# TimelineProps



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


#### alterMode?


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


Renders TimelineEvents alternatingly on both sides of the axis.




```jsx
<Timeline alterMode={true} events={[{ title: 'Event 1', date: new Date(), description: 'Details' }]} />
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


Specifies the CSS class names which are set to the Timeline.

```jsx
<Timeline className="custom-class" events={[{ title: 'Event 1', date: new Date(), description: 'Details' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### collapsibleEvents?


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


Specifies whether the TimelineEvent cards can be expanded or collapsed.




```jsx
<Timeline collapsibleEvents={true} events={[{ title: 'Event 1', date: new Date(), description: 'Details' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### dateFormat?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


MMM dd, yyyy


</code>


</td>
<td class="table-cell-comment">


The date format for displaying the TimelineEvent date.




```jsx
<Timeline dateFormat="dd/MM/yyyy" events={[{ title: 'Event 1', date: new Date(), description: 'Details' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### events


</td>
<td type class="table-cell-type">


<code>


[TimelineEventProps]({% slug api_layout_timelineeventprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of TimelineEvents to be displayed in the Timeline.

```jsx
<Timeline events={[{ title: 'Event 1', date: new Date(), description: 'Details' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### horizontal?


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


Switches the Timeline to horizontal mode.




```jsx
<Timeline horizontal={true} events={[{ title: 'Event 1', date: new Date(), description: 'Details' }]} />
```



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


<code>


false


</code>


</td>
<td class="table-cell-comment">


Enables keyboard navigation for the Timeline.




```jsx
<Timeline navigatable={true} events={[{ title: 'Event 1', date: new Date(), description: 'Details' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onActionClick?


</td>
<td type class="table-cell-type">


<code>


(event: [EventDataProps]({% slug api_layout_eventdataprops %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a TimelineEvent card action is clicked.

```jsx
<Timeline onActionClick={(event) => console.log(event)} events={[{ title: 'Event 1', date: new Date(), description: 'Details' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [EventDataProps]({% slug api_layout_eventdataprops %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a TimelineEvent card is toggled.

```jsx
<Timeline onChange={(event) => console.log(event)} events={[{ title: 'Event 1', date: new Date(), description: 'Details' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### transitionDuration?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the time for sliding to the next TimelineEvent in horizontal mode and collapsing the TimelineEvent in vertical mode.
The default value are:
- `300ms` for horizontal
- `400ms` for vertical

```jsx
<Timeline transitionDuration={500} events={[{ title: 'Event 1', date: new Date(), description: 'Details' }]} />
```



</td>
</tr>
</tbody>
</table>



