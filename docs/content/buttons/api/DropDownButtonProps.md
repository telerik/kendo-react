---
title: DropDownButtonProps
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the DropDownButtonProps."
api_reference: true
type: inner_api
slug: api_buttons_dropdownbuttonprops
---

# DropDownButtonProps



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


Specifies the `accessKey` of the main button.





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


The accessible label of the component.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### buttonClass?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `className` of the main button.


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


Determines the children nodes.


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


Sets the `className` of the DropDownButton component.


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


Sets the direction of the component.


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


Determines whether the component is disabled ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/dropdownbutton/disabled)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endIcon?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets an SVG icon or custom element after the content of the DropDownButton. For the custom component, we recommend using [Phrasing content](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#phrasing_content)
but there must be no [Interactive content](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#interactive_content).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"link" | "flat" | "solid" | "outline" | "clear"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the DropDownButton.

The available options are:
- `solid`
- `outline`
- `flat`
- `link`
- `clear`




```tsx
<DropDownButton fillMode="outline" text="Actions" />
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


Defines an icon that will be rendered next to the main button text ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/dropdownbutton/icons)).


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


Defines an icon with a custom CSS class that will be rendered next to the main button text ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/dropdownbutton/icons)).


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


Sets the `id` property of the top div element of the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### imageUrl?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the location of an image that will be displayed next to the main button text ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/dropdownbutton/icons)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


"null" | ComponentType&lt;{ item: any; itemIndex: number; }&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A React functional or class component which is used for rendering items ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/dropdownbutton/customization#toc-items-rendering)). The default rendering includes an icon, an image, and text.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemRender?


</td>
<td type class="table-cell-type">


<code>


(li: ReactElement&lt;HTMLLIElement&gt;, props: [ButtonItemProps]({% slug api_buttons_buttonitemprops %})) => ReactNode | ComponentType&lt;{ item: any; itemIndex: number; }&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a dropdown list button item is about to be rendered. Use it to override the default appearance of the list items.
if `item` prop is not declared, `itemRender` behaves like `item`, for backward compatibility with versions before 4.2.0


</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the list items ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/dropdownbutton/data-binding#toc-arrays-of-objects)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownButtonBlurEvent]({% slug api_buttons_dropdownbuttonblurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the component is blurred ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/dropdownbutton/events)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownButtonCloseEvent]({% slug api_buttons_dropdownbuttoncloseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the popup which contains the items is closed ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/dropdownbutton/events)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownButtonFocusEvent]({% slug api_buttons_dropdownbuttonfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the component is focused ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/dropdownbutton/events)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemClick?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownButtonItemClickEvent]({% slug api_buttons_dropdownbuttonitemclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an item is clicked ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/dropdownbutton/events)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownButtonOpenEvent]({% slug api_buttons_dropdownbuttonopenevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the popup which contains the items is opened ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/dropdownbutton/events)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### opened?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Opens the popup of the DropDownButton if set to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupSettings?


</td>
<td type class="table-cell-type">


<code>


[ButtonsPopupSettings]({% slug api_buttons_buttonspopupsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the popup
([see example](https://www.telerik.com/kendo-react-ui/components/buttons/dropdownbutton/customization#toc-popup-behavior)).


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


Configures the `roundness` of the DropDownButton.

The available options are:
- `small`
- `medium`
- `large`
- `full`
- `none`




```tsx
<DropDownButton rounded="full" text="Actions" />
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


Configures the `size` of the DropDownButton.

The available options are:
- `small`
- `medium`
- `large`




```tsx
<DropDownButton size="large" text="Actions" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### startIcon?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets an SVG icon or custom element before the content of the DropDownButton. For the custom component, we recommend using [Phrasing content](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#phrasing_content)
but there must be no [Interactive content](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#interactive_content).


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


Sets additional CSS styles to the component.


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


Defines a SVG icon that will be rendered next to the main button text ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/dropdownbutton/icons)).


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


Specifies the `tabIndex` of the main button.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### text?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text of the main button ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/dropdownbutton)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### textField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the field that will be used for the text of the `items`. `textField` has to be used together with the `items` prop ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/dropdownbutton/data-binding#toc-arrays-of-objects)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


"base" | "error" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "dark" | "light" | "inverse"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `themeColor` of the DropDownButton.

The available options are:
- `base`
- `primary`
- `secondary`
- `tertiary`
- `info`
- `success`
- `warning`
- `error`
- `dark`
- `light`
- `inverse`




```tsx
<DropDownButton themeColor="primary" text="Actions" />
```



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


The title of the component.


</td>
</tr>
</tbody>
</table>



