---
title: ColorGradientProps
description: "Learn how to build custom functionality when working with the React Inputs by Kendo UI with the help of the ColorGradientProps."
api_reference: true
type: inner_api
slug: api_inputs_colorgradientprops
---

# ColorGradientProps
Represents the props of the [KendoReact ColorGradient component](https://www.telerik.com/kendo-react-ui/components/inputs/colorgradient).


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


#### ariaDescribedBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will describe the component, similar to [HTML aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).
For example these elements could contain error or hint message.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represent the label of the component.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelHSV?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the label of the `hsv` drag handle component used inside the ColorGradient.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelledBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will label the component.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaValueText?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the text rendered inside the `hsv` drag handle.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### backgroundColor?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the color contrast tool.
Sets the background color that will be compared to the selected value.
The tool will calculate the contrast ratio between two colors.
Currently, only the RGBA format is supported.

```jsx
<ColorGradient backgroundColor="#ffffff" />
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


Sets additional classes to the ColorGradient.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default value of the ColorGradient.


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




</td>
<td class="table-cell-comment">


Determines whether the ColorGradient is disabled
([more information and example](https://www.telerik.com/kendo-react-ui/components/inputs/colorgradient/disabled)).

```jsx
const App = () => (
    <ColorGradient disabled={true} />
);
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### format?


</td>
<td type class="table-cell-type">


<code>


"hex" | "rgba" | "rgb"


</code>


</td>
<td class="table-cell-default">


<code>


'rgb'


</code>


</td>
<td class="table-cell-comment">


Sets the default input format in the gradient input editor.




```jsx
<ColorGradient format="hex" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### gradientSliderSmallStep?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


2


</code>


</td>
<td class="table-cell-comment">


Determines the step (in pixels) when moving the gradient drag handle using
the keyboard arrow keys while holding the shift key.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### gradientSliderStep?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


5


</code>


</td>
<td class="table-cell-comment">


Determines the step (in pixels) when moving the gradient drag handle
using the keyboard arrow keys.





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


Specifies the id of the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [ColorGradientChangeEvent]({% slug api_inputs_colorgradientchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the event handler that will be fired when the user edits the value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the focus event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### opacity?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether the alpha slider and the alpha input will be displayed. Defaults to `true`.

```jsx
<ColorGradient opacity={false} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the ColorGradient.

The available options are:
- `small`
- `medium`
- `large`




```tsx
<ColorGradient size="large" />
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


The styles that are applied to the ColorGradient.


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


Sets the `tabIndex` property of the ColorGradient.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The value of the ColorGradient.


</td>
</tr>
</tbody>
</table>



