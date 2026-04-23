---
title: TooltipProps
description: "Learn how to build custom functionality when working with the React Tooltip by Kendo UI with the help of the TooltipProps."
api_reference: true
type: inner_api
slug: api_tooltip_tooltipprops
---

# TooltipProps
Represents the props of the [KendoReact Tooltip component](https://www.telerik.com/kendo-react-ui/components/tooltip/tooltip).


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


#### anchorElement?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"pointer"


</code>


</td>
<td class="table-cell-comment">


Sets the anchor element of the Tooltip.

The available options are:
- (Default) `pointer`&mdash;Positions the Tooltip where the cursor is located.
- `target`&mdash;Positions the Tooltip relative to the target element.




```jsx
<Tooltip anchorElement="target" />
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


Defines the container to which the Tooltip will be appended.
Defaults to [`body`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body).
If set to `null`, the Tooltip will not use React Portal.

```jsx
<Tooltip appendTo={document.getElementById('container')} />
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


Specifies the children elements of the Tooltip.
Used to define the content of the Tooltip.

```jsx
<Tooltip>
  <span>Hover over me</span>
</Tooltip>
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


Specifies additional CSS classes for the Tooltip animation container.

```jsx
<Tooltip className="custom-tooltip-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### content?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the content of the Tooltip ([see example](https://www.telerik.com/kendo-react-ui/components/tooltip/tooltip/templates)).
Can be a string, JSX, or a function returning JSX.

```jsx
<Tooltip content="This is a tooltip" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


(target: HTMLElement) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback function to determine if the Tooltip should be displayed for a specific target element ([see example](https://www.telerik.com/kendo-react-ui/components/tooltip/tooltip/anchor-elements)).

```jsx
<Tooltip filter={(target) => target.tagName === 'BUTTON'} />
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


Specifies the `id` of the wrapping element of the Tooltip component.
Used to uniquely identify the Tooltip element in the DOM.

```jsx
<Tooltip id="tooltip-id" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [TooltipEvent]({% slug api_tooltip_tooltipevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Tooltip is hidden.
Provides the event details.

```jsx
<Tooltip onClose={(event) => console.log('Tooltip closed', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [TooltipEvent]({% slug api_tooltip_tooltipevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Tooltip is shown.
Provides the event details.

```jsx
<Tooltip onOpen={(event) => console.log('Tooltip opened', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPosition?


</td>
<td type class="table-cell-type">


<code>


(event: [TooltipPositionEvent]({% slug api_tooltip_tooltippositionevent %})) => { left: number; top: number; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback function triggered when the Tooltip calculates its position.
Allows customization of the `top` and `left` position values.

```jsx
<Tooltip onPosition={(event) => ({ top: 100, left: 200 })} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### open?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the visibility of the Tooltip.
When set, the Tooltip operates in controlled mode ([see example](https://www.telerik.com/kendo-react-ui/components/tooltip/tooltip/controlled-mode)).
Requires the `targetElement` property to be set.

```jsx
<Tooltip open={true} targetElement={document.getElementById('target')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### openDelay?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


400


</code>


</td>
<td class="table-cell-comment">


Specifies a delay in milliseconds before the Tooltip is displayed.




```jsx
<Tooltip openDelay={500} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### parentTitle?


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


Enables the Tooltip to display the title of any parent element with a `title` attribute.




```jsx
<Tooltip parentTitle={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


TooltipPosition


</code>


</td>
<td class="table-cell-default">


<code>


"auto"


</code>


</td>
<td class="table-cell-comment">


Sets the position of the Tooltip ([see example](https://www.telerik.com/kendo-react-ui/components/tooltip/tooltip/positioning)).

The available options are:
- (Default) `auto`&mdash;Automatically positions the Tooltip based on available space.
- `right`&mdash;Positions the Tooltip to the right of the element.
- `left`&mdash;Positions the Tooltip to the left of the element.
- `bottom`&mdash;Positions the Tooltip below the element.
- `top`&mdash;Positions the Tooltip above the element.




```jsx
<Tooltip position="top" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### setCalloutOnPositionAuto?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the starting point of the Tooltip callout when the position is set to `auto`.
Accepts a pixel value.

```jsx
<Tooltip setCalloutOnPositionAuto="50%" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### showCallout?


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


Determines whether the Tooltip callout (arrow) is displayed.




```jsx
<Tooltip showCallout={false} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### showOption?


</td>
<td type class="table-cell-type">


<code>


[TooltipShowOptions]({% slug api_tooltip_tooltipshowoptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures when the Tooltip will be displayed.
The available options are:
- `hover`&mdash;Displays the Tooltip when the mouse hovers over the target element (default).
- `click`&mdash;Displays the Tooltip when the target element is clicked.
- `focus`&mdash;Displays the Tooltip when the target element is focused.
- `keys`&mdash;Displays the Tooltip when a specific key is pressed while the target element is focused.
- `none`&mdash;Disables the Tooltip display.

```jsx
<Tooltip showOption={{ hover: true, click: false }} />
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


Specifies the styles applied to the Tooltip animation container.

```jsx
<Tooltip style={{ backgroundColor: 'blue' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### targetElement?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the target element for the Tooltip.
Required when the Tooltip is in controlled mode.

```jsx
<Tooltip targetElement={document.getElementById('target')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### tooltipClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies additional CSS classes for the Tooltip DOM element.

```jsx
<Tooltip tooltipClassName="custom-tooltip" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### tooltipStyle?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the styles applied to the Tooltip DOM element.

```jsx
<Tooltip tooltipStyle={{ color: 'red' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### updateInterval?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the interval in milliseconds for the Tooltip to check for title changes.
By default, the Tooltip does not track title updates.

```jsx
<Tooltip updateInterval={1000} />
```



</td>
</tr>
</tbody>
</table>



