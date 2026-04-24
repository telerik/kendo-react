---
title: FloatingActionButtonProps
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the FloatingActionButtonProps."
api_reference: true
type: inner_api
slug: api_buttons_floatingactionbuttonprops
---

# FloatingActionButtonProps
Represents the props of the [KendoReact FloatingActionButton component](https://www.telerik.com/kendo-react-ui/components/buttons/floatingactionbutton).


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


#### accessKey?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `accessKey` of the main button.

```jsx
<FloatingActionButton accessKey="a" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### align?


</td>
<td type class="table-cell-type">


<code>


[FloatingActionButtonAlign]({% slug api_buttons_floatingactionbuttonalign %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the alignment of the FloatingActionButton within its container.
[see example](https://www.telerik.com/kendo-react-ui/components/buttons/floatingactionbutton/positioning).

> Centering the FloatingActionButton in both horizontal and vertical dimension is not a typical use case.
Still, it is possible to achieve such a layout with appropriate offsets. Setting horizontal: "center" and vertical: "middle"
at the same time is not supported.

The possible keys are:
* `horizontal` — Defines the possible horizontal alignment of the FloatingActionButton.
  * `start` — Uses the start point of the container.
  * `center` — Uses the center point of the container.
  * `end` (Default) — Uses the end point of the container
* `vertical` — Defines the possible vertical alignment of the FloatingActionButton.
  * `top` — Uses the top point of the container.
  * `middle` — Uses the middle point of the container.
  * `bottom` (Default) — Uses the bottom point of the container.

```jsx
<FloatingActionButton align="bottom end" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### alignOffset?


</td>
<td type class="table-cell-type">


<code>


[FloatingActionButtonAlignOffset]({% slug api_buttons_floatingactionbuttonalignoffset %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the horizontal and vertical offset of the FloatingActionButton.
[see example](https://www.telerik.com/kendo-react-ui/components/buttons/floatingactionbutton/positioning).

Normally, the floating button positions next to the boundaries of its container with a default offset of `16px`.

Positive offsets move floating buttons, which are in a corner, further from that corner. Buttons, which are
not in a corner, can be moved along the container's boundary or towards the center of the container.

A negative offset can force a button to overflow the boundaries of its container.

The possible keys are:
* `x` — Sets the horizontal offset of the FloatingActionButton.
* `y` — Sets the vertical offset of the FloatingActionButton.

```jsx
<FloatingActionButton alignOffset={{ horizontal: 10, vertical: 20 }} />
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


Specifies a list of CSS classes that will be added to the Floating Action Button.

```jsx
<FloatingActionButton className="custom-fab" />
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


Represents the `dir` HTML attribute for text direction.

```jsx
<FloatingActionButton dir="rtl" />
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


Specifies if the FloatingActionButton is disabled.




```jsx
<FloatingActionButton disabled />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### icon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the icon that renders in the FloatingActionButton.

```jsx
<FloatingActionButton icon="k-icon k-i-plus" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### iconClass?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines a custom CSS class for the icon.

```jsx
<FloatingActionButton iconClass="custom-icon-class" />
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


Sets the `id` property of the root HTML element.

```jsx
<FloatingActionButton id="fab1" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[FloatingActionButtonItemProps]({% slug api_buttons_floatingactionbuttonitemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component responsible for rendering items.

```jsx
<FloatingActionButton item={CustomItemComponent} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


[FloatingActionButtonItemProps]({% slug api_buttons_floatingactionbuttonitemprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the collection of items rendered in the Floating Action Button.

```jsx
<FloatingActionButton items={[{ text: 'Item 1' }, { text: 'Item 2' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### modal?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables modal behavior by rendering an overlay under the Floating Action Button.

```jsx
<FloatingActionButton modal />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonEvent]({% slug api_buttons_floatingactionbuttonevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Floating Action Button is blurred.

```jsx
<FloatingActionButton onBlur={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonEvent]({% slug api_buttons_floatingactionbuttonevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Floating Action Button is clicked.

```jsx
<FloatingActionButton onClick={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonEvent]({% slug api_buttons_floatingactionbuttonevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the popup containing the items is closed.

```jsx
<FloatingActionButton onClose={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonEvent]({% slug api_buttons_floatingactionbuttonevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Floating Action Button is focused.

```jsx
<FloatingActionButton onFocus={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemClick?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonItemEvent]({% slug api_buttons_floatingactionbuttonitemevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a Floating Action Button item is clicked.

```jsx
<FloatingActionButton onItemClick={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDown?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonEvent]({% slug api_buttons_floatingactionbuttonevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a key is pressed while the Floating Action Button is focused.

```jsx
<FloatingActionButton onKeyDown={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonEvent]({% slug api_buttons_floatingactionbuttonevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the popup which contains the items is opened
[see example](https://www.telerik.com/kendo-react-ui/components/buttons/floatingactionbutton/events).

```jsx
<FloatingActionButton onOpen={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### overlayStyle?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets styles for the overlay element when the `modal` prop is enabled.

```jsx
<FloatingActionButton overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupSettings?


</td>
<td type class="table-cell-type">


<code>


[FloatingActionButtonPopupSettings]({% slug api_buttons_floatingactionbuttonpopupsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the popup settings for the Floating Action Button.

```jsx
<FloatingActionButton popupSettings={{ animate: false }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### positionMode?


</td>
<td type class="table-cell-type">


<code>


[FloatingActionButtonPositionMode]({% slug api_buttons_floatingactionbuttonpositionmode %})


</code>


</td>
<td class="table-cell-default">


<code>


'fixed'


</code>


</td>
<td class="table-cell-comment">


Specifies the position mode of the Floating Action Button.
[see example](https://www.telerik.com/kendo-react-ui/components/buttons/floatingactionbutton/positioning). It is based on the
[CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) rule.

* The possible values are:
* 'fixed' (Default)
* 'absolute'




```jsx
<FloatingActionButton positionMode="absolute" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### rounded?


</td>
<td type class="table-cell-type">


<code>


[FloatingActionButtonRounded]({% slug api_buttons_floatingactionbuttonrounded %})


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the rounding of the Floating Action Button.

The possible values are:
* `small`
* `medium`
* `large`
* `full`
* `none`




```jsx
<FloatingActionButton rounded="small" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


[FloatingActionButtonSize]({% slug api_buttons_floatingactionbuttonsize %})


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Specifies the size of the FloatingActionButton.
[see example](https://www.telerik.com/kendo-react-ui/components/buttons/floatingactionbutton/appearance).

The possible values are:
* `small` — Applies half of the default padding, e.g. `8px`.
* `medium` — Applies the default padding, e.g. `16px`.
* `large` — Applies one and one half of the default padding, e.g. `24px`.




```jsx
<FloatingActionButton size="large" />
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


Sets additional CSS styles to the Floating Action Button.

```jsx
<FloatingActionButton style={{ backgroundColor: 'blue' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the SVG icon that renders in the FloatingActionButton.

```jsx
import { gearIcon } from '@progress/kendo-svg-icons';

<FloatingActionButton svgIcon={gearIcon} />
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


Sets the `tabIndex` of the main button.

```jsx
<FloatingActionButton tabIndex={0} />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### text?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text of the Floating Action Button.

```jsx
<FloatingActionButton text="Click me" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


[FloatingActionButtonThemeColor]({% slug api_buttons_floatingactionbuttonthemecolor %})


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the theme color of the FloatingActionButton.
[see example](https://www.telerik.com/kendo-react-ui/components/buttons/floatingactionbutton/appearance).

The possible values are:
* `primary`&mdash;Applies coloring based on the primary theme color.
* `secondary`&mdash;Applies coloring based on the secondary theme color.
* `tertiary`&mdash; Applies coloring based on the tertiary theme color.
* `info`&mdash;Applies coloring based on the info theme color.
* `success`&mdash; Applies coloring based on the success theme color.
* `warning`&mdash; Applies coloring based on the warning theme color.
* `error`&mdash; Applies coloring based on the error theme color.
* `dark`&mdash; Applies coloring based on the dark theme color.
* `light`&mdash; Applies coloring based on the light theme color.
* `inverse`&mdash; Applies coloring based on the inverse theme color.




```jsx
<FloatingActionButton themeColor="secondary" />
```



</td>
</tr>
</tbody>
</table>



