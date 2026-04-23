---
title: ColorPickerProps
description: "Learn how to build custom functionality when working with the React Inputs by Kendo UI with the help of the ColorPickerProps."
api_reference: true
type: inner_api
slug: api_inputs_colorpickerprops
---

# ColorPickerProps
Represents the props of the [KendoReact ColorPicker component](https://www.telerik.com/kendo-react-ui/components/inputs/colorpicker).


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


Sets the initially active view in the popup when both 'gradient' and 'palette' views are rendered.
Use with the `views` property.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### adaptive?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


`false`


</code>


</td>
<td class="table-cell-comment">


Providing different rendering of the popup element based on the screen dimensions.




```jsx
<ColorPicker adaptive={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### adaptiveSubtitle?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text that is rendered as subtitle in the adaptive popup(action sheet).
Applicable only when `adaptive` is set to `true`.

```jsx
<ColorPicker adaptiveSubtitle="Adaptive Popup Subtitle" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### adaptiveTitle?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text that is rendered as title in the adaptive popup(action sheet).
Applicable only when `adaptive` is set to `true`.
If not provided, the title will be the same as the label.

```jsx
<ColorPicker adaptiveTitle="Adaptive Popup Title" />
```



</td>
</tr>
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


Sets additional classes to the ColorPicker.


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


The default value of the ColorPicker
([see example](https://www.telerik.com/kendo-react-ui/components/inputs/colorpicker/default-value)).

```jsx
<ColorPicker defaultValue="#ff0000" />
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


Sets the disabled state of the ColorPicker
([see example](https://www.telerik.com/kendo-react-ui/components/inputs/colorpicker/disabled)).

```jsx
<ColorPicker disabled={true} />
```



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


`solid`


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the ColorPicker.

The available options are:
- solid
- outline
- flat
- null&mdash;Does not set a fillMode `className`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### flatColorPickerSettings?


</td>
<td type class="table-cell-type">


<code>


[FlatColorPickerProps]({% slug api_inputs_flatcolorpickerprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the FlatColorPicker that is displayed in the ColorPicker popup via `views` property.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### gradientSettings?


</td>
<td type class="table-cell-type">


<code>


[ColorPickerGradientSettings]({% slug api_inputs_colorpickergradientsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the ColorGradient that is displayed in the ColorPicker popup
([see example](https://www.telerik.com/kendo-react-ui/components/inputs/colorpicker/custom#toc-customizing-the-gradient-popup)).


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


Defines the name of an [existing icon in the KendoReact theme](https://www.telerik.com/kendo-react-ui/components/styling/icons).
You have to provide only the name of the icon without the `k-icon` or the `k-i-` prefixes.
For example, `edit-tools` will be parsed to `k-icon k-i-edit-tools`
([see example](https://www.telerik.com/kendo-react-ui/components/inputs/colorpicker/custom#displaying-custom-icons)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### iconClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The class name which displays an icon in the ColorPicker button
([see example](https://www.telerik.com/kendo-react-ui/components/inputs/colorpicker/custom#toc-displaying-custom-icons)).


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


#### onActiveColorClick?


</td>
<td type class="table-cell-type">


<code>


(event: [ColorPickerActiveColorClick]({% slug api_inputs_colorpickeractivecolorclick %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when the left side of the ColorPicker is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [ColorPickerBlurEvent]({% slug api_inputs_colorpickerblurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when ColorPicker is blurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [ColorPickerChangeEvent]({% slug api_inputs_colorpickerchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when the user edits the value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [ColorPickerFocusEvent]({% slug api_inputs_colorpickerfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when ColorPicker is focused.


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


Sets the open and close state of the ColorPicker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### paletteSettings?


</td>
<td type class="table-cell-type">


<code>


[ColorPickerPaletteSettings]({% slug api_inputs_colorpickerpalettesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the ColorPalette that is displayed in the ColorPicker popup
([see example](https://www.telerik.com/kendo-react-ui/components/inputs/colorpicker/custom#toc-customizing-the-palette-popup)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupSettings?


</td>
<td type class="table-cell-type">


<code>


[ColorPickerPopupSettings]({% slug api_inputs_colorpickerpopupsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the popup of the ColorPicker.


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


Configures the `roundness` of the ColorPicker.

The available options are:
- small
- medium
- large
- full




```tsx
<ColorPicker rounded="full" />
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


Configures the `size` of the ColorPicker.

The available options are:
- `small`
- `medium`
- `large`




```jsx
<ColorPicker size="large" />
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


Defines the SVG icon.


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


Sets the `tabIndex` property of the ColorPicker.
Defaults to `0`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `title` property of the ColorPicker.


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


Specifies the value of the ColorPicker. Currently, only the RGBA format is supported.

```jsx
<ColorPicker value="rgba(255, 0, 0, 1)" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### view?


</td>
<td type class="table-cell-type">


<code>


[ColorPickerView]({% slug api_inputs_colorpickerview %})


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


Specifies the views that will be rendered in the popup. By default both the gradient and palette views will be rendered.





</td>
</tr>
</tbody>
</table>



