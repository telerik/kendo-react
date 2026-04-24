---
title: AutoCompleteProps
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the AutoCompleteProps."
api_reference: true
type: inner_api
slug: api_dropdowns_autocompleteprops
---

# AutoCompleteProps
Represents the props of the [KendoReact AutoComplete component](https://www.telerik.com/kendo-react-ui/components/dropdowns/autocomplete).


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


Specifies the `accessKey` of the AutoComplete.

```jsx
<AutoComplete accessKey="a" />
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
<AutoComplete adaptive={true} />
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
<AutoComplete adaptiveSubtitle="Adaptive Popup Subtitle" />
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
<AutoComplete adaptiveTitle="Adaptive Popup Title" />
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
<AutoComplete ariaDescribedBy="description" />
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
<AutoComplete ariaLabelledBy="label" />
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


Sets additional classes to the AutoComplete.

```jsx
<AutoComplete className="custom-class" />
```



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


By default, the AutoComplete renders a button on hovering over the component, which resets the value.
If `clearButton` is set to `false`, the button will not be rendered.

```jsx
<AutoComplete clearButton={false} />
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


Sets the data of the AutoComplete ([more information and example](https://www.telerik.com/kendo-react-ui/components/dropdowns/autocomplete/binding)).

```jsx
<AutoComplete data={['Apple', 'Orange', 'Banana']} />
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


Sets the key for comparing the data items of the AutoComplete. If `dataItemKey` is not set, the AutoComplete compares the items by reference.

```jsx
<AutoComplete dataItemKey="id" />
```



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


Sets the default value of the AutoComplete. Similar to the native `input` HTML element.

```jsx
<AutoComplete defaultValue="Orange" />
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
<AutoComplete dir="rtl" />
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


Sets the disabled state of the AutoComplete.

```jsx
<AutoComplete disabled={true} />
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


Configures the `fillMode` of the AutoComplete.

The available options are:
- solid
- flat
- outline




```jsx
<AutoComplete fillMode="flat" />
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


If set, the AutoComplete will use it to get the focused item index.

Default functionality returns the first item which starts with the input text.

```jsx
const focusedItemIndex = (data, inputText, textField) => {
    let text = inputText.toLowerCase();
    return data.findIndex(item =>
        String(textField ? item[textField] : item).toLowerCase().includes(text));
};

<AutoComplete focusedItemIndex={focusedItemIndex} />
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


Sets the footer component of the AutoComplete ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/autocomplete/custom-rendering#toc-headers-and-footers)).

```jsx
<AutoComplete footer={<div>Footer</div>} />
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
<AutoComplete groupField="category" />
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


Fires when a AutoComplete group header item is about to be rendered. Used to override the default appearance of the group's headers.

```jsx
<AutoComplete groupHeaderItemRender={(li, itemProps) => <li>{itemProps.dataItem}</li>} />
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


Fires when a AutoComplete sticky group header item is about to be rendered. Used to override the default appearance of the sticky group header of the component.

```jsx
<AutoComplete groupStickyHeaderItemRender={(div, stickyHeaderProps) => <div>{stickyHeaderProps.dataItem}</div>} />
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


Sets the header component of the AutoComplete ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/autocomplete/custom-rendering#toc-headers-and-footers)).

```jsx
<AutoComplete header={<div>Header</div>} />
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
<AutoComplete id="autocomplete" />
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
<AutoComplete inputAttributes={{ maxLength: 10 }} />
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


Fires when an AutoComplete list item is about to be rendered ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/autocomplete/custom-rendering#toc-items)). Used to override the default appearance of the list items.

```jsx
<AutoComplete itemRender={(li, itemProps) => <li>{itemProps.dataItem}</li>} />
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


Renders a floating label for the AutoComplete.

```jsx
<AutoComplete label="Search" />
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


Fires when the element which indicates no data in the popup is about to be rendered ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/autocomplete/custom-rendering#toc-no-data)). Used to override the default appearance of the element.

```jsx
<AutoComplete listNoDataRender={(element) => <div>No data available</div>} />
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


Sets the loading state of the AutoComplete ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/autocomplete/filtering#toc-basic-configuration)).

```jsx
<AutoComplete loading={true} />
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


(event: [AutoCompleteBlurEvent]({% slug api_dropdowns_autocompleteblurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the AutoComplete gets blurred.

```jsx
<AutoComplete onBlur={(event) => console.log('Blurred', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [AutoCompleteChangeEvent]({% slug api_dropdowns_autocompletechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the value of the AutoComplete is about to change ([more information and example](https://www.telerik.com/kendo-react-ui/components/dropdowns/autocomplete/binding)).

```jsx
<AutoComplete onChange={(event) => console.log('Value changed', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [AutoCompleteCloseEvent]({% slug api_dropdowns_autocompletecloseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the AutoComplete is about to close.

```jsx
<AutoComplete onClose={(event) => console.log('Popup closed', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [AutoCompleteFocusEvent]({% slug api_dropdowns_autocompletefocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user focuses the AutoComplete.

```jsx
<AutoComplete onFocus={(event) => console.log('Focused', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [AutoCompleteOpenEvent]({% slug api_dropdowns_autocompleteopenevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the AutoComplete is about to open.

```jsx
<AutoComplete onOpen={(event) => console.log('Popup opened', event)} />
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


Sets the opened and closed state of the AutoComplete.

```jsx
<AutoComplete opened={true} />
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


The hint that is displayed when the AutoComplete is empty.

```jsx
<AutoComplete placeholder="Type here..." />
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


Configures the popup of the AutoComplete.

```jsx
<AutoComplete popupSettings={{ animate: true }} />
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


Sets a custom prefix to the AutoComplete component.

```jsx
<AutoComplete prefix={<span>Prefix</span>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### readonly?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the read-only state of the AutoComplete.

```jsx
<AutoComplete readonly={true} />
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


Configures the `roundness` of the AutoComplete.

The available options are:
- small
- medium
- large
- full




```jsx
<AutoComplete rounded="large" />
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


Configures the `size` of the AutoComplete.

The available options are:
- small
- medium
- large




```jsx
<AutoComplete size="small" />
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


Defines if AutoComplete's disabled items will be skipped or focused when navigating through the list of items using a keyboard. Defaults to `true`.

```jsx
<AutoComplete skipDisabledItems={false} />
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


The styles that are applied to the AutoComplete.

```jsx
<AutoComplete style={{ width: '300px' }} />
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


Sets a custom suffix to the AutoComplete component.

```jsx
<AutoComplete suffix={<span>Suffix</span>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### suggest?


</td>
<td type class="table-cell-type">


<code>


string | boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the auto-completion of the text based on the first data item ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/autocomplete/suggestions)).

```jsx
<AutoComplete suggest={true} />
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


Specifies the `tabIndex` of the AutoComplete.

```jsx
<AutoComplete tabIndex={0} />
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


Sets the data item field that represents the item text ([see example](https://www.telerik.com/kendo-react-ui/components/dropdowns/autocomplete/binding#toc-datasets-of-objects)). If the data contains only primitive values, do not define it.

```jsx
<AutoComplete textField="name" />
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


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the value of the AutoComplete ([more information and example](https://www.telerik.com/kendo-react-ui/components/dropdowns/autocomplete/binding)).

```jsx
<AutoComplete value="Apple" />
```



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


Fires when the AutoComplete input element is about to be rendered. Use it to override the default appearance of the component.

```jsx
<AutoComplete valueRender={(rendering) => <span>{rendering}</span>} />
```



</td>
</tr>
</tbody>
</table>



