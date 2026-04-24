---
title: ScrollViewProps
description: "Learn how to build custom functionality when working with the React ScrollView by Kendo UI with the help of the ScrollViewProps."
api_reference: true
type: inner_api
slug: api_scrollview_scrollviewprops
---

# ScrollViewProps
Represents the props of the [KendoReact ScrollView component](https://www.telerik.com/kendo-react-ui/components/scrollview).


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


#### activeView?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


1


</code>


</td>
<td class="table-cell-comment">


Represents the current active view ([see example](https://www.telerik.com/kendo-react-ui/components/scrollview/active-view)).
Defaults to `1`.




```jsx
<ScrollView activeView={2} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### arrows?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Enables or disables the built-in navigation arrows ([see example](https://www.telerik.com/kendo-react-ui/components/scrollview/arrows)).
Defaults to `true`.




```jsx
<ScrollView arrows={false} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### automaticViewChange?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Allows the ScrollView to switch the next page automatically after a short delay ([see example](https://www.telerik.com/kendo-react-ui/components/scrollview/automatic-scrolling)).
Defaults to `true`.




```jsx
<ScrollView automaticViewChange={false} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### automaticViewChangeInterval?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


5000


</code>


</td>
<td class="table-cell-comment">


Defines the automatic page change delay in milliseconds ([see example](https://www.telerik.com/kendo-react-ui/components/scrollview/automatic-scrolling)).
Defaults to `5000`.




```jsx
<ScrollView automaticViewChangeInterval={3000} />
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


Sets the ScrollView children elements.

```jsx
<ScrollView>
  <div>Page 1</div>
  <div>Page 2</div>
</ScrollView>
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


Specifies a list of CSS classes that will be added to the ScrollView.

```jsx
<ScrollView className="custom-scrollview" />
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


Represents the `dir` HTML attribute. This is used to switch from LTR to RTL.

```jsx
<ScrollView dir="rtl" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### endless?


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


Toggles the endless scrolling mode in which the data items are endlessly looped
([see example](https://www.telerik.com/kendo-react-ui/components/scrollview/endless-scrolling)). Defaults to `false`.




```jsx
<ScrollView endless={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Toggles the built-in pager ([see example](https://www.telerik.com/kendo-react-ui/components/scrollview/paging)). Defaults to `true`.




```jsx
<ScrollView pageable={false} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### pagerOverlay?


</td>
<td type class="table-cell-type">


<code>


"dark" | "light" | "none"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the pager overlay ([see example](https://www.telerik.com/kendo-react-ui/components/scrollview/paging)).

The possible values are:
* `none`(Default) &mdash; No overlay is set.
* `dark` &mdash; Dark overlay is set.
* `light` &mdash; Light overlay is set.

```jsx
<ScrollView pagerOverlay="dark" />
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


Sets additional CSS styles to the ScrollView.

```jsx
<ScrollView style={{ width: '100%' }} />
```



</td>
</tr>
</tbody>
</table>



