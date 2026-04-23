---
title: MultiSelectTreeProps
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the MultiSelectTreeProps."
api_reference: true
type: inner_api
slug: api_dropdowns_multiselecttreeprops
---

# MultiSelectTreeProps
Represents the props of the [KendoReact MultiSelectTree component](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselecttree).


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


Specifies the `accessKey` of the MultiSelectTree.

```jsx
<MultiSelectTree accessKey="m" />
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
<MultiSelectTree adaptive={true} />
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
<MultiSelectTree adaptiveSubtitle="Adaptive Popup Subtitle" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### adaptiveTitle?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text that is rendered as title in the adaptive popup(action sheet).
Applicable only when `adaptive` is set to `true`.
If not provided, the title will be the same as the label.

```jsx
<MultiSelectTree adaptiveTitle="Adaptive Popup Title" />
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
<MultiSelectTree ariaDescribedBy="description" />
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
<MultiSelectTree ariaLabelledBy="label" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### checkField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation of the checked state of the item.

```jsx
<MultiSelectTree checkField="checked" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### checkIndeterminateField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation of the checked indeterminate state of the item.

```jsx
<MultiSelectTree checkIndeterminateField="indeterminate" />
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


Sets additional classes to the MultiSelectTree.

```jsx
<MultiSelectTree className="custom-class" />
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


Sets the data of the MultiSelectTree ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselecttree)).

```jsx
<MultiSelectTree data={[{ text: 'Node1' }, { text: 'Node2' }]} />
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


Sets the key for comparing the data items of the MultiSelectTree ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselecttree)).
If `dataItemKey` is not set, the MultiSelectTree compares the items by reference.

```jsx
<MultiSelectTree dataItemKey="id" />
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
<MultiSelectTree dir="rtl" />
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


Sets the disabled state of the MultiSelectTree.

```jsx
<MultiSelectTree disabled={true} />
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
<MultiSelectTree expandField="expanded" />
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


Configures the `fillMode` of the MultiSelectTree.

The available options are:
- solid
- flat
- outline




```jsx
<MultiSelectTree fillMode="outline" />
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
<MultiSelectTree filter="search text" />
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


Enables the filtering functionality of the MultiSelectTree ([more information and examples](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselecttree/filtering)).

```jsx
<MultiSelectTree filterable={true} />
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
<MultiSelectTree id="multi-select-tree" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[MultiSelectTreeItemProps]({% slug api_dropdowns_multiselecttreeitemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be used for rendering each of the MultiSelectTree items
([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselecttree/custom-rendering#toc-items-and-value-element)).

```jsx
<MultiSelectTree item={(props) => <div>{props.item.text}</div>} />
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


Renders a floating label for the MultiSelectTree.

```jsx
<MultiSelectTree label="Select items" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### listNoData?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[MultiSelectTreeListNoDataProps]({% slug api_dropdowns_multiselecttreelistnodataprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be rendered in the MultiSelectTree popup when no data is available
([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselecttree/custom-rendering#toc-no-data)).

```jsx
<MultiSelectTree listNoData={() => <div>No data available</div>} />
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


Sets the loading state of the MultiSelectTree ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselecttree/filtering#toc-visualize-filtering)).

```jsx
<MultiSelectTree loading={true} />
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


(event: [MultiSelectTreeBlurEvent]({% slug api_dropdowns_multiselecttreeblurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the MultiSelectTree gets blurred.

```jsx
<MultiSelectTree onBlur={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCancel?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectTreeCancelEvent]({% slug api_dropdowns_multiselecttreecancelevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the MultiSelectTree is about to cancel in ([adaptive mode](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselecttree/adaptive-rendering)).

```jsx
<MultiSelectTree onCancel={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectTreeChangeEvent]({% slug api_dropdowns_multiselecttreechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the value of the MultiSelectTree is about to change ([see examples](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselecttree)).

```jsx
<MultiSelectTree onChange={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectTreeCloseEvent]({% slug api_dropdowns_multiselecttreecloseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the MultiSelectTree is about to close.

```jsx
<MultiSelectTree onClose={(event) => console.log(event)} />
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


Fires when the expanding or collapsing of an item is requested ([see examples](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselecttree)).

```jsx
<MultiSelectTree onExpandChange={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterChange?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectTreeFilterChangeEvent]({% slug api_dropdowns_multiselecttreefilterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user types in the filter input
([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselecttree/filtering#toc-basic-configuration)).
You can filter the source based on the passed filtration value.

```jsx
<MultiSelectTree onFilterChange={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectTreeFocusEvent]({% slug api_dropdowns_multiselecttreefocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user focuses the MultiSelectTree.

```jsx
<MultiSelectTree onFocus={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectTreeOpenEvent]({% slug api_dropdowns_multiselecttreeopenevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the MultiSelectTree is about to open.

```jsx
<MultiSelectTree onOpen={(event) => console.log(event)} />
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


Sets the opened state of the MultiSelectTree.

```jsx
<MultiSelectTree opened={true} />
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


The hint that is displayed when the MultiSelectTree is empty.

```jsx
<MultiSelectTree placeholder="Select items" />
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


Configures the popup of the MultiSelectTree.

```jsx
<MultiSelectTree popupSettings={{ animate: true }} />
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


Configures the `roundness` of the MultiSelectTree.

The available options are:
- small
- medium
- large
- full




```jsx
<MultiSelectTree rounded="full" />
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


Configures the `size` of the MultiSelectTree.

The available options are:
- small
- medium
- large




```jsx
<MultiSelectTree size="large" />
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


The styles that are applied to the MultiSelectTree.

```jsx
<MultiSelectTree style={{ width: '400px' }} />
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
<MultiSelectTree subItemsField="children" />
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


Specifies the `tabIndex` of the MultiSelectTree.

```jsx
<MultiSelectTree tabIndex={0} />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### tag?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[MultiSelectTreeTagProps]({% slug api_dropdowns_multiselecttreetagprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be used for rendering each of the MultiSelectTree tags.

```jsx
<MultiSelectTree tag={(props) => <span>{props.tagData.text}</span>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### tags?


</td>
<td type class="table-cell-type">


<code>


[TagData]({% slug api_dropdowns_tagdata %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the tags of the MultiSelect ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/custom-tags)).

```jsx
<MultiSelectTree tags={[{ text: 'Tag1' }, { text: 'Tag2' }]} />
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


Sets the data item field that represents the item text ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselecttree)).

```jsx
<MultiSelectTree textField="name" />
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


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the value of the MultiSelectTree. It can either be of the primitive (string, numbers) or of the complex (objects) type.

```jsx
<MultiSelectTree value={['Node1']} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### valueMap?


</td>
<td type class="table-cell-type">


<code>


(value: any[]) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents a callback function, which returns the value for submitting. The returned value will be rendered in an `option` of a hidden [`select`](https://react.dev/reference/react-dom/components/select) element.

```jsx
<MultiSelectTree valueMap={value => value && value.id} />
```



</td>
</tr>
</tbody>
</table>



