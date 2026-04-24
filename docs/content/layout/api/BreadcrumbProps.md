---
title: BreadcrumbProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the BreadcrumbProps."
api_reference: true
type: inner_api
slug: api_layout_breadcrumbprops
---

# BreadcrumbProps
Represents the props of [Breadcrumb](https://www.telerik.com/kendo-react-ui/components/layout/api/breadcrumb) component.


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


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the label of the Breadcrumb component.

```jsx
<Breadcrumb ariaLabel="Breadcrumb navigation" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### breadcrumbDelimiter?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[BreadcrumbDelimiterProps]({% slug api_layout_breadcrumbdelimiterprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the Breadcrumb delimiter component.

```jsx
const CustomDelimiter = () => <span>/</span>;
<Breadcrumb breadcrumbDelimiter={CustomDelimiter} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### breadcrumbLink?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[BreadcrumbLinkProps]({% slug api_layout_breadcrumblinkprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the Breadcrumb link component.

```jsx
const CustomLink = (props) => <a {...props} />;
<Breadcrumb breadcrumbLink={CustomLink} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### breadcrumbListItem?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[BreadcrumbListItemProps]({% slug api_layout_breadcrumblistitemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the Breadcrumb list item component.

```jsx
const CustomListItem = (props) => <li {...props}>{props.children}</li>;
<Breadcrumb breadcrumbListItem={CustomListItem} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### breadcrumbOrderedList?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[BreadcrumbOrderedListProps]({% slug api_layout_breadcrumborderedlistprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the Breadcrumb ordered list component.

```jsx
const CustomOrderedList = (props) => <ol {...props} />;
<Breadcrumb breadcrumbOrderedList={CustomOrderedList} />
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


Sets additional classes to the Breadcrumb.

```jsx
<Breadcrumb className="custom-breadcrumb" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### data


</td>
<td type class="table-cell-type">


<code>


[DataModel]({% slug api_layout_datamodel %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the data of the Breadcrumb from type DataModel.

```jsx
const data = [{ id: '1', text: 'Home' }, { id: '2', text: 'Products' }];
<Breadcrumb data={data} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


"rtl" | "ltr"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Breadcrumb direction `ltr` or `rtl`.

```jsx
<Breadcrumb dir="rtl" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### disabled?


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


Determines the `disabled` mode of the Breadcrumb. If `true`, the component is disabled.




```jsx
<Breadcrumb disabled={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### iconClassField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


iconClass


</code>


</td>
<td class="table-cell-comment">


Represents the `iconClass` field. Used for setting the `iconClass` inside the BreadcrumbLink component.




```jsx
<Breadcrumb iconClassField="customIconClass" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### iconField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


icon


</code>


</td>
<td class="table-cell-comment">


Represents the `icon` field. Used for setting the `icon` inside the BreadcrumbLink component.




```jsx
<Breadcrumb iconField="customIcon" />
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


Sets the `id` property of the top `div` element of the Breadcrumb.

```jsx
<Breadcrumb id="breadcrumb1" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemSelect?


</td>
<td type class="table-cell-type">


<code>


(event: [BreadcrumbLinkMouseEvent]({% slug api_layout_breadcrumblinkmouseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `onItemSelect` event. Triggered after click on the Breadcrumb.

```jsx
<Breadcrumb onItemSelect={(e) => console.log(e.id)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDown?


</td>
<td type class="table-cell-type">


<code>


(event: [BreadcrumbLinkKeyDownEvent]({% slug api_layout_breadcrumblinkkeydownevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `onKeyDown` event. Triggered after keyboard click on the Breadcrumb.

```jsx
<Breadcrumb onKeyDown={(e) => console.log(e.id)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Specifies the Breadcrumb padding for all elements.

The possible values are:
* `small`
* `medium`
* `large`




```jsx
<Breadcrumb size="large" />
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


Sets additional CSS styles to the Breadcrumb.

```jsx
<Breadcrumb style={{ backgroundColor: 'lightgray' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `tabIndex` attribute to the Breadcrumb.

```jsx
<Breadcrumb tabIndex={0} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### textField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


text


</code>


</td>
<td class="table-cell-comment">


Represents the `text` field. Used for setting the `text` inside the BreadcrumbLink component.




```jsx
<Breadcrumb textField="customText" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### valueField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


id


</code>


</td>
<td class="table-cell-comment">


Represents the `value` field. Used for setting the key of the BreadcrumbListItem component and the `id` of the BreadcrumbLink component.




```jsx
<Breadcrumb valueField="customId" />
```



</td>
</tr>
</tbody>
</table>



