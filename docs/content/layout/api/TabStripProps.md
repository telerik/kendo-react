---
title: TabStripProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the TabStripProps."
api_reference: true
type: inner_api
slug: api_layout_tabstripprops
---

# TabStripProps
Represents the props of the [KendoReact TabStrip component](https://www.telerik.com/kendo-react-ui/components/layout/tabstrip).


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


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the tab animation.

```jsx
<TabStrip animation={true} />
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


Sets the tab list scroll speed in pixels when scrolling via clicking the previous or next button.





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


Specifies the CSS class names of the TabStrip component.

```jsx
<TabStrip className="custom-class" />
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


Sets the direction of the TabStrip component.

```jsx
<TabStrip dir="rtl" />
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


#### keepTabsMounted?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if the tabs will remain mounted after another tab is selected. Defaults to `false`.

```jsx
<TabStrip keepTabsMounted={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### mouseScrollSpeed?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


10


</code>


</td>
<td class="table-cell-comment">


Sets the tab list scroll speed in pixels when scrolling via mouse wheel.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### nextButton?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;ButtonProps&gt;


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


#### onSelect?


</td>
<td type class="table-cell-type">


<code>


(e: [TabStripSelectEventArguments]({% slug api_layout_tabstripselecteventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user makes a selection.

```jsx
<TabStrip onSelect={(e) => console.log(e.selected)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### prevButton?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;ButtonProps&gt;


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


#### renderAllContent?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false
Defines if all component tabs will be rendered by default. Defaults to  `false` .
If set to  `false` , the component will render only the currently selected tab. This can be useful when the content of the tabs is heavy and you want to improve the initial loading time. Check also the [keepTabsMounted](https://www.telerik.com/kendo-react-ui/components/layout/api/tabstripprops#toc-keeptabsmounted) prop.


</code>


</td>
<td class="table-cell-comment">







```jsx
<TabStrip renderAllContent={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollable?


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


Determines whether the TabStrip will be scrollable.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollButtons?


</td>
<td type class="table-cell-type">


<code>


[ScrollButtons]({% slug api_layout_scrollbuttons %})


</code>


</td>
<td class="table-cell-default">


<code>


`auto`


</code>


</td>
<td class="table-cell-comment">


Sets the visibility of the scroll buttons.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollButtonsPosition?


</td>
<td type class="table-cell-type">


<code>


[ScrollButtonsPosition]({% slug api_layout_scrollbuttonsposition %})


</code>


</td>
<td class="table-cell-default">


<code>


`split`


</code>


</td>
<td class="table-cell-comment">


Sets the scroll buttons position according to the tab list.
The previous options 'around', 'before', 'after' are going to be deprecated in favor of 'split', 'start', 'end'.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### selected?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the index of the selected TabStripTab component ([see example](https://www.telerik.com/kendo-react-ui/components/layout/tabstrip/tabs#toc-tabs-on-initial-loading)).

```jsx
<TabStrip selected={0} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


[TabStripSize]({% slug api_layout_tabstripsize %})


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Specifies the possible sizes of the TabStrip.




```jsx
<TabStrip size="small" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabAlignment?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the alignment of the tabs. Defaults to `start`.

The available options are:
- `"start"`&mdash;Aligns the tabs at the start of the `TabStripNavigation`.
- `"center"`&mdash;Aligns the tabs in the center of the `TabStripNavigation`.
- `"end"`&mdash;Aligns the tabs at the end of the `TabStripNavigation`.
- `"justify"`&mdash;Justifies the tabs inside the `TabStripNavigation`.
- `"stretched"`&mdash;Stretches the tabs inside the `TabStripNavigation`.

```jsx
<TabStrip tabAlignment="center" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabContentStyle?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the style of the TabStripContent component.

```jsx
<TabStrip tabContentStyle={{ padding: '10px' }} />
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


Sets the `tabIndex` of the TabStripNavigation.

```jsx
<TabStrip tabIndex={0} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabPosition?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the position of the tabs. Defaults to `top`.

The available options are:
- `"top"`&mdash;Renders the `TabStripNavigation` to the top of the TabStrip.
- `"bottom"`&mdash;Renders the `TabStripNavigation` to the bottom of the TabStrip.
- `"left"`&mdash;Renders the `TabStripNavigation` to the left of the TabStrip.
- `"right"`&mdash;Renders the `TabStripNavigation` to the right of the TabStrip.

```jsx
<TabStrip tabPosition="bottom" />
```



</td>
</tr>
</tbody>
</table>



