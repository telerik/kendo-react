---
title: PopoverProps
description: "Learn how to build custom functionality when working with the React Tooltip by Kendo UI with the help of the PopoverProps."
api_reference: true
type: inner_api
slug: api_tooltip_popoverprops
---

# PopoverProps



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


#### anchor?


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the element to be used as the anchor for the Popover.
The Popover opens relative to this element.

```jsx
<Popover anchor={document.getElementById('anchor')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### animate?


</td>
<td type class="table-cell-type">


<code>


boolean | PopupAnimation


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the animation behavior of the Popover.
Accepts a boolean or a configuration object.

```jsx
<Popover animate={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### appendTo?


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the container to which the Popover will be appended.
Defaults to [`body`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body).
If set to `null`, the Popover will not use React Portal.

```jsx
<Popover appendTo={document.getElementById('container')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoFocus?


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


Set the focus the Popover container automatically when mounted.




```jsx
<Popover autoFocus={false} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### callout?


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


Controls the visibility of the Popover callout (arrow).
If set to `false`, the callout will not be rendered.




```jsx
<Popover callout={false} />
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


Specifies the children elements of the Popover.
Used to define the content of the Popover.

```jsx
<Popover>
  <div>Popover Content</div>
</Popover>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string | string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies additional CSS classes for the Popover element.

```jsx
<Popover className="custom-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### collision?


</td>
<td type class="table-cell-type">


<code>


[PopoverCollision]({% slug api_tooltip_popovercollision %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the collision behavior of the Popover.
Determines how the Popover adjusts its position when it overflows the viewport.

```jsx
<Popover collision={{ horizontal: 'fit', vertical: 'flip' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### contentStyle?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the styles applied to the content element of the Popover.

```jsx
<Popover contentStyle={{ padding: '10px' }} />
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


Specifies the `id` attribute for the Popover element.

```jsx
<Popover id="popover-id" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### margin?


</td>
<td type class="table-cell-type">


<code>


[PopoverMargin]({% slug api_tooltip_popovermargin %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the margin in pixels between the Popover and the anchor element.
Automatically set based on the `position` property if not specified.

```jsx
<Popover margin={{ top: 10, left: 5 }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### offset?


</td>
<td type class="table-cell-type">


<code>


[PopoverOffset]({% slug api_tooltip_popoveroffset %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the absolute position of the Popover.
The Popover opens relative to this point.

```jsx
<Popover offset={{ top: 100, left: 200 }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [PopoverCloseEvent]({% slug api_tooltip_popovercloseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires after the Popover is closed.
Provides the event details.

```jsx
<Popover onClose={(event) => console.log('Popover closed', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDown?


</td>
<td type class="table-cell-type">


<code>


(event: [PopoverKeyDownEvent]({% slug api_tooltip_popoverkeydownevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Popover is focused and a key is pressed.
Provides the event details.

```jsx
<Popover onKeyDown={(event) => console.log('Key pressed', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [PopoverOpenEvent]({% slug api_tooltip_popoveropenevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires after the Popover is opened and the opening animation ends.
Provides the event details.

```jsx
<Popover onOpen={(event) => console.log('Popover opened', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPosition?


</td>
<td type class="table-cell-type">


<code>


(event: [PopoverPositionEvent]({% slug api_tooltip_popoverpositionevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires after the Popover position is calculated and set.
Provides the event details.

```jsx
<Popover onPosition={(event) => console.log('Popover positioned', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### popoverClass?


</td>
<td type class="table-cell-type">


<code>


string | string[] | {[key: string]: boolean}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies additional CSS classes for the animated Popover element.

```jsx
<Popover popoverClass="custom-popover-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


[PopoverPosition]({% slug api_tooltip_popoverposition %})


</code>


</td>
<td class="table-cell-default">


<code>


"top"


</code>


</td>
<td class="table-cell-comment">


Specifies the position of the Popover relative to the anchor or offset.
Accepts predefined position values.




```jsx
<Popover position="top" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### positionMode?


</td>
<td type class="table-cell-type">


<code>


PositionMode


</code>


</td>
<td class="table-cell-default">


<code>


"fixed"


</code>


</td>
<td class="table-cell-comment">


Specifies the positioning mode of the Popover.
Defaults to `fixed`. Use `absolute` for mobile browser support with zoom.




```jsx
<Popover positionMode="absolute" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### scale?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the document scale when using a [scale transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale).
Required for accurate positioning when scaling is applied.

```jsx
<Popover scale={1.5} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### show?


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


Controls the visibility of the Popover.
Defaults to `false`.




```jsx
<Popover show={true} />
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


Specifies the styles applied to the Popover element.

```jsx
<Popover style={{ backgroundColor: 'blue' }} />
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


Specifies the title of the Popover component.
Can be a string or JSX content.

```jsx
<Popover title="Popover Title" />
```



</td>
</tr>
</tbody>
</table>



