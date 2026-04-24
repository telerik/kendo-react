---
title: DrawerProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the DrawerProps."
api_reference: true
type: inner_api
slug: api_layout_drawerprops
---

# DrawerProps
The properties of the [KendoReact Drawer component](https://www.telerik.com/kendo-react-ui/components/layout/drawer).


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


#### animation?


</td>
<td type class="table-cell-type">


<code>


boolean | [DrawerAnimation]({% slug api_layout_draweranimation %})


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies the animation settings of the Drawer.

Example:
```jsx
<Drawer animation={{ duration: 300 }} />
```





</td>
</tr>
<tr>
<td class="table-cell-name">


#### children?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the Drawer items declaratively.

Example:
```jsx
<Drawer>
  <DrawerItem text="Home" />
</Drawer>
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


Specifies a list of CSS classes that will be added to the `k-drawer-container` element.


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


Represents the `dir` HTML attribute. This is used to switch from LTR to RTL.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### drawerClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a list of CSS classes that will be added to the `k-drawer` element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expanded?


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


Specifies the state of the Drawer
([see example](https://www.telerik.com/kendo-react-ui/components/layout/drawer/expanded_state)).

Example:
```jsx
<Drawer expanded={true} />
```





</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[DrawerItemProps]({% slug api_layout_draweritemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component responsible for visualizing a single item
([see example](https://www.telerik.com/kendo-react-ui/components/layout/drawer/custom_rendering)).

Example:
```jsx
<Drawer item={CustomDrawerItem} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


[DrawerItemProps]({% slug api_layout_draweritemprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of items that will be rendered in the Drawer
([see example](https://www.telerik.com/kendo-react-ui/components/layout/drawer)).

Example:
```jsx
<Drawer items={[{ text: 'Home' }, { text: 'Settings' }]} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mini?


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


Enables the mini (compact) view of the Drawer which is displayed when the component is collapsed
([see example](https://www.telerik.com/kendo-react-ui/components/layout/drawer/display_modes#toc-mini-view)).

Example:
```jsx
<Drawer mini={true} />
```





</td>
</tr>
<tr>
<td class="table-cell-name">


#### miniWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the width of the Drawer when the mini view is enabled and the component is collapsed.

Example:
```jsx
<Drawer miniWidth={60} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mode?


</td>
<td type class="table-cell-type">


<code>


"push" | "overlay"


</code>


</td>
<td class="table-cell-default">


<code>


'overlay'


</code>


</td>
<td class="table-cell-comment">


Specifies the mode in which the Drawer will be displayed
([see example](https://www.telerik.com/kendo-react-ui/components/layout/drawer/display_modes#toc-expand-modes)).

Example:
```jsx
<Drawer mode="push" />
```





</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOverlayClick?


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLDivElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when the overlay is clicked.
Used in overlay mode only.

Example:
```jsx
<Drawer onOverlayClick={(e) => console.log('Overlay clicked')} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelect?


</td>
<td type class="table-cell-type">


<code>


(event: [DrawerSelectEvent]({% slug api_layout_drawerselectevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a Drawer item is selected.

Example:
```jsx
<Drawer onSelect={(e) => console.log('Item selected', e)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


"end" | "start"


</code>


</td>
<td class="table-cell-default">


<code>


'start'


</code>


</td>
<td class="table-cell-comment">


Specifies the position of the Drawer
([see example](https://www.telerik.com/kendo-react-ui/components/layout/drawer/positioning)).

Example:
```jsx
<Drawer position="end" />
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


Sets additional CSS styles to the Drawer.


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


Sets the `tabIndex` property of the Drawer.

Example:
```jsx
<Drawer tabIndex={0} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


240


</code>


</td>
<td class="table-cell-comment">


Defines the width of the Drawer when it is expanded.

Example:
```jsx
<Drawer width={300} />
```





</td>
</tr>
</tbody>
</table>



