---
title: PanelBarProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the PanelBarProps."
api_reference: true
type: inner_api
slug: api_layout_panelbarprops
---

# PanelBarProps
Represents the props of the [KendoReact PanelBar component](https://www.telerik.com/kendo-react-ui/components/layout/panelbar).


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


<code>


true


</code>


</td>
<td class="table-cell-comment">


Sets the animation state of the PanelBar.

```jsx
<PanelBar animation={false} />
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


The child can be either a single PanelBarItem or a PanelBarItem array.

```jsx
<PanelBar>
  <PanelBarItem title="Item 1" />
  <PanelBarItem title="Item 2" />
</PanelBar>
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


The class name that is set to the PanelBar.

```jsx
<PanelBar className="custom-panelbar" />
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


Sets the direction of the PanelBar component.

```jsx
<PanelBar dir="rtl" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### expanded?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the initial expanded state of the PanelBar. Takes the `id` of the item.

```jsx
<PanelBar expanded={['item1', 'item2']} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandMode?


</td>
<td type class="table-cell-type">


<code>


[PanelBarExpandMode]({% slug api_layout_panelbarexpandmode %})


</code>


</td>
<td class="table-cell-default">


<code>


'multiple'


</code>


</td>
<td class="table-cell-comment">


Sets the expand mode of the PanelBar ([see example](https://www.telerik.com/kendo-react-ui/components/layout/panelbar/expand-modes)).

The available modes are:
- `"single"`&mdash;Allows you to expand only one item at a time. The expanding of an item collapses the item that was previously expanded.
- `"multiple"`&mdash;Allows you to expand two or more items at a time. Items can also be toggled.

```jsx
<PanelBar expandMode="single" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### focused?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the initial focused state of the PanelBar. Takes the `id` of the item.

```jsx
<PanelBar focused="item1" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### isControlled?


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


Determines if the PanelBar is going to be used in controlled state.

```jsx
<PanelBar isControlled />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### keepItemsMounted?


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


Determines if the PanelBar items will be mounted after expand collapse.

```jsx
<PanelBar keepItemsMounted />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelect?


</td>
<td type class="table-cell-type">


<code>


(event: [PanelBarSelectEventArguments]({% slug api_layout_panelbarselecteventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user makes a selection ([see example](https://www.telerik.com/kendo-react-ui/components/layout/panelbar/controlling-state)).

```jsx
<PanelBar onSelect={(event) => console.log(event.item)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### selected?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set, overrides the currently selected property in the PanelBar state. Takes the `id` of the item.

```jsx
<PanelBar selected="item1" />
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


Sets additional CSS styles to the PanelBar.

```jsx
<PanelBar style={{ backgroundColor: 'lightblue' }} />
```



</td>
</tr>
</tbody>
</table>



