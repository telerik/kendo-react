---
title: ActionSheetProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the ActionSheetProps."
api_reference: true
type: inner_api
slug: api_layout_actionsheetprops
---

# ActionSheetProps
The props of the ActionSheet component.


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


Controls the popup animation. By default, the open and close animations are disabled.

```jsx
<ActionSheet animation={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### animationDuration?


</td>
<td type class="table-cell-type">


<code>


number | [ActionSheetAnimationDuration]({% slug api_layout_actionsheetanimationduration %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the duration of the transition for the entering and closing Animation. Defaults to `300ms`.

```jsx
<ActionSheet animationDuration={500} />
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


The CSS classes that will be rendered on the inner ActionSheet element.

```jsx
<ActionSheet className="custom-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### expand?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the state of the ActionSheet.

```jsx
<ActionSheet expand={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


[ActionSheetItemProps]({% slug api_layout_actionsheetitemprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of items that will be rendered in the ActionSheet.

```jsx
const items = [{ text: 'Item 1' }, { text: 'Item 2' }];
<ActionSheet items={items} />
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


true


</code>


</td>
<td class="table-cell-comment">


Specifies if the ActionSheet can be navigatable with keyboard.
Defaults to `true`.




```jsx
<ActionSheet navigatable={false} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigatableElements?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">


<code>


[]


</code>


</td>
<td class="table-cell-comment">


Specifies the selectors of the navigatable elements inside the templates of the ActionSheet.




```jsx
<ActionSheet navigatableElements={['.custom-class']} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: SyntheticEvent&lt;Element&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the modal overlay is clicked.

```jsx
<ActionSheet onClose={(e) => console.log('Overlay clicked')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemSelect?


</td>
<td type class="table-cell-type">


<code>


(event: { item?: any; syntheticEvent: SyntheticEvent&lt;Element&gt;; title?: string; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an ActionSheet item is clicked.

```jsx
<ActionSheet onItemSelect={(e) => console.log(e.item)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


"left" | "right" | "top" | "bottom" | "fullscreen"


</code>


</td>
<td class="table-cell-default">


<code>


'bottom'


</code>


</td>
<td class="table-cell-comment">


Specifies the position of the ActionSheet.




```jsx
<ActionSheet position="top" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### prefixActions?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the actions rendered at the start of the header.

```jsx
<ActionSheet prefixActions={<Button>Action</Button>} />
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


Specifies the styles of the ActionSheet component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### subTitle?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text that is rendered under the title.

```jsx
<ActionSheet subTitle="Subtitle text" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### suffixActions?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the actions rendered at the end of the header.

```jsx
<ActionSheet suffixActions={<Button>Action</Button>} />
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


Specifies the `tabIndex` of the ActionSheet.

```jsx
<ActionSheet tabIndex={0} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text that is rendered as title.

```jsx
<ActionSheet title="Title text" />
```



</td>
</tr>
</tbody>
</table>



