---
title: MultiColumnComboBoxProps
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the MultiColumnComboBoxProps."
api_reference: true
type: inner_api
slug: api_dropdowns_multicolumncomboboxprops
---

# MultiColumnComboBoxProps
Represents the properties of the [MultiColumnComboBox](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/multicolumncombobox) component.


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


Specifies the `accessKey` of the MultiColumnComboBox.


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
<ComboBox adaptive={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### adaptiveFilter?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the value of the adaptive filtering input of the ComboBox.

```jsx
<ComboBox adaptiveFilter="Option" />
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
<ComboBox adaptiveSubtitle="Adaptive Popup Subtitle" />



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
<ComboBox adaptiveTitle="Adaptive Popup Title" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### allowCustom?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether the MultiColumnComboBox allows user-defined values that are not present in the dataset. Defaults to `false`.


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

```jsx
<ComboBox ariaDescribedBy="descriptionId" />
```






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

```jsx
<ComboBox ariaLabel="ComboBox Label" />
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
<ComboBox ariaLabelledBy="labelId" />
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


Sets additional classes to the MultiColumnComboBox.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### clearButton?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If `clearButton` is set to `true`, the MultiColumnComboBox renders a button on hovering over the component. Clicking this button resets the value of the MultiColumnComboBox to `undefined` and triggers the `change` event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columns


</td>
<td type class="table-cell-type">


<code>


[MultiColumnComboBoxColumn]({% slug api_dropdowns_multicolumncomboboxcolumn %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the columns array of the MultiColumnComboBox.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data of the MultiColumnComboBox.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItemKey?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the key for comparing the data items of the MultiColumnComboBox. If `dataItemKey` is not set, the MultiColumnComboBox compares the items by reference.


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


Sets the default value of the MultiColumnComboBox. Similar to the native `select` HTML element.


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

```jsx
<ComboBox dir="rtl" />
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


Sets the disabled state of the MultiColumnComboBox.


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


Configures the `fillMode` of the MultiColumnComboBox.

The available options are:
- solid
- flat
- outline





</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


"null" | string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the value of MultiColumnComboBox input. Useful for making the MultiColumnComboBox input a controlled component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the filtering functionality of the MultiColumnComboBox.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### focusedItemIndex?


</td>
<td type class="table-cell-type">


<code>


(data: any, inputText: string, textField?: string) => number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set, the MultiColumnComboBox will use it to get the focused item index. Default functionality returns the first item which starts with the input text.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### footer?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the footer component of the MultiColumnComboBox.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data item field that represents the start of a group. Applicable to objects data.

```jsx
<ComboBox groupField="category" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupHeaderItemRender?


</td>
<td type class="table-cell-type">


<code>


(li: ReactElement&lt;HTMLLIElement&gt;, itemProps: [ListGroupItemProps]({% slug api_dropdowns_listgroupitemprops %})) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a ComboBox group header item is about to be rendered. Used to override the default appearance of the group's headers when the component is configured in `modern` group mode.

```jsx
<ComboBox groupHeaderItemRender={(li, itemProps) => <li>{itemProps.dataItem}</li>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupStickyHeaderItemRender?


</td>
<td type class="table-cell-type">


<code>


(div: ReactElement&lt;HTMLDivElement&gt;, stickyHeaderProps: [GroupStickyHeaderProps]({% slug api_dropdowns_groupstickyheaderprops %})) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a ComboBox sticky group header item is about to be rendered. Used to override the default appearance of the sticky group header of the component.

```jsx
<ComboBox groupStickyHeaderItemRender={(div, stickyHeaderProps) => <div>{stickyHeaderProps.group}</div>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### header?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the header component of the MultiColumnComboBox.


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


Sets CSS classes to the expand `icon` DOM element.

```jsx
<ComboBox iconClassName="custom-icon-class" />
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


Specifies the id of the component.

```jsx
<ComboBox id="comboBoxId" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### ignoreCase?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether the ComboBox text matching should be case-insensitive when selecting values on blur or Enter key.
When set to `true`, typing "football" will match and select "Football" from the list.
Defaults to `false` (case-sensitive matching).

```jsx
<ComboBox ignoreCase={true} />
```



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

```jsx
<ComboBox inputAttributes={{ maxLength: 10 }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemRender?


</td>
<td type class="table-cell-type">


<code>


(li: ReactElement&lt;HTMLLIElement&gt;, itemProps: [ListItemProps]({% slug api_dropdowns_listitemprops %})) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a MultiColumnComboBox list item is about to be rendered. Used to override the default appearance of the list items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### label?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Renders a floating label for the MultiColumnComboBox.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### listNoDataRender?


</td>
<td type class="table-cell-type">


<code>


(element: ReactElement&lt;HTMLDivElement&gt;) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the element which indicates no data in the popup is about to be rendered. Used to override the default appearance of the element.

```jsx
<ComboBox listNoDataRender={(element) => <div>No data available</div>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### loading?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the loading state of the MultiColumnComboBox.


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


Specifies the `name` property of the `input` DOM element.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [ComboBoxBlurEvent]({% slug api_dropdowns_comboboxblurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the MultiColumnComboBox gets blurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [ComboBoxChangeEvent]({% slug api_dropdowns_comboboxchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the value of the MultiColumnComboBox is about to change.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [ComboBoxCloseEvent]({% slug api_dropdowns_comboboxcloseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the MultiColumnComboBox is about to close.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterChange?


</td>
<td type class="table-cell-type">


<code>


(event: [ComboBoxFilterChangeEvent]({% slug api_dropdowns_comboboxfilterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user types in the filter input. You can filter the source based on the passed filtration value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [ComboBoxFocusEvent]({% slug api_dropdowns_comboboxfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user focuses the MultiColumnComboBox.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [ComboBoxOpenEvent]({% slug api_dropdowns_comboboxopenevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the MultiColumnComboBox is about to open.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPageChange?


</td>
<td type class="table-cell-type">


<code>


(event: [ComboBoxPageChangeEvent]({% slug api_dropdowns_comboboxpagechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when both the virtual scrolling of the MultiColumnComboBox is enabled and the component requires data for another page.


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


Sets the opened and closed state of the MultiColumnComboBox.


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


The hint that is displayed when the MultiColumnComboBox is empty.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupSettings?


</td>
<td type class="table-cell-type">


<code>


[DropDownsPopupSettings]({% slug api_dropdowns_dropdownspopupsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the popup of the MultiColumnComboBox.


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


Sets a custom prefix to the MultiColumnComboBox component.


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


Configures the `roundness` of the MultiColumnComboBox.

The available options are:
- small
- medium
- large
- full





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


Configures the `size` of the MultiColumnComboBox.

The available options are:
- small
- medium
- large





</td>
</tr>
<tr>
<td class="table-cell-name">


#### skipDisabledItems?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if ComboBox's disabled items will be skipped or focused when navigating through the list of items using a keyboard. Defaults to `true`.

```jsx
<ComboBox skipDisabledItems={false} />
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


The styles that are applied to the MultiColumnComboBox.


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


Sets a custom suffix to the MultiColumnComboBox component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### suggest?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the auto-completion of the text based on the first data item ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/combobox/suggestions)).

```jsx
<ComboBox suggest={true} />
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


Sets the specified SVG icon.

```jsx
<ComboBox svgIcon={{ name: 'custom-icon' }} />
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


Specifies the `tabIndex` of the MultiColumnComboBox.


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


Sets the data item field that represents the item text. If the data contains only primitive values, do not define it.

```jsx
<ComboBox textField="name" />
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


Sets the title attribute to the underlying input element of the ComboBox.

```jsx
<ComboBox title="ComboBox Title" />
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


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the value of the MultiColumnComboBox. It can either be of the primitive (string, numbers) or of the complex (objects) type.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### valueRender?


</td>
<td type class="table-cell-type">


<code>


(rendering: ReactElement&lt;HTMLSpanElement&gt;) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the ComboBox input element is about to be rendered. Use it to override the default appearance of the component.

```jsx
<ComboBox valueRender={(rendering) => <span>{rendering}</span>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### virtual?


</td>
<td type class="table-cell-type">


<code>


[VirtualizationSettings]({% slug api_dropdowns_virtualizationsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the virtual scrolling of the MultiColumnComboBox.


</td>
</tr>
</tbody>
</table>



