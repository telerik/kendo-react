---
title: ChipListProps
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the ChipListProps."
api_reference: true
type: inner_api
slug: api_buttons_chiplistprops
---

# ChipListProps
Represents the properties of [ChipList](https://www.telerik.com/kendo-react-ui/components/buttons/api/chiplist) component.


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


Identifies the element(s) which describe the component, similar to [HTML aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).
For example, these elements could contain error or hint message.

```jsx
<ChipList ariaDescribedBy="description" />
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
<ChipList ariaLabel="ChipList" />
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


Identifies the element(s) which label the component.

```jsx
<ChipList ariaLabelledBy="label" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### chip?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ChipProps]({% slug api_buttons_chipprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents Chip component.

```jsx
<ChipList chip={CustomChip} />
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


Sets additional classes to the ChipList.

```jsx
<ChipList className="custom-chiplist" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the data about the child Chips.

```jsx
<ChipList data={[{ text: 'Chip1' }, { text: 'Chip2' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultData?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the default data about the child Chips.

```jsx
<ChipList defaultData={[{ text: 'DefaultChip1' }, { text: 'DefaultChip2' }]} />
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


Represents the default value of the selection state of Chip component.

```jsx
<ChipList defaultValue={[{ text: 'DefaultSelectedChip' }]} />
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


The ChipList direction 'ltr' as default or 'rtl'.

```jsx
<ChipList dir="rtl" />
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


Determines of ChipList is disabled.

```jsx
<ChipList disabled={true} />
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


Sets the `id` property of the top div element of the ChipList.

```jsx
<ChipList id="chiplist1" />
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


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [ChipListChangeEvent]({% slug api_buttons_chiplistchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires after value change.

```jsx
<ChipList onChange={(event) => console.log(event.value)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick?


</td>
<td type class="table-cell-type">


<code>


(args: KendoMouseEvent&lt;[ChipListHandle]({% slug api_buttons_chiplisthandle %})&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the element is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDataChange?


</td>
<td type class="table-cell-type">


<code>


(event: [ChipListDataChangeEvent]({% slug api_buttons_chiplistdatachangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires after Chip data change.

```jsx
<ChipList onDataChange={(event) => console.log(event.value)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDoubleClick?


</td>
<td type class="table-cell-type">


<code>


(args: KendoMouseEvent&lt;[ChipListHandle]({% slug api_buttons_chiplisthandle %})&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the element is double-clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseDown?


</td>
<td type class="table-cell-type">


<code>


(args: KendoMouseEvent&lt;[ChipListHandle]({% slug api_buttons_chiplisthandle %})&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the mouse button is pressed down on the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseEnter?


</td>
<td type class="table-cell-type">


<code>


(args: KendoMouseEvent&lt;[ChipListHandle]({% slug api_buttons_chiplisthandle %})&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the mouse pointer enters the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseLeave?


</td>
<td type class="table-cell-type">


<code>


(args: KendoMouseEvent&lt;[ChipListHandle]({% slug api_buttons_chiplisthandle %})&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the mouse pointer leaves the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseMove?


</td>
<td type class="table-cell-type">


<code>


(args: KendoMouseEvent&lt;[ChipListHandle]({% slug api_buttons_chiplisthandle %})&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the mouse pointer moves over the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseOut?


</td>
<td type class="table-cell-type">


<code>


(args: KendoMouseEvent&lt;[ChipListHandle]({% slug api_buttons_chiplisthandle %})&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the mouse pointer leaves the element or any of its child elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseOver?


</td>
<td type class="table-cell-type">


<code>


(args: KendoMouseEvent&lt;[ChipListHandle]({% slug api_buttons_chiplisthandle %})&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the mouse pointer moves over the element or any of its child elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseUp?


</td>
<td type class="table-cell-type">


<code>


(args: KendoMouseEvent&lt;[ChipListHandle]({% slug api_buttons_chiplisthandle %})&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fired when the mouse button is released over the element.


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


#### selection?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the selection state of Chip component.

```jsx
<ChipList selection="multiple" />
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


Configures the `size` of the ChipList.

The available options are:
- `small`
- `medium`
- `large`




```jsx
<ChipList size="large" />
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


Sets additional CSS styles to the ChipList.

```jsx
<ChipList style={{ margin: '10px' }} />
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


Sets the `tabIndex` attribute.

```jsx
<ChipList tabIndex={0} />
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


Represents the `text` field of Chip, used for the `label`.

```jsx
<ChipList textField="name" />
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


Represents the selection state of Chip component.

```jsx
<ChipList value={[{ text: 'SelectedChip' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### valueField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `value` field of Chip, used for setting the Chip `id`.

```jsx
<ChipList valueField="id" />
```



</td>
</tr>
</tbody>
</table>



