---
title: DropDownsPopupSettings
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the DropDownsPopupSettings."
api_reference: true
type: inner_api
slug: api_dropdowns_dropdownspopupsettings
---

# DropDownsPopupSettings
The settings of the popup container.


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


Specifies the element which will be used as an anchor ([see example](https://www.telerik.com/kendo-react-ui/components/popup/aligning-positioning)). The Popup opens next to that element.

```jsx
<Popup anchor={document.getElementById('anchorElement')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### anchorAlign?


</td>
<td type class="table-cell-type">


<code>


Align


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the pivot point of the anchor ([see example](https://www.telerik.com/kendo-react-ui/components/popup/aligning-positioning)).

```jsx
<Popup anchorAlign={{ horizontal: 'left', vertical: 'top' }} />
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


<code>


true


</code>


</td>
<td class="table-cell-comment">


Controls the Popup animation ([see example](https://www.telerik.com/kendo-react-ui/components/popup/animations)). By default, the opening and closing animations are enabled.




```jsx
<Popup animate={false} />
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


Defines the container to which the Popup will be appended.
Defaults to [`body`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body).
* If set to `null` the Popup will be rendered without React Portal.


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


Specifies a list of CSS classes that will be added to the Popup element.

```jsx
<Popup className="custom-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### collision?


</td>
<td type class="table-cell-type">


<code>


Collision


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the collision behavior of the Popup ([see example](https://www.telerik.com/kendo-react-ui/components/popup/viewport-boundary)).

```jsx
<Popup collision={{ horizontal: 'fit', vertical: 'flip' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### height?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the height of the DOM element inside the DropDowns' popup that contains the data items of each component. This height doesn't include the header and footer.


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


Specifies the id that will be added to the Popup element.

```jsx
<Popup id="popup-id" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### margin?


</td>
<td type class="table-cell-type">


<code>


Margin


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the margin value that will be added to the popup dimensions
in pixels and leaves a blank space between the popup and the anchor.

```jsx
<Popup margin={{ horizontal: 10, vertical: 10 }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### offset?


</td>
<td type class="table-cell-type">


<code>


Offset


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the absolute position of the element ([see example](https://www.telerik.com/kendo-react-ui/components/popup/aligning-positioning)). The Popup opens next to that point. The pivot point of the Popup is defined by the `popupAlign` configuration option. The boundary detection is applied by using the window viewport.

```jsx
<Popup offset={{ left: 100, top: 200 }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: CloseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires after the Popup is closed.

```jsx
<Popup onClose={(event) => console.log('Popup closed')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseDownOutside?


</td>
<td type class="table-cell-type">


<code>


(event: MouseDownOutsideEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the mousedown event is triggered outside the Popup.

```jsx
<Popup onMouseDownOutside={(event) => console.log('onMouseDownOutside')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: OpenEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires after the Popup is opened and the opening animation ends.

```jsx
<Popup onOpen={(event) => console.log('Popup opened')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPosition?


</td>
<td type class="table-cell-type">


<code>


(event: PositionEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires after the Popup position is set.

```jsx
<Popup onPosition={(event) => console.log('Popup positioned')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupAlign?


</td>
<td type class="table-cell-type">


<code>


Align


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the pivot point of the Popup ([see example](https://www.telerik.com/kendo-react-ui/components/popup/aligning-positioning)).

```jsx
<Popup popupAlign={{ horizontal: 'center', vertical: 'bottom' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupClass?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a list of CSS classes that are used for styling the popup inner element.


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


"absolute"


</code>


</td>
<td class="table-cell-comment">


Specifies the position mode of the component. By default, the Popup uses absolute positioning.
To make the Popup acquire fixed positioning, set this option to `fixed`.




```jsx
<Popup positionMode="fixed" />
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


Used to set the document scale when using a [scale transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale).

The document or container scale is required to compute the popup position correctly. Detecting the scale is not reliable and must be set by providing a value for SCALE.

> Using this token is not necessary for user-applied browser zoom.

```jsx
<Popup scale={1.5} />
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


Controls the Popup visibility ([see example](https://www.telerik.com/kendo-react-ui/components/popup/hidden-state)). Defaults to `false`.




```jsx
<Popup show={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the styles that are applied to the Popup.

```jsx
<Popup style={{ width: '200px', height: '100px' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the width of the popup container. By default, the width of the host element is used.


</td>
</tr>
</tbody>
</table>



