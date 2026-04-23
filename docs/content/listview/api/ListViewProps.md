---
title: ListViewProps
description: "Learn how to build custom functionality when working with the React ListView by Kendo UI with the help of the ListViewProps."
api_reference: true
type: inner_api
slug: api_listview_listviewprops
---

# ListViewProps
Represents the props of the [KendoReact ListView component](https://www.telerik.com/kendo-react-ui/components/listview).


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


Sets a class of the ListView DOM element.

```jsx
<ListView className="custom-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data of the ListView.

```jsx
<ListView data={[{ text: 'Item 1' }, { text: 'Item 2' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### footer?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that renders for the ListView footer.

```jsx
const CustomFooter = (props) => <div>Custom Footer</div>;

<ListView footer={CustomFooter} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### header?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that renders for the ListView header.

```jsx
const CustomHeader = (props) => <div>Custom Header</div>;

<ListView header={CustomHeader} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ListViewItemProps]({% slug api_listview_listviewitemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that renders for each item of the data collection.

```jsx
const CustomItem = (props) => <div>{props.text}</div>;

<ListView item={CustomItem} />
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


If set to `true`, the user can use dedicated shortcuts to interact with the ListView.
By default, navigation is disabled.




```jsx
<ListView navigatable={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onScroll?


</td>
<td type class="table-cell-type">


<code>


(event: [ListViewEvent]({% slug api_listview_listviewevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the ListView has been scrolled.

```jsx
<ListView onScroll={(event) => console.log(event)} />
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


Sets styles to the ListView container.

```jsx
<ListView style={{ height: '400px' }} />
```



</td>
</tr>
</tbody>
</table>



