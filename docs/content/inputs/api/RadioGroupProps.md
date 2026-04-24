---
title: RadioGroupProps
description: "Learn how to build custom functionality when working with the React Inputs by Kendo UI with the help of the RadioGroupProps."
api_reference: true
type: inner_api
slug: api_inputs_radiogroupprops
---

# RadioGroupProps
Represents the props of the [KendoReact RadioGroup component](https://www.telerik.com/kendo-react-ui/components/inputs/radiobutton).


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




```jsx
<RadioGroup ariaDescribedBy="error-message" />
```



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




```jsx
<RadioGroup ariaLabelledBy="group-label" />
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


Specifies a list of CSS classes that will be added to the RadioGroup element.

```jsx
<RadioGroup className="custom-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


[RadioButtonProps]({% slug api_inputs_radiobuttonprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of radio buttons that will be rendered in the RadioGroup ([see example](https://www.telerik.com/kendo-react-ui/components/inputs/radiobutton)).

```jsx
<RadioGroup data={[{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default checked state of a radio button when used in uncontrolled mode ([see example](https://www.telerik.com/kendo-react-ui/components/inputs/radiobutton)).
The `checked` property is passed to the underlying `input` element.

```jsx
<RadioGroup defaultValue={1} />
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
<RadioGroup dir="rtl" />
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




</td>
<td class="table-cell-comment">


Disable all radio buttons ([see example](https://www.telerik.com/kendo-react-ui/components/inputs/radiobutton/disabled)).

```jsx
<RadioGroup disabled={true} />
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


Specifies the value of the `id` attribute that will be added to the RadioGroup element.

```jsx
<RadioGroup id="radio-group" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;HTMLAttributes&lt;HTMLLIElement&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component responsible for visualizing a single item.

The default element is `li` with a [RadioButton](https://www.telerik.com/kendo-react-ui/components/inputs/api/radiobutton) as `children`.

```jsx
<RadioGroup item={(props) => <li>{props.children}</li>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### labelPlacement?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the label position of the radio buttons.
Accepts two options: `before` or `after`. Defaults to `after`.

```jsx
<RadioGroup labelPlacement="before" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### layout?


</td>
<td type class="table-cell-type">


<code>


"vertical" | "horizontal"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the radio group layout.

```jsx
<RadioGroup layout="horizontal" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### name?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `name` property of the `input` DOM elements.

```jsx
<RadioGroup name="options" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [RadioGroupChangeEvent]({% slug api_inputs_radiogroupchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when the changes the selected value.

```jsx
<RadioGroup onChange={(event) => console.log(event.value)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [RadioGroupFocusEvent]({% slug api_inputs_radiogroupfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when Radio button is focused.

```jsx
<RadioGroup onFocus={(event) => console.log('Focused')} />
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


Sets additional CSS styles to the radio group.

```jsx
<RadioGroup style={{ margin: '10px' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### valid?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the validity state of the component.
If `valid` is set, the `required` property will be ignored.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.

```jsx
<RadioGroup valid={false} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


"null" | string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default checked state of a radio button when used in controlled mode ([see example](https://www.telerik.com/kendo-react-ui/components/inputs/radiogroup/controlled_mode)).
The `checked` property is passed to the underlying `input` element.

```jsx
<RadioGroup value={1} />
```



</td>
</tr>
</tbody>
</table>



