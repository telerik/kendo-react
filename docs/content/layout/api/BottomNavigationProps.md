---
title: BottomNavigationProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the BottomNavigationProps."
api_reference: true
type: inner_api
slug: api_layout_bottomnavigationprops
---

# BottomNavigationProps
Represents the props of the [KendoReact BottomNavigation component](https://www.telerik.com/kendo-react-ui/components/layout/bottomnavigation).


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


<code>


false


</code>


</td>
<td class="table-cell-comment">


Sets a border to the BottomNavigation.




```jsx
<BottomNavigation border={true} />
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


Sets additional CSS classes to the BottomNavigation.

```jsx
<BottomNavigation className="custom-class" />
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


Represents the `dir` HTML attribute. Use this to switch from LTR to RTL.

```jsx
<BottomNavigation dir="rtl" />
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


Disables the whole BottomNavigation.




```jsx
<BottomNavigation disabled={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


[BottomNavigationFill]({% slug api_layout_bottomnavigationfill %})


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


The BottomNavigation fill style
([see example](https://www.telerik.com/kendo-react-ui/components/layout/bottomnavigation/appearance#toc-fill)).

The possible values are:
* `flat` &mdash; Sets the theme color as the text color. The background will be white.
* `solid` &mdash; Sets the theme color as a background color.




```jsx
<BottomNavigation fillMode="solid" />
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


Sets the `id` property of the root BottomNavigation element.

```jsx
<BottomNavigation id="bottomNav1" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[BottomNavigationItemProps]({% slug api_layout_bottomnavigationitemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component's content responsible for visualizing a single item
([see example](https://www.telerik.com/kendo-react-ui/components/layout/bottomnavigation/custom-rendering#toc-custom-rendering)).

```jsx
const CustomItem = (props) => <div>{props.text}</div>;
<BottomNavigation item={CustomItem} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemFlow?


</td>
<td type class="table-cell-type">


<code>


[BottomNavigationItemFlow]({% slug api_layout_bottomnavigationitemflow %})


</code>


</td>
<td class="table-cell-default">


<code>


vertical


</code>


</td>
<td class="table-cell-comment">


Specifies how the icon and text label are positioned in each BottomNavigation item
([see example](https://www.telerik.com/kendo-react-ui/components/layout/bottomnavigation/content-types#toc-item-flow)).

The possible values are:
* `vertical`(Default) &mdash; Renders the text below the icon.
* `horizontal` &mdash; Renders the text and the icon on the same line.




```jsx
<BottomNavigation itemFlow="horizontal" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemRender?


</td>
<td type class="table-cell-type">


<code>


(span: ReactElement&lt;HTMLSpanElement&gt;, itemProps: [BottomNavigationItemProps]({% slug api_layout_bottomnavigationitemprops %})) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a BottomNavigation item is about to be rendered
([see example](https://www.telerik.com/kendo-react-ui/components/layout/bottomnavigation/custom-rendering#toc-item-render-property)).
Used to override the default appearance of the items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


[BottomNavigationItemProps]({% slug api_layout_bottomnavigationitemprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of items that will be rendered in the BottomNavigation ([see example](https://www.telerik.com/kendo-react-ui/components/layout/bottomnavigation)).

```jsx
const items = [{ text: 'Home', icon: 'home' }, { text: 'Profile', icon: 'user' }];
<BottomNavigation items={items} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDown?


</td>
<td type class="table-cell-type">


<code>


(event: [BottomNavigationEvent]({% slug api_layout_bottomnavigationevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered on `onKeyDown` event.

```jsx
<BottomNavigation onKeyDown={(e) => console.log('Key pressed')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelect?


</td>
<td type class="table-cell-type">


<code>


(event: [BottomNavigationSelectEvent]({% slug api_layout_bottomnavigationselectevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a BottomNavigation item is selected.

```jsx
<BottomNavigation onSelect={(e) => console.log(e.item)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### positionMode?


</td>
<td type class="table-cell-type">


<code>


[BottomNavigationPositionMode]({% slug api_layout_bottomnavigationpositionmode %})


</code>


</td>
<td class="table-cell-default">


<code>


fixed


</code>


</td>
<td class="table-cell-comment">


Specifies the BottomNavigation position and behavior when the page is scrolled
([see example](https://www.telerik.com/kendo-react-ui/components/layout/bottomnavigation/positioning#toc-position-mode)).

The possible values are:
* `fixed`(Default) &mdash; The BottomNavigation always stays at the bottom of the viewport, regardless of the page scroll position.
* `sticky` &mdash; Positions the BottomNavigation based on the user's scroll position. A sticky element toggles between static
and fixed CSS [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) property, depending on the scroll position.
It is positioned static until a given offset position is met in the viewport - then it "sticks" in place like `fixed` positionMode.




```jsx
<BottomNavigation positionMode="sticky" />
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


Sets additional CSS styles to the BottomNavigation.

```jsx
<BottomNavigation style={{ backgroundColor: 'blue' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


[BottomNavigationThemeColor]({% slug api_layout_bottomnavigationthemecolor %})


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Specifies the BottomNavigation theme color
([see example](https://www.telerik.com/kendo-react-ui/components/layout/bottomnavigation/appearance#toc-theme-color)).

The possible values are:
* `primary` &mdash; Applies coloring based on the primary theme color.
* `secondary` &mdash; Applies coloring based on the secondary theme color.
* `tertiary` &mdash; Applies coloring based on the tertiary theme color.
* `info` &mdash; Applies coloring based on the info theme color.
* `success` &mdash; Applies coloring based on the success theme color.
* `warning` &mdash; Applies coloring based on the warning theme color.
* `error` &mdash; Applies coloring based on the error theme color.
* `dark` &mdash; Applies coloring based on the dark theme color.
* `light` &mdash; Applies coloring based on the light theme color.
* `inverse` &mdash; Applies coloring based on the inverted theme color.




```jsx
<BottomNavigation themeColor="primary" />
```



</td>
</tr>
</tbody>
</table>



