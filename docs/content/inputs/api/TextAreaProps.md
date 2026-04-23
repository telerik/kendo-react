---
title: TextAreaProps
description: "Learn how to build custom functionality when working with the React Inputs by Kendo UI with the help of the TextAreaProps."
api_reference: true
type: inner_api
slug: api_inputs_textareaprops
---

# TextAreaProps
Represents the props of the [KendoReact TextArea component](https://www.telerik.com/kendo-react-ui/components/inputs/textarea).


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


#### autoFocus?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `autoFocus` HTML attribute that will be applied to the input element of the TextArea. (Defaults to `false`)





</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoSize?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the textarea element will resize its height automatically ([see example](https://www.telerik.com/kendo-react-ui/components/inputs/textarea/sizing)).
Defaults to `false`.

Setting the value of the prop to `true` will make the TextArea component to ignore the resize behavior of the `resizable` prop.


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


Specifies a list of CSS classes that will be added to the TextArea.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


string | number | string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default value of the TextArea ([see example](https://www.telerik.com/kendo-react-ui/components/inputs/textarea/default_state)).


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


Represents the `dir` HTML attribute.


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


Specifies if the TextArea is disabled ([see example](https://www.telerik.com/kendo-react-ui/components/inputs/textarea/disabled)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"flat" | "solid" | "outline"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the TextArea.

The available options are:
- solid
- outline
- flat




```tsx
<TextArea fillMode="outline" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### flow?


</td>
<td type class="table-cell-type">


<code>


"vertical" | "horizontal"


</code>


</td>
<td class="table-cell-default">


<code>


`horizontal`


</code>


</td>
<td class="table-cell-comment">


Configures the orientation/flow of the TextArea layout when using prefix or suffix.

The available options are:
- horizontal &mdash; Prefix and suffix are positioned to the left and right of the textarea(default).
- vertical &mdash; Prefix and suffix are positioned above and below the textarea.





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


Sets the `id` of the TextArea.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### inputAttributes?


</td>
<td type class="table-cell-type">


<code>


React.InputHTMLAttributes&lt;HTMLInputElement&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the HTML attributes of the inner focusable input element.
Attributes which are essential for certain component functionalities cannot be changed.





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


Specifies the `name` property of the `textarea` DOM element.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [TextAreaBlurEvent]({% slug api_inputs_textareablurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when TextArea is blurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TextAreaChangeEvent]({% slug api_inputs_textareachangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when the changes the selected value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [TextAreaFocusEvent]({% slug api_inputs_textareafocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when TextArea is focused.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### placeholder?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The hint that is displayed when the TextArea is empty.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### prefix?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a custom prefix to the TextArea component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### readOnly?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the read-only state of the TextArea.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### required?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if `null` is a valid value for the component.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resizable?


</td>
<td type class="table-cell-type">


<code>


"none" | "vertical" | "horizontal" | "both"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the resize behavior of the TextArea.
The available options are:
- none &mdash; The TextArea cannot be resized.
- vertical &mdash; The TextArea can be resized vertically.
- horizontal &mdash; The TextArea can be resized horizontally.
- both(default) &mdash; The TextArea can be resized both vertically and horizontally.


To be able to resize the TextArea, you should not set the `autoSize` property to `true`.
To be able to resize the component horizontally, add the following inline style to the TextArea:

```html
<TextArea resizable='horizontal' style={{width: 'auto'}}  />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rounded?


</td>
<td type class="table-cell-type">


<code>


"small" | "none" | "medium" | "large" | "full"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `roundness` of the TextArea.

The available options are:
- small
- medium
- large
- full




```tsx
<TextArea rounded="full" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### rows?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies an exact height size for the TextArea to take ([see example](https://www.telerik.com/kendo-react-ui/components/inputs/textarea/sizing)).


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


Configures the `size` of the TextArea.

The available options are:
- small
- medium
- large




```tsx
<TextArea size="large" />
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


Sets additional CSS styles to the TextArea.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### suffix?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a custom suffix to the TextArea component.


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


Sets the `tabIndex` property of the TextArea.
Defaults to `0`.





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


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validationMessage?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the form error message of the component. If set to an empty string, no error will be thrown.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validityStyles?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `false`, no visual representation of the invalid state of the component will be applied.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


string | number | string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the value to be submitted ([see example](https://www.telerik.com/kendo-react-ui/components/inputs/textarea/controlled_mode)).


</td>
</tr>
</tbody>
</table>



