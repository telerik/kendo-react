---
title: ToolbarProps
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the ToolbarProps."
api_reference: true
type: inner_api
slug: api_buttons_toolbarprops
---

# ToolbarProps
Represents the props of the [KendoReact Toolbar component](https://www.telerik.com/kendo-react-ui/components/buttons/toolbar).


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


Represents the `aria-label` HTML attribute of the Toolbar component.

```jsx
<Toolbar ariaLabel="Main toolbar" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### buttonScrollSpeed?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


100


</code>


</td>
<td class="table-cell-comment">


Sets the Toolbar scroll speed in pixels when scrolling via clicking the previous or next button.
Applicable when the overflow property is set to `scroll`.





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


Determines the children nodes.


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


Sets additional classes to the Toolbar.

```jsx
<Toolbar className="custom-toolbar" />
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


Represents the `dir` HTML attribute.

```jsx
<Toolbar dir="rtl" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"flat" | "solid" | "outline"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the Toolbar.
The available options are:
- `solid` - Applies a `background` color and `solid borders`.
- `flat` - Sets a `transparent background` and `solid bottom border`.
- `outline` - Sets a `transparent background` and `solid borders`.




```jsx
<Toolbar fillMode="flat" />
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


Sets the `id` property of the top div element of the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### keyboardNavigation?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `false`, it will turn off the built-in keyboard navigation.

```jsx
<Toolbar keyboardNavigation={false} />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### nextButton?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;undefined&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the custom component that will be rendered as a next button.
To remove the button, set a function which returns null `() => null`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResize?


</td>
<td type class="table-cell-type">


<code>


(event: [ToolbarResizeEvent]({% slug api_buttons_toolbarresizeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `resize` event of the Toolbar.

```jsx
<Toolbar onResize={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### overflow?


</td>
<td type class="table-cell-type">


<code>


"section" | "none" | "scroll"


</code>


</td>
<td class="table-cell-default">


<code>


`none`


</code>


</td>
<td class="table-cell-comment">


Represents the possible overflow mode options of the Toolbar.
Applicable when there is not enough space to render all tools.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### prevButton?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;undefined&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the custom component that will be rendered as a previous button.
To remove the button, set a function which returns null `() => null`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollButtons?


</td>
<td type class="table-cell-type">


<code>


"auto" | "hidden" | "visible"


</code>


</td>
<td class="table-cell-default">


<code>


`auto`


</code>


</td>
<td class="table-cell-comment">


Determines the Toolbar scroll buttons visibility.
Applicable when the overflow property is set to `scroll`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollButtonsPosition?


</td>
<td type class="table-cell-type">


<code>


"split" | "end" | "start"


</code>


</td>
<td class="table-cell-default">


<code>


`split`


</code>


</td>
<td class="table-cell-comment">


Determines the Toolbar scroll buttons position.
Applicable when the overflow property is set to `scroll`.





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


Configures the `size` of the Toolbar.
The available options are:
- `small` - Sets the padding of the component to 4px 4px.
- `medium` - Sets the padding of the component to 8px 8px.
- `large` - Sets the padding of the component to 10px 10px.




```jsx
<Toolbar size="large" />
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


The styles that are applied to the Toolbar.

```jsx
<Toolbar style={{ backgroundColor: 'lightblue' }} />
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


Specifies the `tabIndex` of the Toolbar.

```jsx
<Toolbar tabIndex={0} />
```






</td>
</tr>
</tbody>
</table>



