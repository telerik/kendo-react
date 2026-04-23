---
title: FlatColorPickerProps
description: "Learn how to build custom functionality when working with the React Inputs by Kendo UI with the help of the FlatColorPickerProps."
api_reference: true
type: inner_api
slug: api_inputs_flatcolorpickerprops
---

# FlatColorPickerProps
Represents the properties of [FlatColorPicker](https://www.telerik.com/kendo-react-ui/components/inputs/api/flatcolorpicker) component.


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


#### activeView?


</td>
<td type class="table-cell-type">


<code>


[ColorPickerView]({% slug api_inputs_colorpickerview %})


</code>


</td>
<td class="table-cell-default">


<code>


'gradient''


</code>


</td>
<td class="table-cell-comment">


Sets the initially active view when both 'gradient' and 'palette' views are rendered.
Use with the `views` property.





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


Represents the label of the FlatColorPicker component.





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


Sets additional classes to the FlatColorPicker.


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


Sets the default color value.


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


Determines whether the FlatColorPicker is disabled.


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





</td>
</tr>
<tr>
<td class="table-cell-name">


#### header?


</td>
<td type class="table-cell-type">


<code>


ReactNode | ComponentType&lt;undefined&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets custom header component.


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


Sets the `id` property of the top `div` element of the FlatColorPicker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [FlatColorPickerChangeEvent]({% slug api_inputs_flatcolorpickerchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when the user click the "Apply" button or on blur when the "Apply" button is not present.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPreviewChange?


</td>
<td type class="table-cell-type">


<code>


(event: [FlatColorPickerChangeEvent]({% slug api_inputs_flatcolorpickerchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when the user changes the preview color.


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


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies whether we should display the opacity slider to allow selection of transparency.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### showButtons?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether action buttons will be rendered in the footer.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showClearButton?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether clear button will be rendered in the header.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showPreview?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether preview and revert color boxes will be rendered in the header.


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


`medium`


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the FlatColorPicker.

The available options are:
- `small`
- `medium`
- `large`
- `null`&mdash;This option removes the the built-in size styles of the FlatColorPicker. Allows for custom `padding`.





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


Sets additional CSS styles to the FlatColorPicker.


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


Sets the `tabIndex` property of the FlatColorPicker.


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


Sets the color value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### view?


</td>
<td type class="table-cell-type">


<code>


"ColorGradient" | "ColorPalette"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


**Deprecated**. Use `views` prop instead.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### views?


</td>
<td type class="table-cell-type">


<code>


[ColorPickerView]({% slug api_inputs_colorpickerview %})[]


</code>


</td>
<td class="table-cell-default">


<code>


['gradient', 'palette']`


</code>


</td>
<td class="table-cell-comment">


Specifies the views that will be rendered. By default both the gradient and palette views will be rendered.





</td>
</tr>
</tbody>
</table>



