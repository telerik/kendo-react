---
title: DropDownListProps
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the DropDownListProps."
api_reference: true
type: inner_api
slug: api_dropdowns_dropdownlistprops
---

# DropDownListProps
Represents the props of the [KendoReact DropDownList component](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist).


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


Specifies the `accessKey` of the DropDownList.

```jsx
<DropDownList accessKey="d" />
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
<DropDownList adaptive={true} />
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
<DropDownList adaptiveSubtitle="Adaptive Popup Subtitle" />



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
<DropDownList adaptiveTitle="Adaptive Popup Title" />
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
<DropDownList ariaDescribedBy="error-message-id" />
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


The accessible label of the component. By default is set to value of `label` prop.

```jsx
<DropDownList ariaLabel="Accessible Label" />
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
<DropDownList ariaLabelledBy="label-id" />
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


Sets additional classes to the DropDownList.

```jsx
<DropDownList className="custom-class" />
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


Sets the data of the DropDownList ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/binding)).

```jsx
<DropDownList data={['Item1', 'Item2', 'Item3']} />
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


Sets the key for comparing the data items of the DropDownList. If `dataItemKey` is not set, the DropDownList compares the items by reference ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/binding#toc-datasets-of-objects)).

```jsx
<DropDownList dataItemKey="id" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultItem?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the text of the default empty item. The type of the defined value has to match the data type.

```jsx
<DropDownList defaultItem="Select an item" />
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


Sets the default value of the DropDownList ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/default-item)). Similar to the native `select` HTML element.

```jsx
<DropDownList defaultValue="Item1" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### delay?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the delay before an item search is performed. When filtration is disabled, use this option.

```jsx
<DropDownList delay={300} />
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
<DropDownList dir="rtl" />
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


Sets the disabled state of the DropDownList.

```jsx
<DropDownList disabled={true} />
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


Configures the `fillMode` of the DropDownList.

The available options are:
- solid
- flat
- outline




```jsx
<DropDownList fillMode="flat" />
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
<DropDownList filter="search text" />
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


Enables the filtering functionality of the DropDownList ([more information and examples](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/filtering)).

```jsx
<DropDownList filterable={true} />
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


If set, the DropDownList will use it to get the focused item index.

Default functionality returns the first item which starts with the input text.

```jsx
const focusedItemIndex = (data, inputText, textField) => {
    let text = inputText.toLowerCase();
    return data.findIndex(item =>
        String(textField ? item[textField] : item).toLowerCase().includes(text));
};

<DropDownList focusedItemIndex={focusedItemIndex} />
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


Sets the footer component of the DropDownList ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/custom-rendering#toc-headers-and-footers)).

```jsx
<DropDownList footer={<div>Footer Content</div>} />
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
<DropDownList groupField="category" />
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
<DropDownList groupHeaderItemRender={(li, itemProps) => <li>{itemProps.dataItem}</li>} />
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
<DropDownList groupStickyHeaderItemRender={(div, stickyHeaderProps) => <div>{stickyHeaderProps.dataItem}</div>} />
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


Sets the header component of the DropDownList ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/custom-rendering#toc-headers-and-footers)).

```jsx
<DropDownList header={<div>Header Content</div>} />
```



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
<DropDownList iconClassName="custom-icon-class" />
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
<DropDownList id="dropdown-id" />
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


Enables a case-insensitive search. When filtering is disabled, use this option.

```jsx
<DropDownList ignoreCase={true} />
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


Fires when a DropDownList item is about to be rendered ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/custom-rendering#toc-items)). Used to override the default appearance of the list items.

```jsx
<DropDownList itemRender={(li, itemProps) => <li>{itemProps.dataItem}</li>} />
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


Renders a floating label for the DropDownList.

```jsx
<DropDownList label="Dropdown Label" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### leftRightKeysNavigation?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `false`, the DropDownList will not navigate over its data through left and right keys.
Useful when the DropDownList is placed inside a toolbar which needs to handle left and right keys.

```jsx
<DropDownList leftRightKeysNavigation={false} />
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


Fires when the element which indicates no data in the popup is about to be rendered ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/custom-rendering#toc-no-data)). Used to override the default appearance of the element.

```jsx
<DropDownList listNoDataRender={(element) => <div>No data available</div>} />
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


Sets the loading state of the DropDownList.

```jsx
<DropDownList loading={true} />
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


Specifies the `name` property of the `select` DOM element.

```jsx
<DropDownList name="dropdown-name" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownListBlurEvent]({% slug api_dropdowns_dropdownlistblurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the DropDownList gets blurred.

```jsx
<DropDownList onBlur={(event) => console.log('Blurred')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownListChangeEvent]({% slug api_dropdowns_dropdownlistchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the value of the DropDownList is about to change ([see examples](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/binding)).

```jsx
<DropDownList onChange={(event) => console.log('Value changed')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownListCloseEvent]({% slug api_dropdowns_dropdownlistcloseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the DropDownList is about to close.

```jsx
<DropDownList onClose={(event) => console.log('Popup closed')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterChange?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownListFilterChangeEvent]({% slug api_dropdowns_dropdownlistfilterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user types in the filter input. You can filter the source based on the passed filtration value.

```jsx
<DropDownList onFilterChange={(event) => console.log('Filter changed')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownListFocusEvent]({% slug api_dropdowns_dropdownlistfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user focuses the DropDownList.

```jsx
<DropDownList onFocus={(event) => console.log('Focused')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownListOpenEvent]({% slug api_dropdowns_dropdownlistopenevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the DropDownList is about to open.

```jsx
<DropDownList onOpen={(event) => console.log('Popup opened')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPageChange?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownListPageChangeEvent]({% slug api_dropdowns_dropdownlistpagechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when both the virtual scrolling of the DropDownList is enabled and the component requires data for another page ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/virtualization)).

```jsx
<DropDownList onPageChange={(event) => console.log('Page changed')} />
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


Sets the opened and closed state of the DropDownList.

```jsx
<DropDownList opened={true} />
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


Configures the popup of the DropDownList.

```jsx
<DropDownList popupSettings={{ animate: true }} />
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


Configures the `roundness` of the DropDownList.

The available options are:
- small
- medium
- large
- full




```jsx
<DropDownList rounded="large" />
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


Configures the `size` of the DropDownList.

The available options are:
- small
- medium
- large




```jsx
<DropDownList size="small" />
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


Defines if DropDownList's disabled items will be skipped or focused when navigating through the list of items using a keyboard. Defaults to `true`.

```jsx
<DropDownList skipDisabledItems={false} />
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


The styles that are applied to the DropDownList.

```jsx
<DropDownList style={{ width: '200px' }} />
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
<DropDownList svgIcon={{ name: 'custom-icon' }} />
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


Specifies the `tabIndex` of the DropDownList.

```jsx
<DropDownList tabIndex={0} />
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


Sets the data item field that represents the item text ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/default-item)). If the data contains only primitive values, do not define it.

```jsx
<DropDownList textField="name" />
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


Sets the title attribute to the DropDownList DOM element.

```jsx
<DropDownList title="Dropdown Title" />
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


Sets the value of the DropDownList ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/binding)). It can either be of the primitive (string, numbers) or of the complex (objects) type.

```jsx
<DropDownList value="Item1" />
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
const App = () => {
   return (
      <form>
          <DropDownList
              data={[ { text: "Austria", id: 1 } , { text: "Belarus", id: 2 } ]}
              valueMap={value => value && value.id}
          />
          <Button type="submit">Submit</Button>
      </form>
   );
}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### valueRender?


</td>
<td type class="table-cell-type">


<code>


(element: ReactElement&lt;HTMLSpanElement&gt;, value: any) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the element which renders the value is about to be rendered ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/custom-rendering#toc-values)). Used to override the default appearance of the element.

```jsx
<DropDownList valueRender={(element, value) => <span>{value}</span>} />
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


Configures the virtual scrolling of the DropDownList ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/virtualization)).

```jsx
<DropDownList virtual={{ pageSize: 20 }} />
```



</td>
</tr>
</tbody>
</table>



