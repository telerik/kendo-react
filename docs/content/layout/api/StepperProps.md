---
title: StepperProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the StepperProps."
api_reference: true
type: inner_api
slug: api_layout_stepperprops
---

# StepperProps
Represents the props of the [KendoReact Stepper component](https://www.telerik.com/kendo-react-ui/components/layout/stepper).


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


#### animationDuration?


</td>
<td type class="table-cell-type">


<code>


number | boolean


</code>


</td>
<td class="table-cell-default">


<code>


400


</code>


</td>
<td class="table-cell-comment">


Sets the Stepper animation duration in milliseconds.




```jsx
<Stepper animationDuration={400} />
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


Represents the child elements passed to the Stepper.

```jsx
<Stepper>
  <Step label="Step 1" />
  <Step label="Step 2" />
</Stepper>
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


Specifies a list of CSS classes that will be added to the Stepper.

```jsx
<Stepper className="custom-stepper" />
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


Represents the `dir` HTML attribute, used to switch between LTR and RTL.

```jsx
<Stepper dir="rtl" />
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


Disables the entire Stepper.




```jsx
<Stepper disabled />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### errorIcon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a custom icon rendered inside the step for invalid steps.

```jsx
<Stepper errorIcon="k-icon k-i-warning" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### errorSVGIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a custom SVG icon rendered inside the step for invalid steps.

```jsx
import { gearIcon } from '@progress/kendo-svg-icons';

<Stepper errorSVGIcon={gearIcon} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[StepProps]({% slug api_layout_stepprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component responsible for rendering a single step ([see example](https://www.telerik.com/kendo-react-ui/components/layout/stepper/custom_rendering)).

```jsx
const CustomStep = (props) => <div>{props.label}</div>;
<Stepper item={CustomStep} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### items


</td>
<td type class="table-cell-type">


<code>


[StepProps]({% slug api_layout_stepprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of steps rendered in the Stepper ([see example](https://www.telerik.com/kendo-react-ui/components/layout/stepper)).

```jsx
<Stepper items={[{ label: 'Step 1' }, { label: 'Step 2' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### linear?


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


Specifies whether the Stepper enforces a linear flow ([see example](https://www.telerik.com/kendo-react-ui/components/layout/stepper/linear_mode)).




```jsx
<Stepper linear />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### mode?


</td>
<td type class="table-cell-type">


<code>


"steps" | "labels"


</code>


</td>
<td class="table-cell-default">


<code>


steps


</code>


</td>
<td class="table-cell-comment">


Specifies the Stepper display mode ([see example](https://www.telerik.com/kendo-react-ui/components/layout/stepper/display_modes)).

The possible values are:
* (Default) `steps`&mdash;Renders step indicators and optional labels.
* `labels`&mdash;Renders labels only.




```jsx
<Stepper mode="labels" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [StepperChangeEvent]({% slug api_layout_stepperchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the value is changed.

```jsx
<Stepper onChange={(event) => console.log(event.value)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [StepperFocusEvent]({% slug api_layout_stepperfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a step is focused.

```jsx
<Stepper onFocus={(event) => console.log(event.step)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### orientation?


</td>
<td type class="table-cell-type">


<code>


"vertical" | "horizontal"


</code>


</td>
<td class="table-cell-default">


<code>


horizontal


</code>


</td>
<td class="table-cell-comment">


Specifies the Stepper orientation ([see example](https://www.telerik.com/kendo-react-ui/components/layout/stepper/orientation)).

The possible values are:
* (Default) `horizontal`
* `vertical`




```jsx
<Stepper orientation="vertical" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectOnFocus?


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


Indicates whether the selection changes upon focus change or requires additional action (Enter or Space key press) to select the focused step.




```jsx
<Stepper selectOnFocus />
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


Sets additional CSS styles to the Stepper.

```jsx
<Stepper style={{ backgroundColor: 'lightblue' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### successIcon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a custom icon rendered inside the step for valid steps.

```jsx
<Stepper successIcon="k-icon k-i-check" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### successSVGIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a custom SVG icon rendered inside the step for valid steps.

```jsx
import { gearIcon } from '@progress/kendo-svg-icons';

<Stepper successSVGIcon={gearIcon} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the index of the selected step.

```jsx
<Stepper value={1} />
```



</td>
</tr>
</tbody>
</table>



