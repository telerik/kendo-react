---
title: AvatarProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the AvatarProps."
api_reference: true
type: inner_api
slug: api_layout_avatarprops
---

# AvatarProps



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


#### border?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a border to the Avatar.

```jsx
<Avatar border>AB</Avatar>
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


Sets the Avatar children elements.

```jsx
<Avatar>AB</Avatar>
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


Sets additional classes to the Avatar.

```jsx
<Avatar className="custom-class">AB</Avatar>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"solid" | "outline"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the Avatar.

The available options are:
- solid
- outline




```jsx
<Avatar fillMode="outline">AB</Avatar>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### rounded?


</td>
<td type class="table-cell-type">


<code>


"small" | "none" | "medium" | "large" | "full"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `roundness` of the Avatar.

The available options are:
- small
- medium
- large
- full
- none




```jsx
<Avatar rounded="full">AB</Avatar>
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


Configures the `size` of the Avatar.

The available options are:
- small
- medium
- large




```jsx
<Avatar size="large">AB</Avatar>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### src?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the URL for the image when type is 'image'.

```jsx
<Avatar type="image" src="avatar.jpg" />
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


Sets additional CSS styles to the Avatar.

```jsx
<Avatar style={{ backgroundColor: 'blue' }}>AB</Avatar>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


"base" | "error" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "dark" | "light" | "inverse"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `themeColor` of the Avatar.

The available options are:
- base
- primary
- secondary
- tertiary
- info
- success
- error
- warning
- dark
- light
- inverse




```jsx
<Avatar themeColor="primary">AB</Avatar>
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




</td>
<td class="table-cell-comment">


Sets the type of the Avatar.

The supported values are:
* `image`
* `text`
* `icon`

```jsx
<Avatar type="image" src="avatar.jpg" />
```



</td>
</tr>
</tbody>
</table>



