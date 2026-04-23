---
title: SegmentedControlProps
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the SegmentedControlProps."
api_reference: true
type: inner_api
slug: api_buttons_segmentedcontrolprops
---

# SegmentedControlProps
Represents the properties of the SegmentedControl component.

The SegmentedControl displays a horizontal set of mutually exclusive button segments, allowing the user to select one option at a time.


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


Sets the initially selected item value when the component is in uncontrolled mode (i.e., `value` is not provided).
Once set, subsequent changes to `defaultValue` are ignored.

```tsx
<SegmentedControl
  defaultValue="option2"
  onChange={(value) => console.log('Selected:', value)}
  items={items}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


[SegmentedItemProps]({% slug api_buttons_segmenteditemprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the collection of items rendered as buttons inside the SegmentedControl.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemTemplate?


</td>
<td type class="table-cell-type">


<code>


(itemData: [SegmentedItemProps]({% slug api_buttons_segmenteditemprops %})) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A custom render function for the item content. When provided, it replaces the default rendering (SVG icon + text span) entirely.
Receives the full item configuration object and must return a React node.




```tsx
<SegmentedControl
  items={items}
  itemTemplate={(itemData) => (
    <div className="custom-item-content">
      {itemData.svgIcon && <span className="icon">{itemData.svgIcon}</span>}
      <span className="text">{itemData.text}</span>
      <span className="badge">New</span>
    </div>
  )}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### layoutMode?


</td>
<td type class="table-cell-type">


<code>


"stretch" | "compact"


</code>


</td>
<td class="table-cell-default">


<code>


"compact"


</code>


</td>
<td class="table-cell-comment">


Specifies the layout mode of the SegmentedControl.

- `compact`: Items are sized based on their content (default).
- `stretch`: Items stretch to fill the available horizontal space, applying the `k-segmented-control-stretched` CSS class.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(value: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when a non-selected item is clicked and the selection changes.
Not triggered when the already-selected item is clicked.
Receives the `value` of the newly selected item.

```tsx
<SegmentedControl
  onChange={(value) => {
    console.log('Selected value:', value);
  }}
  items={items}
/>
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




</td>
<td class="table-cell-comment">


Sets the size of the SegmentedControl items. The value is mapped through `kendoThemeMaps.sizeMap` to the corresponding CSS size class.


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


The currently selected item value.
When provided, the component operates in controlled mode and `onChange` must be used to update this value.
The item whose `value` matches this prop receives the `k-selected` CSS class.

```tsx
<SegmentedControl
  value="option1"
  onChange={(value) => setSelectedValue(value)}
  items={items}
/>
```



</td>
</tr>
</tbody>
</table>



