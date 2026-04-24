---
title: NotificationProps
description: "Learn how to build custom functionality when working with the React Notification by Kendo UI with the help of the NotificationProps."
api_reference: true
type: inner_api
slug: api_notification_notificationprops
---

# NotificationProps
Represents the props of the [KendoReact Notification component](https://www.telerik.com/kendo-react-ui/components/notification).


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


Sets additional classes to the Notification.

```jsx
<Notification className="custom-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### closable?


</td>
<td type class="table-cell-type">


<code>


boolean | DetailedHTMLProps&lt;AnchorHTMLAttributes&lt;HTMLAnchorElement&gt;&gt;


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Sets if the Notification requires a user action to hide.
If the property is set to `true`, the Notification renders a **Close** button.
If the property is set to an object, the Notification renders a **Close** button
by extending the default props with the provided object.




```jsx
<Notification closable={true} />
<Notification closable={{ title: 'Dismiss' }} />
```

The possible values are:
* `false`
* `true`
* `{ title: 'Hide', ... }`



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


Sets the `dir` HTML attribute, which determines the text direction.

```jsx
<Notification dir="rtl" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [NotificationEvent]({% slug api_notification_notificationevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when you click the **Close** button.

```jsx
<Notification onClose={(event) => console.log('Notification closed', event)} />
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


The styles that are applied to the Notification.

```jsx
<Notification style={{ backgroundColor: 'lightblue' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


{ icon?: boolean; style?: "base" | "none" | "error" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "dark" | "light" | "inverse"; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the Notification type, which determines its style and icon.

```jsx
<Notification type={{ style: 'success', icon: true }} />
```

The possible values are:
* `style: 'none'|'success'|'error'|'warning'|'info'`. The default is `'none'`.
* `icon?: 'true'|'false'`. The default is `true`.



</td>
</tr>
</tbody>
</table>



