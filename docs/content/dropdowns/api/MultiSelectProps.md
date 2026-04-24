---
title: MultiSelectProps
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the MultiSelectProps."
api_reference: true
type: inner_api
slug: api_dropdowns_multiselectprops
---

# MultiSelectProps
Represents the props of the [KendoReact MultiSelect component](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect).


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


Specifies the `accessKey` of the MultiSelect.

```jsx
<MultiSelect accessKey="a" />
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
<MultiSelect adaptive={true} />
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


Sets the value of the adaptive filtering input of the of MultiSelect.

```jsx
<MultiSelect adaptiveFilter="Option" />
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
<MultiSelect adaptiveSubtitle="Adaptive Popup Subtitle" />
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
<MultiSelect adaptiveTitle="Adaptive Popup Title" />
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


Specifies whether the MultiSelect allows user-defined values that are not present in the dataset ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/custom-values)). Defaults to `false`.

```jsx
<MultiSelect allowCustom={true} />
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
<MultiSelect ariaDescribedBy="description" />
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


Specifies the accessible label of the interactive component.

```jsx
<MultiSelect ariaLabel="MultiSelect" />
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
<MultiSelect ariaLabelledBy="label" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoClose?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether to close the options list of the MultiSelect after the item selection is finished.

```jsx
<MultiSelect autoClose={false} />
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


Sets additional classes to the MultiSelect.

```jsx
<MultiSelect className="custom-class" />
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


Sets the data of the MultiSelect ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/binding)).

```jsx
<MultiSelect data={['Option1', 'Option2', 'Option3']} />
```



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


Sets the key for comparing the data items of the MultiSelect ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/binding#toc-datasets-of-objects)). If `dataItemKey` is not set, the MultiSelect compares the items by reference.

```jsx
<MultiSelect dataItemKey="id" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default value of the MultiSelect. Similar to the native `select` HTML element.

```jsx
<MultiSelect defaultValue={['Option1']} />
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
<MultiSelect dir="rtl" />
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


Sets the disabled state of the MultiSelect.

```jsx
<MultiSelect disabled={true} />
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


Configures the `fillMode` of the MultiSelect.

The available options are:
- solid
- flat
- outline




```jsx
<MultiSelect fillMode="flat" />
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


Sets the value of filtering input. Useful for making the filtering input a [controlled component](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components).

```jsx
<MultiSelect filter="Option" />
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


Enables the filtering functionality of the MultiSelect ([more information and examples](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/filtering)).

```jsx
<MultiSelect filterable={true} />
```



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


If set, the MultiSelect will use it to get the focused item index.

Default functionality returns the first item which starts with the input text.

```jsx
const focusedItemIndex = (data, inputText, textField) => {
    let text = inputText.toLowerCase();
    return data.findIndex(item =>
        String(textField ? item[textField] : item).toLowerCase().includes(text));
};

<MultiSelect focusedItemIndex={focusedItemIndex} />
```



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


Sets the footer component of the MultiSelect ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/custom-rendering#toc-headers-and-footers)).

```jsx
<MultiSelect footer={<div>Footer</div>} />
```



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
<MultiSelect groupField="category" />
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


Fires when a DropDownList's group header item is about to be rendered. Used to override the default appearance of the group's headers.

```jsx
<MultiSelect groupHeaderItemRender={(li, itemProps) => <div>{itemProps.dataItem}</div>} />
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


Fires when a DropDownList's sticky group header item is about to be rendered. Used to override the default appearance of the sticky group header of the component.

```jsx
<MultiSelect groupStickyHeaderItemRender={(div, stickyHeaderProps) => <div>{stickyHeaderProps.dataItem}</div>} />
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


Sets the header component of the MultiSelect ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/custom-rendering#toc-headers-and-footers)).

```jsx
<MultiSelect header={<div>Header</div>} />
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
<MultiSelect id="multi-select" />
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
<MultiSelect inputAttributes={{ maxLength: 10 }} />
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


Fires when a MultiSelect item is about to be rendered ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/custom-rendering#toc-items)). Used to override the default appearance of the list items.

```jsx
<MultiSelect itemRender={(li, itemProps) => <div>{itemProps.dataItem}</div>} />
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


Renders a floating label for the MultiSelect.

```jsx
<MultiSelect label="Select an option" />
```



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


Fires when the element which indicates no data in the popup is about to be rendered ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/custom-rendering#toc-no-data)). Used to override the default appearance of the element.

```jsx
<MultiSelect listNoDataRender={(element) => <div>No data available</div>} />
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


Sets the loading state of the MultiSelect ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/filtering#toc-basic-configuration)).

```jsx
<MultiSelect loading={true} />
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


(event: [MultiSelectBlurEvent]({% slug api_dropdowns_multiselectblurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the MultiSelect gets blurred.

```jsx
<MultiSelect onBlur={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCancel?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectCancelEvent]({% slug api_dropdowns_multiselectcancelevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the MultiSelect is about to cancel in ([adaptive mode](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/adaptive-rendering)).

```jsx
<MultiSelect onCancel={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectChangeEvent]({% slug api_dropdowns_multiselectchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the value of the MultiSelect is about to change ([see examples](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/binding)).

```jsx
<MultiSelect onChange={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectCloseEvent]({% slug api_dropdowns_multiselectcloseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the MultiSelect is about to close.

```jsx
<MultiSelect onClose={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterChange?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectFilterChangeEvent]({% slug api_dropdowns_multiselectfilterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user types in the filter input ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/filtering#toc-basic-configuration)). You can filter the source based on the passed filtration value.

```jsx
<MultiSelect onFilterChange={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectFocusEvent]({% slug api_dropdowns_multiselectfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user focuses the MultiSelect.

```jsx
<MultiSelect onFocus={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectOpenEvent]({% slug api_dropdowns_multiselectopenevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the MultiSelect is about to open.

```jsx
<MultiSelect onOpen={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPageChange?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectPageChangeEvent]({% slug api_dropdowns_multiselectpagechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when both the virtual scrolling of the MultiSelect is enabled and when the component requires data for another page ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/virtualization)).

```jsx
<MultiSelect onPageChange={(event) => console.log(event)} />
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


Sets the opened and closed state of the MultiSelect.

```jsx
<MultiSelect opened={true} />
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


The hint that is displayed when the MultiSelect is empty.

```jsx
<MultiSelect placeholder="Select an option" />
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


Configures the popup of the MultiSelect.

```jsx
<MultiSelect popupSettings={{ animate: true }} />
```



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


Sets a custom prefix to the MultiSelect component.

```jsx
<MultiSelect prefix={<span>Prefix</span>} />
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


Configures the `roundness` of the MultiSelect.

The available options are:
- small
- medium
- large
- full




```jsx
<MultiSelect rounded="large" />
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


Configures the `size` of the MultiSelect.

The available options are:
- small
- medium
- large




```jsx
<MultiSelect size="small" />
```



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


Defines if MultiSelect's disabled items will be skipped or focused when navigating through the list of items using a keyboard. Defaults to `true`.

```jsx
<MultiSelect skipDisabledItems={false} />
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


The styles that are applied to the MultiSelect.

```jsx
<MultiSelect style={{ width: '300px' }} />
```



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


Sets a custom suffix to the MultiSelect component.

```jsx
<MultiSelect suffix={<span>Suffix</span>} />
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


Specifies the `tabIndex` of the MultiSelect.

```jsx
<MultiSelect tabIndex={0} />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### tagRender?


</td>
<td type class="table-cell-type">


<code>


(tagData: [TagData]({% slug api_dropdowns_tagdata %}), tag: ReactElement&lt;any&gt;) => ReactElement&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a tag element is about to be rendered ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/custom-rendering#toc-tags)). Used to override the default appearance of the element.

```jsx
<MultiSelect tagRender={(tagData, tag) => <span>{tagData.text}</span>} />
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
<MultiSelect tags={[{ text: 'Tag1' }, { text: 'Tag2' }]} />
```



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


Sets the data item field that represents the item text ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/binding#toc-datasets-of-objects)). If the data contains only primitive values, do not define it.

```jsx
<MultiSelect textField="name" />
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


Sets the value of the MultiSelect ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/binding)). It can either be of the primitive (string, numbers) or of the complex (objects) type.

```jsx
<MultiSelect value={['Option1', 'Option2']} />
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


Configures the virtual scrolling of the MultiSelect ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/virtualization)).

```jsx
<MultiSelect virtual={{ pageSize: 20 }} />
```



</td>
</tr>
</tbody>
</table>



