---
title: DropDownTreeProps
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the DropDownTreeProps."
api_reference: true
type: inner_api
slug: api_dropdowns_dropdowntreeprops
---

# DropDownTreeProps
Represents the props of the [KendoReact DropDownTree component](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdowntree).


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


Specifies the `accessKey` of the DropDownTree.

```jsx
<DropDownTree accessKey="k" />
```






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
<DropDownTree adaptive={true} />
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
<DropDownTree adaptiveSubtitle="Adaptive Popup Subtitle" />
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
<DropDownTree adaptiveTitle="Adaptive Popup Title" />
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

```jsx
<DropDownTree ariaDescribedBy="description" />
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
<DropDownTree ariaLabelledBy="label" />
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


Sets additional classes to the DropDownTree.

```jsx
<DropDownTree className="custom-class" />
```



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


Sets the data of the DropDownTree ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdowntree)).

```jsx
<DropDownTree data={[{ text: 'Parent', items: [{ text: 'Child' }] }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItemKey


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the key for comparing the data items of the DropDownTree ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdowntree)).
If `dataItemKey` is not set, the DropDownTree compares the items by reference.

```jsx
<DropDownTree dataItemKey="id" />
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

```jsx
<DropDownTree dir="rtl" />
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


Sets the disabled state of the DropDownTree.

```jsx
<DropDownTree disabled={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation of the expanded state of the item.

```jsx
<DropDownTree expandField="expanded" />
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


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the DropDownTree.

The available options are:
- solid
- flat
- outline




```jsx
<DropDownTree fillMode="flat" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the value of filtering input.
Useful for making the filtering input a [controlled component](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components).

```jsx
<DropDownTree filter="search text" />
```



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


Enables the filtering functionality of the DropDownTree ([more information and examples](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdowntree/filtering)).

```jsx
<DropDownTree filterable={true} />
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
<DropDownTree id="dropdown-tree" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ItemProps]({% slug api_dropdowns_itemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be used for rendering each of the DropDownTree items
([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdowntree/custom-rendering#toc-items-and-value-element)).

```jsx
<DropDownTree item={(props) => <CustomItem {...props} />} />
```



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


Renders a floating label for the DropDownTree.

```jsx
<DropDownTree label="Select an item" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### listNoData?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ListNoDataProps]({% slug api_dropdowns_listnodataprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be rendered in the DropDownTree popup when no data is available
([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdowntree/custom-rendering#toc-no-data)).

```jsx
<DropDownTree listNoData={() => <div>No data available</div>} />
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


Sets the loading state of the DropDownTree ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdowntree/filtering#toc-visualize-filtering)).

```jsx
<DropDownTree loading={true} />
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


(event: [DropDownTreeBlurEvent]({% slug api_dropdowns_dropdowntreeblurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the DropDownTree gets blurred.

```jsx
<DropDownTree onBlur={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownTreeChangeEvent]({% slug api_dropdowns_dropdowntreechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the value of the DropDownTree is about to change ([see examples](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdowntree)).

```jsx
<DropDownTree onChange={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownTreeCloseEvent]({% slug api_dropdowns_dropdowntreecloseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the DropDownTree is about to close.

```jsx
<DropDownTree onClose={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpandChange?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the expanding or collapsing of an item is requested ([see examples](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdowntree)).

```jsx
<DropDownTree onExpandChange={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterChange?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownTreeFilterChangeEvent]({% slug api_dropdowns_dropdowntreefilterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user types in the filter input
([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdowntree/filtering#toc-basic-configuration)).
You can filter the source based on the passed filtration value.

```jsx
<DropDownTree onFilterChange={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownTreeFocusEvent]({% slug api_dropdowns_dropdowntreefocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user focuses the DropDownTree.

```jsx
<DropDownTree onFocus={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownTreeOpenEvent]({% slug api_dropdowns_dropdowntreeopenevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the DropDownTree is about to open.

```jsx
<DropDownTree onOpen={(event) => console.log(event)} />
```



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


Sets the opened state of the DropDownTree.

```jsx
<DropDownTree opened={true} />
```



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


The hint that is displayed when the DropDownTree is empty.

```jsx
<DropDownTree placeholder="Select an item" />
```



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


Configures the popup of the DropDownTree.

```jsx
<DropDownTree popupSettings={{ animate: false }} />
```



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


Configures the `roundness` of the DropDownTree.

The available options are:
- small
- medium
- large
- full




```jsx
<DropDownTree rounded="full" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation of the selected state of the item.

```jsx
<DropDownTree selectField="selected" />
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


Configures the `size` of the DropDownTree.

The available options are:
- small
- medium
- large




```jsx
<DropDownTree size="large" />
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


The styles that are applied to the DropDownTree.

```jsx
<DropDownTree style={{ width: '300px' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### subItemsField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide an array representation of the item subitems.
Defaults to 'items'.

```jsx
<DropDownTree subItemsField="children" />
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


Specifies the `tabIndex` of the DropDownTree.

```jsx
<DropDownTree tabIndex={0} />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### textField


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data item field that represents the item text ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdowntree)).

```jsx
<DropDownTree textField="name" />
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


Sets the value of the DropDownTree ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdowntree)).
It can be an object from the data-tree.

```jsx
<DropDownTree value={{ text: 'Parent' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### valueHolder?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ValueHolderProps]({% slug api_dropdowns_valueholderprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be used for rendering the selected value
([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdowntree/custom-rendering#toc-items-and-value-element)).

```jsx
<DropDownTree valueHolder={(props) => <CustomValueHolder {...props} />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### valueMap?


</td>
<td type class="table-cell-type">


<code>


(value: any) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents a callback function, which returns the value for submitting. The returned value will be rendered in an `option` of a hidden [`select`](https://react.dev/reference/react-dom/components/select) element.

```jsx
<DropDownTree valueMap={value => value && value.id} />
```



</td>
</tr>
</tbody>
</table>



